import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { A01 } from '../../core/a01.data';
import { findDeliverable } from '../../core/phase-content.data';
import { findPhase, phaseLabel } from '../../core/phases.data';
import { PROJECT } from '../../core/project';

@Component({
  selector: 'app-preview',
  imports: [RouterLink],
  templateUrl: './preview.html',
  styleUrl: './preview.scss',
})
export class PreviewPage {
  readonly id = input.required<string>();
  readonly code = input.required<string>();
  readonly doc = A01;
  readonly loaded = signal(false);

  private readonly documentTitle = inject(Title);
  private readonly sanitizer = inject(DomSanitizer);

  readonly phase = computed(() => {
    const phase = findPhase(this.id());
    return phase ? { ...phase, label: phaseLabel(phase) } : null;
  });

  readonly deliverable = computed(() => findDeliverable(this.id(), this.code()));

  readonly fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `${A01.file.path}#view=FitH`,
  );

  constructor() {
    effect(() => {
      const deliverable = this.deliverable();
      this.documentTitle.setTitle(
        `Vista previa — ${deliverable?.code ?? A01.code} ${deliverable?.title ?? A01.title} | ${PROJECT.shortTitle}`,
      );
    });
  }

  markLoaded(): void {
    this.loaded.set(true);
  }
}
