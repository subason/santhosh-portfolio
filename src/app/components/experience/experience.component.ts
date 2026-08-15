import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: []
})
export class ExperienceComponent {
  responsibilities = [
    'Built and maintained responsive Angular applications (v9 to v17) with modular components.',
    'Developed dynamic forms with validation, file upload, dropdowns, chips, and date pickers using Angular Material.',
    'Created reusable NPM libraries and integrated REST APIs.',
    'Contributed to micro frontend architecture using Webpack for scalable development.',
    'Used Git, Postman, API testing, and basic cloud deployments.'
  ];

  education = [
    { meta: '07/2024 — Present · Chennai', degree: 'MCA', school: 'University of Madras' },
    { meta: '07/2020 — 05/2023 · Chennai, Tamil Nadu', degree: 'BCA', school: 'Patrician College of Arts & Science' }
  ];
}
