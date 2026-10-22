import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { A01, type Cell, type DocBlock, type DocTable, type Tone } from '../../core/a01.data';
import { findDeliverable } from '../../core/phase-content.data';
import { findPhase, neighbourPhases, phaseLabel } from '../../core/phases.data';
import { PROJECT } from '../../core/project';
import { FigureLightbox, type LightboxFigure } from '../../shared/figure-lightbox/figure-lightbox';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { SiteHeader } from '../../shared/site-header/site-header';

interface CellView {
  readonly t: string;
  readonly tone?: Tone;
  readonly strong?: boolean;
}

interface TableView extends Omit<DocTable, 'rows'> {
  readonly rows: readonly (readonly CellView[])[];
  readonly codes: boolean;
}

const CODE = /^[A-Z]{1,5}(-[A-Z]{1,3})?[.-]\d{1,2}$/;

function cellText(cell: Cell): string {
  return typeof cell === 'string' ? cell : cell.t;
}

function normalizeCell(cell: Cell): CellView {
  return typeof cell === 'string' ? { t: cell } : cell;
}

@Component({
  selector: 'app-deliverable',
  imports: [RouterLink, SiteHeader, SiteFooter, FigureLightbox],
  templateUrl: './deliverable.html',
  styleUrl: './deliverable.scss',
})
export class DeliverablePage {
  readonly id = input.required<string>();
  readonly code = input.required<string>();
  readonly project = PROJECT;
  readonly doc = A01;
  readonly selected = signal<LightboxFigure | null>(null);

  private readonly documentTitle = inject(Title);

  readonly phase = computed(() => {
    const phase = findPhase(this.id());
    return phase ? { ...phase, label: phaseLabel(phase) } : null;
  });

  readonly deliverable = computed(() => {
    const deliverable = findDeliverable(this.id(), this.code());
    return deliverable?.status === 'available' ? deliverable : undefined;
  });

  readonly isDocument = computed(
    () => this.code().toUpperCase() === A01.code && this.id().toLowerCase() === 'a',
  );

  readonly sections = computed(() =>
    A01.sections.map((section) => ({
      ...section,
      blocks: section.blocks.map((block) =>
        block.kind === 'table'
          ? {
              ...block,
              rows: block.rows.map((row) => row.map(normalizeCell)),
              codes: block.rows.every((row) => CODE.test(cellText(row[0]))),
            }
          : block,
      ),
    })),
  );

  readonly nav = computed(() => {
    const phase = findPhase(this.id());
    if (!phase) {
      return { previous: null, next: null };
    }

    const { previous, next } = neighbourPhases(phase);
    return {
      previous: previous ? { ...previous, label: phaseLabel(previous) } : null,
      next: next ? { ...next, label: phaseLabel(next) } : null,
    };
  });

  constructor() {
    effect(() => {
      const deliverable = this.deliverable();
      const phase = this.phase();

      this.documentTitle.setTitle(
        deliverable
          ? `${deliverable.code} — ${deliverable.title} | ${phase?.label ?? ''} | ${PROJECT.shortTitle}`
          : `Entregable no disponible | ${PROJECT.shortTitle}`,
      );
    });
  }

  previewLink(): (string | number)[] {
    return ['/fase', this.id(), 'entregable', this.code(), 'vista-previa'];
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `${location.pathname}#${id}`);
  }

  openFigure(block: Extract<DocBlock, { kind: 'figure' }>): void {
    const figure = block.figure;
    this.selected.set({
      number: block.number,
      caption: block.caption,
      src: figure.src,
      alt: figure.alt,
      note: block.note,
    });
  }

  closeFigure(): void {
    this.selected.set(null);
  }
}
