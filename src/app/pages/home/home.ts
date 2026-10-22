import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHASES, phaseHeading, phaseLabel } from '../../core/phases.data';
import { OBJECTIVE_GENERAL, OBJECTIVES_SPECIFIC, PROJECT } from '../../core/project';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { SiteHeader } from '../../shared/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SiteHeader, SiteFooter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly project = PROJECT;
  readonly general = OBJECTIVE_GENERAL;
  readonly specific = OBJECTIVES_SPECIFIC;
  readonly phases = PHASES.map((phase) => ({
    ...phase,
    label: phase.id === 'preliminar' ? 'Previa al ciclo ADM' : phaseLabel(phase),
    heading: phaseHeading(phase),
  }));
}
