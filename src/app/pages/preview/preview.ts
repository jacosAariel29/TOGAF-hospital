import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { A01 } from '../../core/a01.data';
import { findDeliverable } from '../../core/phase-content.data';
import { findPhase, phaseLabel } from '../../core/phases.data';
import { PROJECT } from '../../core/project';

interface PreviewDocument {
  readonly code: string;
  readonly title: string;
  readonly version: string;
  readonly file: {
    readonly name: string;
    readonly path: string;
    readonly size: string;
  };
}

@Component({
  selector: 'app-preview',
  imports: [RouterLink],
  templateUrl: './preview.html',
  styleUrl: './preview.scss',
})
export class PreviewPage {
  readonly id = input.required<string>();
  readonly code = input.required<string>();
  readonly loaded = signal(false);

  private readonly documentTitle = inject(Title);
  private readonly sanitizer = inject(DomSanitizer);

  readonly phase = computed(() => {
    const phase = findPhase(this.id());
    return phase ? { ...phase, label: phaseLabel(phase) } : null;
  });

  readonly deliverable = computed(() => findDeliverable(this.id(), this.code()));

  readonly doc = computed<PreviewDocument | null>(() => {
    const item = this.deliverable();
    if (!item) {
      return null;
    }

    if (item.code.toUpperCase() === A01.code) {
      return {
        code: A01.code,
        title: A01.title,
        version: A01.version,
        file: A01.file,
      };
    }

    return item.document
      ? {
          code: item.code,
          title: item.title,
          version: item.document.version,
          file: item.document.file,
        }
      : null;
  });

  readonly fileUrl = computed(() => {
    const path = this.doc()?.file.path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      path ? `${path}#view=FitH` : 'about:blank',
    );
  });

  constructor() {
    effect(() => {
      const doc = this.doc();
      this.documentTitle.setTitle(
        doc
          ? `Vista previa — ${doc.code} ${doc.title} | ${PROJECT.shortTitle}`
          : `Documento no disponible | ${PROJECT.shortTitle}`,
      );
    });

    effect(() => {
      this.id();
      this.code();
      this.loaded.set(false);
    });
  }

  markLoaded(): void {
    this.loaded.set(true);
  }
}
