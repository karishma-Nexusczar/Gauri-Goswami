# Gauri Goswami Portfolio

Official portfolio website for Gauri Goswami, presenting her work across law,
academia, Kathak, research, and cultural storytelling.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Local development

```powershell
npm install
npm run dev
```

Open the local address displayed in the terminal. On Windows, you can also run
`START-WEBSITE.bat`.

## Quality checks

```powershell
npm run lint
npm test
```

`npm test` creates a production build and verifies that the website compiles.

## Production

```powershell
npm run build
npm run start
```

## Main editing locations

- `app/page.tsx` — page content and sections
- `app/globals.css` — layout, colors, typography, and responsive design
- `app/layout.tsx` — site metadata and document layout
- `public/` — website images, logo, and favicon

See [PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md) for a complete guide to the
source folder.
