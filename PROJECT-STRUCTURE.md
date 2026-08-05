# Project Structure

This guide lists every maintained source folder and file. Generated folders such
as `node_modules`, `dist`, and `.wrangler` are intentionally excluded because
they are recreated automatically.

```text
gauri-goswami/
├── .openai/
│   └── hosting.json
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── build/
│   └── sites-vite-plugin.ts
├── public/
│   ├── brand-logo.png
│   ├── favicon.svg
│   ├── gauri-hero.png
│   ├── hero-composite-final.png
│   ├── hero-left-original.png
│   ├── hero-right-original.png
│   └── hero-theme-final.png
├── worker/
│   └── index.ts
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── PROJECT-STRUCTURE.md
├── README.md
├── RUN-WEBSITE.md
├── START-WEBSITE.bat
├── tsconfig.json
└── vite.config.ts
```

## Folder purpose

1. `.openai/` — private hosting configuration required by the deployment platform.
2. `app/` — the website content, metadata, and design styles.
3. `build/` — production packaging support for hosting.
4. `public/` — brand artwork and website imagery served directly to visitors.
5. `worker/` — the production request handler and image optimization entry point.

## Root file purpose

1. `.gitignore` — keeps generated and private files out of source control.
2. `eslint.config.mjs` — code-quality rules.
3. `next.config.ts` — framework configuration.
4. `package.json` and `package-lock.json` — project identity, commands, and exact dependencies.
5. `postcss.config.mjs` — stylesheet processing configuration.
6. `README.md` — primary setup and maintenance guide.
7. `RUN-WEBSITE.md` and `START-WEBSITE.bat` — simple local startup instructions.
8. `tsconfig.json` — TypeScript configuration.
9. `vite.config.ts` — local development and production build configuration.

## Generated folders

These folders are not source files and may be removed safely:

- `node_modules/` — recreated by `npm install`.
- `dist/` — recreated by `npm run build`.
- `.wrangler/` — recreated by local Cloudflare tooling.
