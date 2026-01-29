# Kenya Template

A premium, production-ready Next.js 14+ marketing template designed for startups and agencies. Built with clean architecture, modern design patterns, and Keystatic CMS.

## Features

- **Standard Tech Stack**: Next.js App Router, TypeScript, Tailwind CSS v4.
- **Clean Architecture**: Separation of concerns between UI primitives, sections, and data fetching.
- **Design System**: Comprehensive design tokens, shadcn-like primitives, and dark/light mode support (via CSS variables).
- **CMS Integration**: Local-first content management with Keystatic (GitHub mode ready).
- **Performance**: Zero-runtime CSS-in-JS (Tailwind), optimized images, and minimal client-side JavaScript headers.
- **Feature Sections**:
  - Hero with gradient text
  - Partners logo band
  - Feature grid
  - Animated stats counter
  - Testimonials
  - FAQ Accordion
  - Call to Action

## Getting Started

### Prerequisites

- Node.js 20.9.0 or later
- pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd kenya-www
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.
5. Open [http://localhost:3000/keystatic](http://localhost:3000/keystatic) to access the CMS admin.

## Project Structure

```
/src
  /app              # Next.js App Router pages
  /components
    /ui             # Reusable low-level primitives (Button, Card, etc.)
    /sections       # Full-width page sections (Hero, Features, etc.)
    /layout         # Global layout components (Header, Footer)
  /content          # Keystatic content files (YAML/MD)
  /lib
    /content        # CMS reader functions
    /utils          # Helper functions (cn, etc.)
  /styles           # Global CSS and Tailwind config
```

## Customization

### Design System
Edit `src/styles/globals.css` to update CSS variables for colors, radius, and fonts. The Tailwind config in `globals.css` (@theme block) maps these variables to utility classes.

### Content
Edit content directly via the Keystatic Admin UI at `/keystatic` or modify the YAML files in `src/content`.

## Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. For CMS editing in production, follow the [Keystatic GitHub Mode guide](https://keystatic.com/docs/github-mode) to configure the GitHub App.

## License

MIT
