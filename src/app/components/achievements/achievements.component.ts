import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  badge: string;
  raw: string;
  num: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: []
})
export class AchievementsComponent implements AfterViewInit {
  achievements: Achievement[] = [
    { badge: 'V9→20', raw: '100%', num: 100, suffix: '%', label: 'KVB migrated to<br>Angular 20' },
    { badge: 'PERF', raw: '30–40%', num: 40, suffix: '%', label: 'Performance gain<br>across CRM & HRMS' },
    { badge: 'UI', raw: '100+', num: 100, suffix: '+', label: 'Components<br>modernized' },
    { badge: 'BI', raw: '30+', num: 30, suffix: '+', label: 'QuickSight dashboards<br>in 1 month' },
    { badge: 'SHIP', raw: '1 Day', num: 1, suffix: ' Day', label: 'Sales module migrated,<br>zero downtime' }
  ];

  @ViewChildren('statNum') statNums!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCount(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    this.statNums.forEach((el) => io.observe(el.nativeElement));
  }

  private animateCount(el: HTMLElement): void {
    const target = Number(el.dataset['target']);
    const suffix = el.dataset['suffix'] || '';
    const duration = 1400;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };
    requestAnimationFrame(step);
  }
}
