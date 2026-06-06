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

## Sidenotes inside posts

Posts support Tufte-style sidenotes via a pure-CSS pattern. On wide
viewports the note appears in the right margin alongside the paragraph;
on narrow viewports the note collapses behind a numbered superscript
toggle that expands inline when tapped. No JavaScript.

Inside the markdown body of a post, write the sidenote like this:

```
After this sentence<label for="sn-1" class="margin-toggle sidenote-number"></label><input type="checkbox" id="sn-1" class="margin-toggle"/><span class="sidenote">The sidenote text.</span>, the text continues.
```

Notes:

- Keep the three elements (`label`, `input`, `span`) on a single line in
  the markdown source so the parser does not insert stray whitespace
  around the inline marker.
- Use `sn-1`, `sn-2`, etc. as the `for`/`id` pair on each sidenote in a
  post. The numbering is rendered automatically via a CSS counter, so
  the `1` in the id only needs to be unique within the post.
- For an unnumbered margin note, replace `sidenote` with `marginnote`
  and use the `mn-` prefix on the id; the same `margin-toggle` class
  applies.
- Place the marker before the punctuation that follows the annotated
  word (after `amet` and before the comma, in the example above).
