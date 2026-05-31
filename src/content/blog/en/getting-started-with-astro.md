---
title: "Getting Started with Astro: A Modern Static Site Builder"
description: "Learn how to build fast, content-driven websites with Astro — the all-in-one web framework for content publishers."
date: 2026-01-15
tags: ["astro", "web development", "tutorial"]
image: "/images/blog-astro.svg"
readingTime: 5
published: true
---

Astro is a modern static site builder that delivers lightning-fast performance by shipping zero JavaScript by default. If you're building a content-driven site like a blog, portfolio, or marketing page, Astro is an excellent choice.

## Why Astro?

Astro introduces a few key concepts that make it stand out:

- **Zero JS by default** — Astro renders your pages to static HTML, removing unnecessary JavaScript.
- **Island Architecture** — You can add interactive components only where needed.
- **Framework Agnostic** — Use React, Vue, Svelte, or plain HTML all in the same project.

## Getting Started

To create a new Astro project, run:

```bash
npm create astro@latest
```

Then choose a starter template. For a blog, the "Blog" template includes built-in support for markdown content collections.

## Adding Content Collections

Astro's Content Collections let you define typed, validated content in markdown or MDX. Here's a quick example:

```ts
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = { blog: blogCollection };
```

## Building Pages

You can query your content collections in any Astro page:

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
```

Then render them however you like — cards, lists, or full articles.

## Deploying

Astro sites can be deployed to Netlify, Vercel, Cloudflare Pages, or any static host. Build output is pure HTML and CSS, ready for the edge.

## Conclusion

Astro is a powerful tool for building fast, content-rich websites. Its minimal JavaScript approach, combined with flexible framework support, makes it ideal for portfolios, blogs, and documentation sites.