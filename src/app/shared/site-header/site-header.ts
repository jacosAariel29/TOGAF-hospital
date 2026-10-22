import { Component, HostListener, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECT } from '../../core/project';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: {
    '[class.is-overlay]': "variant() === 'overlay'",
  },
})
export class SiteHeader {
  readonly variant = input<'overlay' | 'solid'>('solid');
  readonly project = PROJECT;
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 72);
  }
}
