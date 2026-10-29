# Valentin Benedetti — academic website

Plain HTML/CSS, no build step. Edit the `.html` files directly.

## Publish on GitHub Pages

1. Create a GitHub repository named `<your-username>.github.io` (public).
2. From this folder:

       git init
       git add .
       git commit -m "Initial website"
       git branch -M main
       git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
       git push -u origin main

3. On GitHub: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After a minute the site is live at `https://<your-username>.github.io`.

To use a custom domain (like pietropelliconi.net), buy the domain, add it under Settings → Pages → Custom domain, and point its DNS to GitHub as GitHub explains there.

## Preview locally

    python3 -m http.server 8000

then open http://localhost:8000
