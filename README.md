# masamichi

Personal website scaffold. Files added:

- [index.html](index.html) — homepage
- [css/styles.css](css/styles.css) — styles
- [js/script.js](js/script.js) — minimal scripts

To preview locally:

```bash
# Serve from the repo root and open http://localhost:8000
python3 -m http.server 8000
```

Edit the files above to customize content, replace email/links, and commit when ready.

Resume:

- The resume is available at [resume.html](resume.html). Use the "Print / Save as PDF" action on that page to export a PDF.

Automatic deployment:

- A GitHub Actions workflow has been added at [.github/workflows/pages.yml](.github/workflows/pages.yml) to publish the site from the `main` branch to GitHub Pages on every push.

To activate the site:

1. Commit and push your changes:

```bash
git add .
git commit -m "Add site and Pages workflow"
git push origin main
```

2. After the workflow runs, your site will be available at https://<your-username>.github.io/<repo>/ (GitHub may also show a Pages URL in the repo Settings → Pages).

If you'd like, I can push these changes for you (requires repo access) or add a custom domain configuration.