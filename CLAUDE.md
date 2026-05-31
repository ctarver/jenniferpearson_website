# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal/professional website for **Jennifer Pearson, LCSW** (a Licensed Clinical Social Worker), built on the **Hugo Academic Resumé Template (Wowchemy v5)**. It is content-driven: there is no application code. Almost all changes are edits to Markdown/YAML files rather than templates. Deployed via **Netlify**; production URL is `https://jenniferpearsonlmsw.com/`.

Note: the working tree is the repo root `jenniferpearsonlmsw/` inside `JennyWebsite/`.

## Commands

The theme is pulled in as a **Hugo Module** (Go modules), so a Go toolchain is required in addition to Hugo.

```bash
# Local dev server with drafts + future-dated content, live reload
hugo server -D -F

# Production build (mirrors Netlify)
hugo --gc --minify

# Update the Wowchemy theme module to its latest version
hugo mod get -u ./...

# Inspect resolved module versions
hugo mod graph
```

- Pinned build env (see `netlify.toml`): **Hugo 0.97.3**, `HUGO_ENABLEGITINFO=true`. Netlify build command is `hugo --gc --minify -b $URL`, publish dir `public/`.
- There is **no test suite, linter, or package.json**. "Verifying a change" means running `hugo server` and viewing the page, or running the production build and checking it succeeds.
- The GitHub Actions workflow (`updater-wip.yml`) only runs for the upstream `wowchemy` org and is inert here.

## Architecture / how the site is assembled

The homepage is a **single scrolling page composed of widget sections**, not separate routes. Understanding this is the key to making changes:

- `content/home/index.md` declares the page as `type: widget_page` / `headless: true`. Every other file in `content/home/` is one **widget section** (about, experience, contact, skills, accomplishments, projects, posts, publications, talks, featured, tags, demo).
- Each widget file's front matter controls everything: `widget:` (which Wowchemy widget renders it), `active: true/false` (whether it shows), and `weight:` (vertical order on the page). **To show/hide a section, flip `active`; to reorder, change `weight`.** A widget with no `active:` line defaults to active. Currently the active sections are **about**, **experience**, and **contact**; most others are explicitly `active: false`.
- The **About/Biography widget renders from an author profile**, not from its own body. `content/home/about.md` sets `author: admin`, which pulls name, role, photo (`avatar.jpg` in the author folder), `organizations`, education, and the `social:` links from `content/authors/admin/_index.md`. Edit personal info, bio copy, and contact/social icons there, not in `about.md`.
- Navigation (`config/_default/menus.yaml`) links to widgets by anchor: a menu `url` of `#about` jumps to the `content/home/about.md` section. Keep menu anchors in sync with the widget filenames. The "My Resume" menu item points at `uploads/jenniferpearson.pdf` (lives in `static/uploads/`).

Other content sections (`content/post`, `content/event`→talks, `content/publication`, `content/slides`, `content/me`) follow standard Wowchemy layout. They are largely the template's example/demo content and most corresponding homepage widgets are `active: false`.

## Configuration

Split across `config/_default/`:
- `config.yaml` — Hugo core: `title`, `baseURL`, taxonomies, permalink patterns (e.g. events publish under `/talk/:slug/`), the two Wowchemy module imports. Ignores `.ipynb`/`.Rmd` source files.
- `params.yaml` — site behavior & appearance: theme (`minimal` day/night), Google Analytics ID (`marketing.analytics.google_analytics`), navbar options, SEO. This is where site-wide toggles live.
- `menus.yaml` — top nav (see above).
- `languages.yaml` — i18n (single-language `en` site).

## Assets & customization points

- `assets/media/icons/brands/` holds **custom brand logos** added for this site (e.g. `accepted`, `cooks`, `tch`, `monarch`). The experience widget references these by bare name via `company_logo:` (e.g. `company_logo: cooks` → `assets/media/icons/brands/cooks.svg`). When adding an employer, drop its logo here and reference it the same way.
- `images/` and `assets/media/` hold photos used by the profile and sections.
- `static/uploads/` is served verbatim at the site root (resume PDF, etc.).
- There is **no `layouts/` override directory** — the site uses theme templates unchanged. If a template-level change is ever needed, create `layouts/` mirroring the theme's path to override a partial.

## Conventions

- Build artifacts `public/`, `resources/`, `node_modules/`, `go.sum`, `.hugo_build.lock` are gitignored — never commit them.
- Widget front matter is mixed YAML (`---`) and TOML (`+++`); match whatever a given file already uses.
- Windows/WSL editor backups (`*~`, `*:Zone.Identifier`) may appear in the tree; don't commit them.
- This is a real person's live professional site: treat names, contact details, bio copy, and employment history as real production data, not placeholders.
