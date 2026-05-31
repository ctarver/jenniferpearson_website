# Jennifer Pearson, LCSW — practice website

A warm, fast, accessible marketing site for Jennifer Pearson's therapy practice.
Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
deployed on [Cloudflare Pages](https://pages.cloudflare.com), with forms handled by
[Web3Forms](https://web3forms.com).

## Local development

```bash
npm install
cp .env.example .env   # then paste the real Web3Forms key into .env
npm run dev            # http://localhost:4321
npm run build          # production build → dist/
npm run preview        # preview the production build locally
```

Node 18.20.8+, 20.3+, or 22+ is required.

## Editing content

Almost everything you'll want to change lives in **`src/data/site.ts`**:
name, tagline, phone, email, office address, hours, the list of services, accepted
insurances, and all crisis-line numbers. Change it there and it updates across every
page. Page-specific prose lives in the matching file under `src/pages/`.

- Headshot / images: `src/assets/`
- Colors & fonts: `src/styles/global.css` (the `@theme` block)
- Navigation order: the `nav` array in `src/data/site.ts`

## Forms (Web3Forms)

The contact and insurance forms POST to Web3Forms, which emails each submission to
Jennifer's inbox. Get a free access key at <https://web3forms.com> (enter the
destination email — use the HIPAA-compliant Google Workspace address).

Set the key as an environment variable named **`PUBLIC_WEB3FORMS_KEY`**:

- Locally: in `.env`
- On Cloudflare Pages: Project → Settings → Environment variables

> **Privacy note:** Web3Forms and the website form pathway are **not** HIPAA-secured,
> so the forms deliberately collect only low-sensitivity info (no member IDs, DOB, SSN,
> or medical details). Jennifer follows up through her secure, HIPAA-compliant email to
> gather anything sensitive. Keep it that way unless a HIPAA-compliant form provider
> (with a signed BAA) is put in place.

## Deploy (Cloudflare Pages)

1. Push this folder to a Git repo and connect it to Cloudflare Pages.
2. Build command: `npm run build` — Output directory: `dist`.
3. Add the `PUBLIC_WEB3FORMS_KEY` environment variable.
4. Point `jenniferpearsonlcsw.com` at the Pages project; redirect the old
   `jenniferpearsonlmsw.com` to it.

`public/_headers` sets basic security + caching headers (Cloudflare Pages reads this
automatically).

## Pages

Home · About · Services · Fees & Insurance · Verify Your Insurance · Contact ·
Crisis Resources · Privacy Policy · Thank-you (form confirmation).
