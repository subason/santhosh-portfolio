import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: []
})
export class ProcessComponent {
  steps: Step[] = [
    { num: '01', title: 'Requirements', desc: 'Translate business needs into clear technical scope with stakeholders.' },
    { num: '02', title: 'Architect', desc: 'Plan component structure, state, and API contracts before writing code.' },
    { num: '03', title: 'Build', desc: 'Develop Angular/React modules with reusable, tested components.' },
    { num: '04', title: 'Integrate & Test', desc: 'Wire up Spring Boot APIs, run JUnit/Mockito checks and code reviews.' },
    { num: '05', title: 'Deploy', desc: 'Ship via Docker and CI/CD pipelines, then monitor on AWS.' }
  ];
}
