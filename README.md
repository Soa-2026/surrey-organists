# Surrey Organists' Association — website

Static site for [surreyorganistsassociation.org](https://www.surreyorganistsassociation.org), built with [Eleventy](https://www.11ty.dev) and hosted on Cloudflare Pages. Content is edited through [Pages CMS](https://pagescms.org) — no code knowledge needed.

---

## For the editor (Ian / committee)

You don't need to install anything to edit the site. You edit content from a browser, and the site updates automatically.

### One-time setup

1. **Create a free GitHub account** at [github.com/signup](https://github.com/signup) (email + password — that's it).
2. **Ask the maintainer** to add you as a collaborator on the `surrey-organists` repository.
3. **Bookmark** the editor: `https://app.pagescms.org/<org>/surrey-organists` (the maintainer will give you the exact URL after the repo is set up).

### To edit the site

1. Go to your bookmark and click **Sign in with GitHub**.
2. You'll see a list of editable sections in the sidebar:
   - **Site settings** — site name, tagline, chair/secretary contact details, membership rates
   - **Home page** — the opening paragraph and each section on the home page
   - **Events** — add, edit, reorder or remove events
   - **Find an organist** — text for that page
   - **Organ Student Scheme** — text for that page
   - **Organ Recitals** — opening text and the local venues list
3. Click a section, change the fields you want, then click **Save** (top-right).
4. The site rebuilds and goes live in about 30 seconds.

Everything you save is version-tracked, so nothing is ever lost. If you make a mistake, ask the maintainer — they can roll back any change.

### Tips

- **Adding an event** — click "Events", then "+ Add" next to the events list. Fill in the title, date label (free text — e.g. *"Saturday 28 February, 2pm"*), location, and description.
- **Reordering events** — drag them up or down in the list.
- **Bold / italic / links** — use the toolbar above any text box. You don't need to know any HTML.
- **Images** — most of the site uses one shared photo. To swap it, upload a new file in the media library (replace `hero-organ.jpg`).

---

## For the maintainer (technical)

### Stack

- **Eleventy 3** — static site generator
- **Nunjucks** — templates (`src/_includes/`, `src/*.njk`)
- **JSON data files** — content (`src/_data/`)
- **Pages CMS** — web UI for editing the JSON files (config in `.pages.yml`)
- **GitHub** — source of truth, triggers builds
- **Cloudflare Pages** — hosting, auto-deploys on push

### Local development

```bash
npm install
npm run dev          # builds + serves on http://localhost:8765, watches for changes
npm run build        # one-off build to _site/
```

### Adding a new editable field

1. Add the field to the relevant file in `src/_data/`.
2. Render it in the matching template (`src/*.njk`).
3. Add a `fields:` entry to the relevant content type in `.pages.yml`.

### Adding a new page

1. Create `src/<slug>.njk` with frontmatter `permalink: /<slug>/`.
2. Create `src/_data/<slug>.json` for its content.
3. Add a link to the nav in `src/_includes/base.njk`.
4. Add the page to `.pages.yml` as a new `content` entry.

### Deployment

Pushing to `main` triggers a Cloudflare Pages build automatically. No manual steps. To preview a change before merging, push to a branch — Cloudflare creates a preview URL per branch.
