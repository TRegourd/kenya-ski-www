# Kenya Ski Federation Website

The official website for the Kenya Ski Federation, built with modern web technologies to showcase the federation's mission, athletes, and programs.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
- **CMS**: [Keystatic](https://keystatic.com/) (Git-based content management)
- **Email**: [Resend](https://resend.com/) (Contact form inquiries)
- **Deployment**: Vercel

## Features

- 🎨 **Premium Design**: Custom design system with a bold aesthetic reflecting the Kenyan flag colors.
- 📱 **Fully Responsive**: Optimized for all devices with a custom mobile navigation portal.
- 📝 **Full CMS Control**: All content (FAQs, Team, Homepage, Pages) is editable via `/keystatic`.
- ⚡ **High Performance**: Static generation for content pages and optimized images.
- 📧 **Working Contact Form**: Integrated with Resend for reliable email delivery.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kenya-www
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   *Note: For local development, you don't strictly need API keys if you aren't testing the email sending or GitHub CMS sync.*

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Access the site**
   - Website: [http://localhost:3000](http://localhost:3000)
   - CMS Admin: [http://localhost:3000/keystatic](http://localhost:3000/keystatic)

## Configuration & Deployment

### Environment Variables

See `.env.example` for the complete list of required variables.

- **CMS (Keystatic)**: Requires a GitHub App for production mode.
- **Email (Resend)**: Requires a Resend API Key.

### Production Deployment (Vercel)

1. Connect your GitHub repository to Vercel.
2. Configure the **Environment Variables** in Vercel settings (copy from `.env.example`).
   - You will need to create a [GitHub App](https://keystatic.com/docs/github-mode) to get the `KEYSTATIC_GITHUB_CLIENT_ID` and `SECRET`.
   - You will need a [Resend](https://resend.com) API key for comments.
3. Deploy!

### CMS Mode

- **Development**: The CMS defaults to `local` mode, saving files directly to your disk in `src/content`.
- **Production**: The CMS switches to `github` mode, committing changes directly to your repository via the GitHub App.

## Project Structure

```
/src
  /app              # Next.js App Router
  /components
    /layout         # Header, Footer, MobileNav
    /sections       # Page sections (Hero, Stats, FAQ, etc.)
    /ui             # Reusable primitives (Buttons, Inputs)
  /content          # Content files (YAML) managed by Keystatic
  /lib
    /content        # Data fetching logic
    /email          # Email sending logic
  /styles           # Global CSS and Design Tokens
```

## License

MIT
