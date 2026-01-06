# 🌀 CSS Loader Gallery

A collection of **175+ unique pure CSS loading animations** built with Next.js. Browse, preview, and copy ready-to-use loader code for your projects.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![CSS](https://img.shields.io/badge/Pure%20CSS-Animations-blue)
![Loaders](https://img.shields.io/badge/Loaders-175+-purple)

## ✨ Features

- **175+ Unique Loaders** - Spinners, dots, bars, pulses, 3D effects, creative designs
- **Category Filter** - Browse by type: Spinners, Dots, Bars, Shapes, Pulses, Orbits, etc.
- **Search** - Find loaders by name or ID
- **Copy Code** - One-click copy for HTML, CSS, or full Markdown template
- **Live Preview** - See animations running in real-time
- **Dark Theme** - Beautiful dark UI with glassmorphism effects
- **Responsive** - Works on all screen sizes

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build
```

Open [http://localhost:3000](http://localhost:3000) to see the gallery.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main gallery page
│   └── globals.css       # Global styles
├── db/
│   ├── index.ts          # Loader data (ID, name, HTML)
│   └── loader-css.ts     # CSS for each loader (auto-generated)
├── styles/
│   ├── loaders.css       # Loaders 001-025
│   ├── loaders-026-050.css
│   ├── loaders-051-075.css
│   ├── loaders-076-100.css
│   ├── loaders-101-125.css
│   ├── loaders-126-150.css
│   └── loaders-151-175.css
└── types/
    └── index.ts          # TypeScript types

scripts/
└── generate-loader-css.js  # Generates loader-css.ts from CSS files
```

## 🔧 Adding New Loaders

1. Add CSS to the appropriate `src/styles/loaders-XXX.css` file:
```css
/* 176: My Loader */
.loader-176 {
    /* your styles */
}
```

2. Add loader data to `src/db/index.ts`:
```typescript
{ id: "176", name: "My Loader", html: '<div class="loader-176"></div>', category: "spinners" },
```

3. Regenerate CSS mapping:
```bash
node scripts/generate-loader-css.js
```

## 📋 Loader Categories

| Category | Icon | Description |
|----------|------|-------------|
| Spinners | ◌ | Rotating ring animations |
| Dots | ••• | Bouncing/pulsing dots |
| Bars | ▮▮▮ | Wave and equalizer bars |
| Shapes | ◇ | Geometric shape animations |
| Pulses | ◎ | Expanding ring effects |
| Orbits | ◯ | Orbital/planetary motion |
| Bouncing | ⬤ | Ball bouncing animations |
| Grids | ▦ | Grid-based animations |
| 3D | ◰ | 3D flip/rotate effects |
| Glowing | ✧ | Neon glow animations |
| Mechanical | ⚙ | Gear/clock animations |
| Creative | ★ | Unique creative loaders |
| Progress | ▬ | Progress indicators |
| Text | Aa | Text-based animations |

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **Styling**: Pure CSS animations + Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: Bun

## 📄 License

MIT License - Feel free to use these loaders in your projects!

---

Made with ❤️ for the web development community
