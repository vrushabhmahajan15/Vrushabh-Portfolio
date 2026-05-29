# Vrushabh Mahajan Portfolio

Clean Vite + React + TypeScript rebuild of the original cyberpunk data portfolio.

## What Was Preserved

- Neon glassmorphism visual style
- Particle canvas background
- Custom cursor and hover glow
- Floating navigation dock
- Hero typewriter text, scanline, grid, and neural orb
- Framer Motion section reveals
- 3D project card tilt
- Animated skills, project visuals, dashboard charts, and timeline
- Floating chatbot with portfolio-specific replies
- Formspree contact form
- Resume view/download buttons
- Mobile responsive layout

## What Was Removed

- TanStack Start server runtime
- TanStack Router and generated route tree
- React Query
- Cloudflare/Lovable deployment config
- Unused shadcn/Radix UI component library
- Unused form, chart, carousel, command, drawer, and notification dependencies

## Folder Structure

```text
.
├── index.html
├── package.json
├── public/
│   └── Vrushabh_CV.pdf
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   ├── styles.css
│   ├── vite-env.d.ts
│   └── components/
│       ├── About.tsx
│       ├── Certifications.tsx
│       ├── Chatbot.tsx
│       ├── Contact.tsx
│       ├── CustomCursor.tsx
│       ├── Dashboard.tsx
│       ├── Dock.tsx
│       ├── Hero.tsx
│       ├── ParticleField.tsx
│       ├── Projects.tsx
│       ├── SectionHeading.tsx
│       ├── Skills.tsx
│       ├── TiltCard.tsx
│       └── Timeline.tsx
├── tsconfig.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Railway

- Build command: `npm run build`
- Start command: `npm run preview -- --host 0.0.0.0 --port $PORT`

### GitHub Pages

```bash
npm run deploy:gh-pages
```
