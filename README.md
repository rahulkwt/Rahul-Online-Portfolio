# Rahul Sunil — Portfolio

Personal portfolio site for **Rahul Sunil** — Computer Science undergraduate at the University
of Houston and Associate Consultant at OFS Inventory.

**Live:** https://rahulkwt.github.io/Rahul-Online-Portfolio/

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Build      | Vite 8 + React 18 + TypeScript                 |
| Styling    | Tailwind CSS 3 (shadcn/ui project conventions) |
| Animation  | Framer Motion                                  |
| Particles  | `@tsparticles/react` + `@tsparticles/slim`     |
| Icons      | `lucide-react`, plus local brand marks         |
| Hosting    | GitHub Pages via GitHub Actions                |

## Sections

Hero · About · Skills · Experience · Certifications · Projects · Contact

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/Rahul-Online-Portfolio/
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Editing content

All site copy lives in one typed file — **`src/data/profile.ts`**. Contact details, skills,
experience, certifications and projects are exported from there, so nothing needs to be
changed inside the components to update the site.

To swap the portrait, replace `src/assets/rahul-sunil.png`. To swap the resume, replace
`public/Rahul_Sunil_Resume.pdf` (the filename is referenced by `profile.resume`).

## Project structure

```
src/
  App.tsx                     page composition
  data/profile.ts             all real resume content (single source of truth)
  lib/utils.ts                cn() class merge helper
  components/
    nav.tsx  footer.tsx
    sections/                 hero, about, skills, experience,
                              certifications, projects, contact
    ui/                       shadcn-convention primitives:
      sparkles.tsx            tsparticles hero field
      reveal.tsx              scroll-entrance wrapper
      section.tsx             section shell
      brand-icons.tsx         GitHub / LinkedIn marks
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/`
to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source = GitHub Actions**.

The Vite `base` is `/Rahul-Online-Portfolio/`. If the repository is ever renamed, update `base`
in `vite.config.ts` and the absolute URLs in `index.html` to match.

## Accessibility & performance

- Every entrance animation is disabled under `prefers-reduced-motion`, including the particle field.
- Skip link, visible focus rings, labelled icon links, and a keyboard-operable mobile menu.
- The particle engine is lazy-loaded, keeping the initial JS payload ~107 kB gzipped.
