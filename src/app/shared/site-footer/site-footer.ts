import { Component } from '@angular/core';
import { PROJECT } from '../../core/project';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly project = PROJECT;
}
