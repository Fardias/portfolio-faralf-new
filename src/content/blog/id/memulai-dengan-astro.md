---
title: "Memulai dengan Astro: Static Site Builder Modern"
description: "Pelajari cara membangun website cepat dan berbasis konten dengan Astro — framework web all-in-one untuk penerbit konten."
date: 2026-01-15
tags: ["astro", "web development", "tutorial"]
image: "/images/blog-astro.svg"
readingTime: 5
published: true
---

Astro adalah static site builder modern yang menghadirkan performa sangat cepat dengan mengirimkan nol JavaScript secara default. Jika Anda membangun situs berbasis konten seperti blog, portofolio, atau halaman marketing, Astro adalah pilihan yang tepat.

## Mengapa Astro?

Astro memperkenalkan beberapa konsep kunci yang membuatnya menonjol:

- **Nol JS secara default** — Astro merender halaman Anda ke HTML statis, menghilangkan JavaScript yang tidak perlu.
- **Arsitektur Island** — Anda dapat menambahkan komponen interaktif hanya di tempat yang dibutuhkan.
- **Agnostik Framework** — Gunakan React, Vue, Svelte, atau HTML biasa dalam satu project yang sama.

## Memulai

Untuk membuat project Astro baru, jalankan:

```bash
npm create astro@latest
```

Kemudian pilih template starter. Untuk blog, template "Blog" sudah termasuk dukungan bawaan untuk content collections markdown.

## Menambahkan Content Collections

Content Collections Astro memungkinkan Anda mendefinisikan konten yang diketik dan divalidasi dalam markdown atau MDX. Berikut contoh cepat:

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

## Membangun Halaman

Anda dapat melakukan query pada content collections di halaman Astro mana pun:

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
```

Kemudian render sesuai keinginan — card, daftar, atau artikel penuh.

## Deployment

Situs Astro dapat di-deploy ke Netlify, Vercel, Cloudflare Pages, atau host statis mana pun. Output build adalah HTML dan CSS murni, siap untuk edge.

## Kesimpulan

Astro adalah alat yang kuat untuk membangun website cepat dan kaya konten. Pendekatan JavaScript minimalnya, dikombinasikan dengan dukungan framework yang fleksibel, membuatnya ideal untuk portofolio, blog, dan situs dokumentasi.