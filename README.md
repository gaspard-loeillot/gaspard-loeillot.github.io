# gaspard-loeillot.github.io

Personal website of Gaspard Loeillot. Blog-first site with essays, podcasts,
projects, and quotes. Built with [Astro](https://astro.build) +
[Tailwind CSS v4](https://tailwindcss.com) + MDX.

Deployed to [GitHub Pages](https://gaspard-loeillot.github.io) on every push to
`main` via GitHub Actions.

## Local development

```bash
npm install    # once
npm run dev    # starts dev server at http://localhost:4321
```

Other scripts:

```bash
npm run build     # production build → ./dist
npm run preview   # serve the production build locally
```

## Content model

All content lives in `src/content/` and `src/data/`. Adding a new piece of
content is always "create one file".

### Add an essay

Create `src/content/essays/my-essay-slug.mdx`:

```mdx
---
title: "The title of the essay"
date: 2026-04-16
description: "One-line subtitle shown on cards and meta tags."
tags: ["startups", "engineering"]
# coverImage: "/images/essay-cover.jpg"   # optional
# draft: true                              # optional; hides from all pages
---

Essay body in Markdown or MDX. Standard syntax: `**bold**`, `*italics*`,
`[link text](https://...)`, headings with `##`, and so on.
```

The file's name (minus `.mdx`) becomes the URL slug: `/essays/my-essay-slug/`.

### Add a podcast episode

Create `src/content/podcasts/episode-012-jane-doe.mdx`:

```mdx
---
title: "On building hardware from scratch"
date: 2026-05-20
guest: "Jane Doe"
description: "Jane is the CTO of X. We talked about supply chains, first principles, and why she stopped writing software."
episodeNumber: 12
duration: "1:04:22"
audioUrl: "https://example.com/podcasts/ep-012.mp3"
---

### Show notes

- 0:00 — intro
- 12:34 — the pivot
- 34:56 — on hiring
```

### Add a project

Create `src/content/projects/my-project.mdx`:

```mdx
---
name: "Project Name"
tagline: "One sentence describing what it is."
role: "Founding engineer"
period: "2024 — 2025"
status: "shipped"              # active | shipped | archived
order: 1                        # lower = displayed first
url: "https://project.com"
repoUrl: "https://github.com/you/repo"
# coverImage: "/images/project-cover.jpg"
---

A paragraph or two about the project.
```

### Add a quote

Edit `src/data/quotes.json`. Append an object:

```json
{
  "text": "The quote text itself.",
  "attribution": "Author Name",
  "source": "Book or context (optional)"
}
```

## Images

Drop image files in `public/images/`. Reference them with `/images/filename.jpg`
(the leading slash is important).

- Homepage / About photo: `public/images/gaspard.jpg` (shown if present; skipped
  if missing).
- Essay cover images: referenced from an essay's `coverImage` frontmatter.

## Site-wide settings

Edit `src/consts.ts` to update:

- Site URL, title, description
- Author info
- Social links (LinkedIn, Twitter, GitHub)
- Navigation items

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site with Astro and deploys the static output to GitHub Pages.

**First-time setup on GitHub:**

1. Create a new GitHub repo named `gaspard-loeillot.github.io` (the user-site
   naming convention — it must exactly equal `<username>.github.io`).
2. Set the repo's Pages source to **GitHub Actions**: Settings → Pages →
   Source → "GitHub Actions".
3. Push `main`. The action runs and your site goes live at
   <https://gaspard-loeillot.github.io>.

### Custom domain (optional, later)

To use e.g. `gaspardloeillot.com`:

1. Add `gaspardloeillot.com` in Settings → Pages → Custom domain.
2. Create a file `public/CNAME` containing just `gaspardloeillot.com` (no
   protocol, no trailing slash).
3. At your registrar, point the domain's DNS to GitHub Pages per
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. Update `SITE_URL` in `src/consts.ts` to the new domain.

## Stack decisions (for posterity)

- **Astro** over Next.js: content-first, ships zero JS by default → faster
  reads, matches the editorial aesthetic.
- **Tailwind v4** over hand-written CSS: fast iteration, design tokens via
  `@theme`, manual `.dark` class variant for an explicit dark-mode toggle.
- **MDX** for essays/podcasts/projects: Markdown for the body + frontmatter
  schema validated by Zod via Astro Content Collections.
- **GitHub Pages** via `withastro/action@v4` + `actions/deploy-pages@v4`: no
  branch-based (`gh-pages`) deploys; the action uploads a build artifact and
  Pages serves it.
