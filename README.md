# Santhosh V — Portfolio (Angular)

This is a real Angular 22 (latest stable, released June 2026 — standalone components) rewrite of the portfolio site —
components, TypeScript, and a proper Angular CLI project structure, instead of a
single static HTML file.

## Structure
```
src/
  app/
    app.component.ts/html          — root shell, page loader, global scroll/reveal wiring
    services/theme.service.ts      — dark/light theme toggle (localStorage)
    components/
      navbar/        — sticky nav, scroll progress bar, active-section tracking
      hero/           — hero section, typewriter role text, photo tilt, bg-word parallax
      work/           — featured project cards
      experience/     — experience timeline + education (the section added to the site)
      skills/         — skill cards with click-to-highlight
      services/       — services grid
      achievements/   — animated stat counters (IntersectionObserver)
      process/        — workflow steps
      about/          — "worked with" cards
      contact/        — contact band
      footer/         — footer
  assets/images/      — project screenshots + profile photo (extracted from the
                         original file's inline base64 into real image files)
  styles.scss         — global styles (migrated from the original <style> block)
```

## Running it

This sandbox has no network access, so the Angular CLI / npm packages could not be
installed or verified here. To run it on your machine:

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build    # production build to dist/santhosh-portfolio
```

Requires Node.js 18+ and npm. `package.json` and `angular.json` are already set up
for Angular 17 standalone components (no NgModules needed).
