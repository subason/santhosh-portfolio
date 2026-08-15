import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkedWith {
  org: string;
  role: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent {
  worked: WorkedWith[] = [
    { org: 'MaintWiz Technologies', role: 'Industry 4.0 / IIoT CMMS', desc: 'Frontend + full stack delivery for work-order, asset, and predictive maintenance modules.' },
    { org: 'VSolvE Engineering', role: 'CRM · HRMS · Sales · Banking', desc: 'Led Angular 9→20 migrations and built private NPM component libraries.' },
    { org: 'KVB (Karur Vysya Bank)', role: 'Banking & Finance', desc: 'Proofing, ECF, and AP/TA modules integrated with Java REST services.' },
    { org: 'Sundaram Finance', role: 'Real Estate (REMS)', desc: 'Dynamic screen flows, questionnaires, and mapping interfaces.' }
  ];
}
