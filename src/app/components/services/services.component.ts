import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: []
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Angular Architecture', desc: 'Component-driven UIs, standalone components, reusable NPM libraries, and version migrations from v9 to v20.' },
    { title: 'Micro Frontends', desc: 'Module Federation setups joining an Angular shell with independently deployable React feature modules.' },
    { title: 'Full Stack Integration', desc: 'End-to-end feature delivery with Java, Spring Boot, Spring Data JPA, and REST APIs.' },
    { title: 'Cloud & Analytics', desc: 'AWS deployments, Docker containerization, CI/CD pipelines, and custom QuickSight dashboards.' }
  ];
}
