import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  scrolled = false;
  progress = 0;
  activeSection = 'home';

  private navObserver?: IntersectionObserver;

  navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  constructor(private theme: ThemeService) {}

  ngAfterViewInit(): void {
    // Track which section is active while scrolling
    const sections = document.querySelectorAll('section[id], header[id]');
    this.navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => this.navObserver!.observe(s));
  }

  ngOnDestroy(): void {
    this.navObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled = y > 10;
    const total = document.body.scrollHeight - window.innerHeight;
    this.progress = total > 0 ? (y / total) * 100 : 0;
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
