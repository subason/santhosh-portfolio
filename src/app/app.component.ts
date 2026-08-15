import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkComponent } from './components/work/work.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProcessComponent } from './components/process/process.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WorkComponent,
    ExperienceComponent,
    SkillsComponent,
    ServicesComponent,
    AchievementsComponent,
    ProcessComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, AfterViewInit {
  loaderDone = false;
  loaderProgress = 0;

  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.theme.init();
    this.runLoader();
  }

  ngAfterViewInit(): void {
    // Give child components a tick to render before wiring up observers
    setTimeout(() => {
      this.setupRevealOnScroll();
      this.setupCursorGlow();
      this.setupButtonRipple();
      this.setupHeadingUnderline();
    }, 0);
  }

  private runLoader(): void {
    const interval = setInterval(() => {
      this.loaderProgress += Math.random() * 18 + 6;
      if (this.loaderProgress >= 100) {
        this.loaderProgress = 100;
        clearInterval(interval);
        setTimeout(() => (this.loaderDone = true), 300);
      }
    }, 60);
  }

  private setupRevealOnScroll(): void {
    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)),
        { threshold: 0.1 }
      );
      revealItems.forEach((i) => io.observe(i));
    } else {
      revealItems.forEach((i) => i.classList.add('in'));
    }
  }

  private setupHeadingUnderline(): void {
    document.querySelectorAll('.sec-top h2').forEach((h2) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              h2.classList.add('underline-ready');
              io.unobserve(h2);
            }
          });
        },
        { threshold: 0.5 }
      );
      io.observe(h2);
    });
  }

  private setupCursorGlow(): void {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const cursor = document.createElement('div');
    cursor.id = 'cursor-glow';
    cursor.style.cssText = `
      position:fixed; width:340px; height:340px;
      border-radius:50%; pointer-events:none; z-index:9998;
      background:radial-gradient(circle, rgba(255,90,31,0.07) 0%, transparent 70%);
      transform:translate(-50%,-50%);
      transition:left .15s ease, top .15s ease;
      mix-blend-mode:screen;
    `;
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }

  private setupButtonRipple(): void {
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        const me = e as MouseEvent;
        const r = document.createElement('span');
        const rc = (btn as HTMLElement).getBoundingClientRect();
        const size = Math.max(rc.width, rc.height);
        r.className = 'ripple';
        r.style.cssText = `width:${size}px;height:${size}px;left:${me.clientX - rc.left - size / 2}px;top:${me.clientY - rc.top - size / 2}px;`;
        btn.appendChild(r);
        setTimeout(() => r.remove(), 700);
      });
    });
  }
}
