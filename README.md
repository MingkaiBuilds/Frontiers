# Physical Extremes

A premium, static Astro research portfolio for long-form engineering reports across five physical frontiers. The project uses typed local Markdown/MDX, KaTeX, Tailwind CSS 4, and zero client-side JavaScript in the default page shell.

## Project structure

```text
physical-extremes/
├── public/
│   ├── favicon.png
│   └── og.png
├── src/
│   ├── components/
│   │   ├── FrontierCard.astro
│   │   ├── ReportGraph.astro
│   │   ├── ReportRow.astro
│   │   ├── ReportStudio.astro
│   │   └── SiteHeader.astro
│   ├── content/
│   │   └── blog/
│   │       └── .gitkeep
│   ├── data/
│   │   └── frontiers.ts
│   ├── layouts/
│   │   ├── ArticleLayout.astro
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── reports/
│   │   │   └── [...slug].astro
│   │   ├── studio/
│   │   │   └── index.astro
│   │   └── index.astro
│   ├── plugins/
│   │   └── rehype-figure-captions.mjs
│   ├── styles/
│   │   └── global.css
│   ├── content.config.ts
│   └── env.d.ts
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tsconfig.json
└── vercel.json
```

## Local development

```bash
npm install
npm run dev
```

Build and type-check the deployable site:

```bash
npm run build
```

## Authoring a report

Open `/Frontiers/studio/` on the deployed site to use the browser-based report studio. It provides live Markdown and KaTeX rendering, local draft persistence, technical-figure import, and a repository-ready ZIP export. The studio does not transmit drafts or GitHub credentials.

The ZIP contains the report and all imported images under their final repository paths. Copy its `src/` and `public/` folders into the repository, then commit and push to publish.

You can also author directly in the repository:

Add a `.md` or `.mdx` file anywhere beneath `src/content/blog/`. Frontmatter is validated by `src/content.config.ts`.

```md
---
title: "A concise report title"
description: "One-sentence abstract."
frontier: "Deep Space"
published: 2026-08-11
readingTime: "9 min"
reportNo: "PX–SP–015"
prerequisites:
  - "deep-ocean/pressure-housings-are-not-the-system"
featured: false
---

Inline math uses $E=mc^2$.

$$
\sum_{i=1}^{n} x_i
$$

![Pressure-vessel section](/images/pressure-vessel.png)
```

Standalone Markdown images are automatically converted to semantic `<figure>` elements; the alt text becomes the visible caption. Put image files in `public/images/` and reference them from the root as shown above.

### Linking reports in the learning graph

`prerequisites` accepts an array of report IDs. Each ID is the file path beneath `src/content/blog/` with its extension removed:

```yaml
prerequisites:
  - "deep-crust/electronics-beyond-the-cooling-line"
  - "fusion/divertor-heat-flux"
```

The graph is generated from these local relationships at build time. Missing references and circular prerequisite chains fail the build instead of producing broken navigation. Visited-node progress is stored locally in the reader's browser; no account or database is needed.

## Deployment

The repository includes `.github/workflows/deploy.yml`. Every push to `main` builds and publishes the static site through the official Astro and GitHub Pages actions at:

`https://mingkaibuilds.github.io/Frontiers/`

In the GitHub repository, choose **Settings → Pages → Build and deployment → GitHub Actions** once before the first deployment. A custom domain can be added later.

Vercel and Netlify settings remain included. For a root-domain build on either host, set `BASE_PATH=/` and `SITE_URL` to the final `https://` origin.

No database, server runtime, or public environment secret is required.
