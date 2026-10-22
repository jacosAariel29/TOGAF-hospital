import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { findPhaseContent } from '../../core/phase-content.data';
import {
  findPhase,
  neighbourPhases,
  phaseHeading,
  phaseLabel,
} from '../../core/phases.data';
import { PROJECT } from '../../core/project';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { SiteHeader } from '../../shared/site-header/site-header';

@Component({
  selector: 'app-phase',
  imports: [RouterLink, SiteHeader, SiteFooter],
  templateUrl: './phase.html',
  styleUrl: './phase.scss',
})
export class PhasePage {
  readonly id = input.required<string>();
  readonly project = PROJECT;

  private readonly documentTitle = inject(Title);

  readonly phase = computed(() => {
    const phase = findPhase(this.id());
    return phase
      ? { ...phase, label: phaseLabel(phase), heading: phaseHeading(phase) }
      : null;
  });

  readonly content = computed(() => findPhaseContent(this.id()));

  readonly nav = computed(() => {
    const phase = this.phase();
    if (!phase) {
      return { previous: null, next: null };
    }

    const { previous, next } = neighbourPhases(phase);
    return {
      previous: previous ? { ...previous, label: phaseLabel(previous) } : null,
      next: next ? { ...next, label: phaseLabel(next) } : null,
    };
  });

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `${location.pathname}#${id}`);
  }

  constructor() {
    effect(() => {
      const phase = this.phase();
      this.documentTitle.setTitle(
        phase
          ? `${phase.label} — ${phase.heading} | ${PROJECT.shortTitle}`
          : `Fase no encontrada | ${PROJECT.shortTitle}`,
      );
    });
  }
}
