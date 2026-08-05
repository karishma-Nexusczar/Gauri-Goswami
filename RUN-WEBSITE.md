# Run the Gauri Goswami landing page

## Requirements

- Install Node.js 22 or newer from https://nodejs.org/
- Extract the ZIP file before running the website.

## Windows

1. Open the extracted `gauri-goswami` folder.
2. Double-click `START-WEBSITE.bat`.
3. Wait until the terminal shows a Local URL, usually `http://localhost:3000`.
4. Open that URL in Chrome or Edge.

You can also use a terminal:

```powershell
npm install
npm run dev
```

## macOS or Linux

Open Terminal inside the project folder and run:

```bash
npm install
npm run dev
```

Then open the Local URL shown in the terminal.

## Production build

```bash
npm run build
npm run start
```

## Main files to edit

- `app/page.tsx` — page content and sections
- `app/globals.css` — colors, layout, fonts, and responsive styling
- `public/gauri-hero.png` — hero and gallery artwork
- `app/layout.tsx` — website title and description

Press `Ctrl+C` in the terminal to stop the local website.

For a complete file-by-file guide, see `PROJECT-STRUCTURE.md`.
