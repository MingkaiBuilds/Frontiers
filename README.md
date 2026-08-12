# Physical Extremes

A premium, static Astro research portfolio for long-form engineering reports across five physical frontiers. The project uses typed local Markdown/MDX, KaTeX, Tailwind CSS 4, and zero client-side JavaScript in the default page shell.

Founded and created by **Mingkai** in 2026. Physical Extremes™ and the original code, design, reports, diagrams, and media in this repository are protected by copyright. All rights are reserved except where a third-party license or written permission expressly states otherwise. See [`LICENSE.md`](LICENSE.md), [`PROVENANCE.md`](PROVENANCE.md), and [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Project structure

```text
physical-extremes/
├── public/
│   ├── favicon.png
│   └── og.png
├── LICENSE.md
├── PROVENANCE.md
├── CITATION.cff
├── CONTRIBUTING.md
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
│   │   ├── about/
│   │   │   └── index.astro
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

Run `npm run dev`, then open `/Frontiers/studio/` on the local site to use the owner-only report studio. It provides live Markdown and KaTeX rendering, local draft persistence, technical-figure import, and a repository-ready ZIP export. Production builds replace the studio with a restricted console notice, and public navigation never links to the authoring route.

The ZIP contains the report and all imported images under their final repository paths. Copy its `src/` and `public/` folders into the repository, then commit and push to publish.

You can also author directly in the repository:

Add a `.md` or `.mdx` file anywhere beneath `src/content/blog/`. Frontmatter is validated by `src/content.config.ts`.

```md
---
title: "A concise report title"
description: "One-sentence abstract."
frontier: "Deep Space"
published: 2026-08-11
lastReviewed: 2026-08-11
readingTime: "9 min"
reportNo: "PX–SP–015"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Primary source title"
    url: "https://example.org/paper"
    publisher: "Research institution"
openProblems:
  - id: "close-the-thermal-balance"
    title: "Close the thermal balance"
    question: "Can the proposed rejection architecture remain mass-positive across the full duty cycle?"
    status: "Open"
    disciplines: ["Thermal systems", "Materials"]
    nextStep: "Build a parameter sweep against radiator mass and degradation rate."
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

### Trust metadata and open problems

Report headers expose author, revision, last review date, difficulty, evidence status, technology-readiness level, review status, and source count. `references` produces a structured evidence register at the end of the report.

Every object in `openProblems` appears both beneath its source report and in `/Frontiers/problems/`. Keep each question bounded and pair it with a specific next analysis, simulation, prototype, or experiment. The browser studio can generate both structures from its Evidence register and Open problems fields.

## Community discussions

The repository includes structured forms for **Report Q&A**, **Technical Critique**, **Investigation Proposals**, and **Build Logs**, plus the participation standard in `COMMUNITY.md`.

In GitHub, enable **Settings → General → Features → Discussions**, then create categories using those exact names. GitHub derives these category slugs, which match the form filenames in `.github/DISCUSSION_TEMPLATE/`.

## Deployment

The repository includes `.github/workflows/deploy.yml`. Every push to `main` builds and publishes the static site through the official Astro and GitHub Pages actions at:

`https://mingkaibuilds.github.io/Frontiers/`

In the GitHub repository, choose **Settings → Pages → Build and deployment → GitHub Actions** once before the first deployment. A custom domain can be added later.

Builds also generate `/rss.xml`, a sitemap index, `robots.txt`, Article/TechArticle structured data, and a custom 404 page. The authoring studio is excluded from indexing and from the sitemap.

Vercel and Netlify settings remain included. For a root-domain build on either host, set `BASE_PATH=/` and `SITE_URL` to the final `https://` origin.

No database, server runtime, or public environment secret is required.
