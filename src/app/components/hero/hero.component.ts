import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: []
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgWord') bgWordRef!: ElementRef<HTMLDivElement>;
  @ViewChild('heroInner') heroInnerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('heroEl') heroElRef!: ElementRef<HTMLElement>;
  @ViewChild('photoCol') photoColRef!: ElementRef<HTMLDivElement>;
  @ViewChild('photoWrap') photoWrapRef!: ElementRef<HTMLDivElement>;
  @ViewChild('roleEl') roleElRef!: ElementRef<HTMLDivElement>;

  private typewriterTimer: any;
  private readonly lines = [
    'Angular Full Stack Developer',
    'Frontend Specialist',
    'UI Architecture Expert'
  ];

  ngAfterViewInit(): void {
    this.fitBgWord();
    setTimeout(() => this.typeWriter(0, 0, false), 1800);

    if (window.matchMedia('(pointer:fine)').matches) {
      const photoCol = this.photoColRef.nativeElement;
      const photoWrap = this.photoWrapRef.nativeElement;
      photoCol.addEventListener('mousemove', (e) => {
        const r = photoWrap.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        photoWrap.style.transform = `rotateY(${px * 10}deg) rotateX(${py * -8}deg)`;
      });
      photoCol.addEventListener('mouseleave', () => {
        photoWrap.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.typewriterTimer);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.fitBgWord();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    const bgWord = this.bgWordRef?.nativeElement;
    if (bgWord) {
      bgWord.style.transform = `translate(-50%, calc(-50% + ${y * 0.28}px))`;
    }
    const heroEl = this.heroElRef?.nativeElement;
    const heroInner = this.heroInnerRef?.nativeElement;
    if (heroEl && heroInner) {
      const heroH = heroEl.offsetHeight || 1;
      const p = Math.min(Math.max(y / heroH, 0), 1);
      heroInner.style.opacity = String(1 - p * 0.6);
      heroInner.style.transform = `translateY(${p * 36}px) scale(${1 - p * 0.035})`;
    }
  }

  private fitBgWord(): void {
    const bgWord = this.bgWordRef?.nativeElement;
    if (!bgWord) return;
    bgWord.style.fontSize = '100px';
    const ratio = window.innerWidth / bgWord.scrollWidth;
    bgWord.style.fontSize = Math.floor(100 * ratio * 0.98) + 'px';
  }

  private typeWriter(li: number, ci: number, deleting: boolean): void {
    const roleEl = this.roleElRef?.nativeElement;
    if (!roleEl) return;
    const current = this.lines[li];
    if (!deleting) {
      roleEl.innerHTML = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) {
        this.typewriterTimer = setTimeout(() => this.typeWriter(li, ci, true), 2200);
        return;
      }
    } else {
      roleEl.innerHTML = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        li = (li + 1) % this.lines.length;
      }
    }
    this.typewriterTimer = setTimeout(() => this.typeWriter(li, ci, deleting), deleting ? 55 : 80);
  }
}
