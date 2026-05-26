# pajwilson.com

Personal site and blog for Paul Wilson. Built with Astro. The output is
static HTML with no client-side JavaScript framework.

## Running locally

Install dependencies, then start the dev server:

```
npm install
npm run dev
```

The site runs at http://localhost:4321.

## Building

Produce the static site in `dist/`:

```
npm run build
```

You can preview the built output with `npm run preview`.

## Adding a post

Create a markdown file in `src/content/blog/`. The file name becomes the URL
slug, so `my-post.md` is served at `/blog/my-post/`.

Each post needs frontmatter:

```
---
title: "Post title"
description: "One-line summary shown on the home page and in the RSS feed."
pubDate: 2026-01-01
# updatedDate: 2026-02-01   # optional
# draft: true               # optional, defaults to false
---

Body goes here.
```

Set `draft: true` to keep a post out of the home page list and the RSS feed
while you are still working on it.
