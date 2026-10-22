import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import type { A01Document, Cell, DocBlock, DocTable, Tone } from '../../core/a01.data';
import { findDocument } from '../../core/deliverable-documents';
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

interface FormalDocument {
  readonly code: string;
  readonly title: string;
  readonly version: string;
  readonly date: string;
  readonly pages: number;
  readonly file: {
    readonly name: string;
    readonly path: string;
    readonly size: string;
  };
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
  readonly doc = computed<A01Document | null>(() => findDocument(this.code()));
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

  readonly formalDocument = computed<FormalDocument | null>(() => {
    const item = this.deliverable();
    const document = this.doc();
    if (!item) {
      return null;
    }

    if (document) {
      return {
        code: document.code,
        title: document.title,
        version: document.version,
        date: document.date,
        pages: document.pages,
        file: document.file,
      };
    }

    return item.document
      ? {
          code: item.code,
          title: item.title,
          version: item.document.version,
          date: item.document.date,
          pages: item.document.pages,
          file: item.document.file,
        }
      : null;
  });

  readonly sections = computed(() => {
    const document = this.doc();
    if (!document) {
      return [];
    }

    return document.sections.map((section) => ({
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
    }));
  });

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
