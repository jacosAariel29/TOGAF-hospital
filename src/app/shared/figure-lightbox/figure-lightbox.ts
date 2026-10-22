import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

export interface LightboxFigure {
  readonly number: string;
  readonly caption: string;
  readonly src: string;
  readonly alt: string;
  readonly note?: string;
}

@Component({
  selector: 'app-figure-lightbox',
  templateUrl: './figure-lightbox.html',
  styleUrl: './figure-lightbox.scss',
})
export class FigureLightbox implements OnDestroy {
  readonly figure = input.required<LightboxFigure>();
  readonly closed = output<void>();
  readonly zoomed = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private readonly previousOverflow = this.document.body.style.overflow;
  private readonly previouslyFocused =
    this.document.activeElement instanceof HTMLElement ? this.document.activeElement : null;

  constructor() {
    this.document.body.style.overflow = 'hidden';
    afterNextRender(() => this.closeButton()?.nativeElement.focus());
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = this.previousOverflow;
    this.previouslyFocused?.focus();
  }

  toggleZoom(): void {
    this.zoomed.update((value) => !value);
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closed.emit();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const panel = event.currentTarget as HTMLElement;
    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]'),
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
