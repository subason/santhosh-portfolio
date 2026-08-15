import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  pct: number;
  color: string;
  icon: SafeHtml;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: []
})
export class SkillsComponent {
  skills: Skill[];

  constructor(private sanitizer: DomSanitizer) {
    const raw: { name: string; pct: number; color: string; svg: string }[] = [
      {
        name: 'Angular', pct: 95, color: '#DD0031',
        svg: `<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"/>
          <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2"/>
          <path fill="#fff" d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2H183L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>
        </svg>`
      },
      {
        name: 'TypeScript', pct: 90, color: '#3178C6',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" rx="30" fill="#3178C6"/>
          <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.3-.3-31.7-.4-70-.4l-69.7.3v16.3zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 3.9 9.2 11 9.6 12.8.1.5-17.3 12.3-27.8 18.9-.4.3-1.9-1.4-3.6-3.9-5.1-7.4-10.5-10.6-18.7-11.2-12.1-.8-19.8 5.5-19.8 16 0 3.1.5 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 40.9 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22.2 28-44.3 31.7-6.8 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15.2 14.5 12.8 6.7 30.1 5.7 38.7-2 3.7-3.4 5.3-6.9 5.3-12 0-4.6-.7-6.7-3-10.2-3.1-4.5-9.3-8.3-27-16.1-20.2-8.6-29-13.9-37-22.1-4.6-4.7-8.9-12.3-11.1-20-1.5-5.8-1.9-20.4-.6-26.1 4.9-23 22.7-39.1 47.5-43.4 8.2-1.4 27.3-.8 35.4 1.1z"/>
        </svg>`
      },
      {
        name: 'Java / Spring Boot', pct: 88, color: '#6DB33F',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#6DB33F"/>
          <path fill="#fff" d="M38.7 68.5s-3.2 1.9 2.3 2.5c6.6.8 10 .7 17.3-.7 0 0 1.9 1.2 4.6 2.3-16.4 7-37.1-.4-24.2-4.1zm-2-9.3s-3.6 2.7 1.9 3.3c7.1.7 12.7.8 22.4-1.1 0 0 1.3 1.4 3.4 2.1-19.8 5.8-41.9.5-27.7-4.3z"/>
          <path fill="#fff" d="M55.3 44.3c4 4.6-.8 8.7-.8 8.7s10.2-5.3 5.5-11.9c-4.4-6.2-7.8-9.3 10.5-19.9 0 0-28.7 7.2-15.2 23.1z"/>
          <path fill="#fff" d="M72.1 75.6s2.4 2-2.6 3.5c-9.6 2.9-39.9 3.8-48.3.1-3-.1.3-1.3 1.3-1.5 1-.2 1.6-.2 1.6-.2-1.9-1.3-12.2 2.6-5.2 3.7 18.9 3.1 34.5-1.4 53.2-5.6zm-33-23.9s-8.8 2.1-3.1 2.9c2.4.3 7.2.2 11.7-.1 3.7-.3 7.4-.9 7.4-.9s-1.3.6-2.2 1.2c-8.9 2.3-26.1 1.2-21.2-.6 4.2-1.6 7.4-2.5 7.4-2.5zm16 8.9c9-4.7 4.9-9.2 1.9-8.6-.7.1-1 .3-1 .3s.3-.4.8-.6c5.7-2 10.1 5.9-1.9 9-.1 0 .1-.1.2-.1z"/>
          <path fill="#fff" d="M58.9 15s5 5-4.8 12.8c-7.9 6.2-1.8 9.8 0 13.8-4.6-4.1-7.9-7.7-5.7-11.1 3.4-5 12.8-7.4 10.5-15.5z"/>
          <path fill="#fff" d="M40.5 83.7c8.6.6 21.9-.3 22.2-4.5 0 0-.6 1.5-7.1 2.7-7.5 1.4-16.7 1.2-22.2.3 0 .1 1.1.9 7.1 1.5z"/>
        </svg>`
      },
      {
        name: 'REST APIs', pct: 92, color: '#FF5A1F',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FF5A1F"/>
          <text x="50" y="44" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" font-family="monospace">REST</text>
          <text x="50" y="62" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace">API</text>
          <line x1="20" y1="72" x2="80" y2="72" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          <polyline points="70,66 80,72 70,78" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
      },
      {
        name: 'AWS', pct: 75, color: '#FF9900',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#232F3E"/>
          <path fill="#FF9900" d="M30 62 q5 8 14 8 q4 0 6-2 q7 5 16 2 q6-2 8-8 q6-1 8-6 q2-5-2-9 q2-6-3-10 q-5-4-11-2 q-4-7-12-7 q-9 0-13 7 q-7 0-10 5 q-3 5 0 10 q-3 3-3 7 q0 5 2 5z"/>
          <text x="50" y="68" text-anchor="middle" fill="#232F3E" font-size="11" font-weight="bold" font-family="sans-serif">AWS</text>
        </svg>`
      },
      {
        name: 'Docker', pct: 70, color: '#2496ED',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#2496ED"/>
          <g fill="#fff">
            <rect x="18" y="46" width="12" height="10" rx="1"/>
            <rect x="32" y="46" width="12" height="10" rx="1"/>
            <rect x="46" y="46" width="12" height="10" rx="1"/>
            <rect x="32" y="34" width="12" height="10" rx="1"/>
            <rect x="46" y="34" width="12" height="10" rx="1"/>
            <rect x="46" y="22" width="12" height="10" rx="1"/>
          </g>
          <path fill="#fff" d="M80 51c-1.5-1-5-1.5-7.7-1c-0.4-2.8-2-5.2-4.8-7l-1.6-1l-1.1 1.6c-1.4 2.1-2 5-1.7 7.5c-1.2-0.7-3.6-1.5-6.7-1.1H18c-0.3 5.4 1.5 10 5 13.2c4 3.4 9 5.1 15.7 5.1c14.9 0 26-7 31.3-19.7c2 0.1 6.3 0.1 8.5-4.1c0.2-0.3 0.7-1.5 0.7-1.5l-1.2-0.7z"/>
        </svg>`
      },
      {
        name: 'React', pct: 78, color: '#61DAFB',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#20232A"/>
          <ellipse cx="50" cy="50" rx="10" ry="10" fill="#61DAFB"/>
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="4"/>
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="4" transform="rotate(120 50 50)"/>
        </svg>`
      },
      {
        name: 'MySQL', pct: 82, color: '#00758F',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#00758F"/>
          <ellipse cx="50" cy="28" rx="30" ry="10" fill="#F29111"/>
          <path fill="#F29111" d="M20 28 v8 c0 5.5 13.4 10 30 10 s30-4.5 30-10 v-8 c0 5.5-13.4 10-30 10 s-30-4.5-30-10z"/>
          <path fill="#fff" fill-opacity="0.7" d="M20 46 v8 c0 5.5 13.4 10 30 10 s30-4.5 30-10 v-8 c0 5.5-13.4 10-30 10 s-30-4.5-30-10z"/>
          <path fill="#fff" fill-opacity="0.5" d="M20 64 v8 c0 5.5 13.4 10 30 10 s30-4.5 30-10 v-8 c0 5.5-13.4 10-30 10 s-30-4.5-30-10z"/>
        </svg>`
      }
    ];

    this.skills = raw.map(s => ({
      name: s.name,
      pct: s.pct,
      color: s.color,
      icon: this.sanitizer.bypassSecurityTrustHtml(s.svg)
    }));
  }

  selectedIndex = 0;

  select(i: number): void {
    this.selectedIndex = i;
  }
}
