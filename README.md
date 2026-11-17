# My Rules | Docs

![App Preview](https://imgix.cosmicjs.com/5a954c10-797e-11f1-a959-df6e945f2fa2-autopilot-photo-1526374965328-7f61d4dc18c5-1783371901548.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern documentation site for **My Rules** built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Browse organized documentation sections, read in-depth articles with syntax-highlighted code samples, and track product changes in a clean changelog.

## Features

- 📚 **Organized Sections** — Documentation grouped into logical sections with custom icons and display ordering
- 📄 **Rich Articles** — Full-content articles with code samples, featured highlighting, and last-updated tracking
- 🚀 **Changelog** — Version history with change-type badges (New, Improved, Fixed, etc.) and release notes
- 🔍 **Sidebar Navigation** — Persistent, section-based sidebar for quick navigation
- 🎨 **Modern, Responsive UI** — Clean typography, dark-friendly accents, and a fully responsive layout
- ⚡ **Server-Rendered** — Fast page loads powered by Next.js App Router and server components

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6afc79242aa15417d6f69a12&clone_repository=6a4c193d67f2f6a3f80505a3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a documentation site with documentation pages organized by section, version info, and a changelog.
>
> User instructions: A documentation site with sections, articles, a changelog, and code samples
>
> The user is rebuilding an existing website and provided these design notes: myrulessocial.com. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for a content management system called "My Rules | Docs". The content is managed in Cosmic CMS with the following object types: sections, articles, changelog-entries, site-settings. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A documentation site with sections, articles, a changelog, and code samples. The user is rebuilding an existing website and wants these design improvements: myrulessocial.com.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Set the following in your hosting platform or a local `.env.local` file:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

Fetch all sections ordered by display order:

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: sections } = await cosmic.objects
  .find({ type: 'sections' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

Fetch articles for a section (query by object relationship id):

```typescript
const { objects: articles } = await cosmic.objects
  .find({ type: 'articles', 'metadata.section': sectionId })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types in your Cosmic bucket:

- **sections** — `name`, `description`, `icon`, `display_order`
- **articles** — `title`, `content`, `code_sample`, `section`, `order_in_section`, `featured`, `last_updated`
- **changelog-entries** — `version`, `release_date`, `change_type`, `release_notes`
- **site-settings** — `site_title`, `tagline`, `current_version`, `github_url`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Import the repo, add environment variables, and deploy.
- **Netlify** — Connect the repo, set the build command to `bun run build`, and add environment variables.

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your platform's environment variable settings.
<!-- README_END -->