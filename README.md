# Ghost Inventory Website — Premium 2026 redesign

A static, GitHub Pages-ready website for **ghost-technologies.net** that matches the current Ghost Inventory Android app.

## Included

- Premium responsive homepage
- App-matched dark/light colour system
- Current Free, Premium and Pro / Estate plans
- Privacy Policy
- Terms of Use
- Support and privacy-safe bug reporting
- Public account-deletion page for Google Play
- Contact page using `support@ghost-technologies.net`
- CNAME, sitemap, robots.txt, icons, social card and 404 page
- No framework, build step, analytics or external font dependency

## Publish with GitHub Pages

1. Back up your existing website repository.
2. Open the repository that currently publishes `ghost-technologies.net`.
3. Delete the old website files from the publishing branch, but keep the `.git` history.
4. Copy **all files and folders from this package** into the repository root. Hidden file `.nojekyll` must be included.
5. Commit with a message such as: `Premium Ghost Inventory website redesign`.
6. Push to GitHub.
7. In GitHub: **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Select the publishing branch, normally `main`, and folder `/ (root)`.
10. Confirm the custom domain is `ghost-technologies.net` and **Enforce HTTPS** is enabled.
11. Wait for the Pages deployment to finish, then test:
   - `/`
   - `/privacy/`
   - `/terms/`
   - `/support/`
   - `/delete-account/`

## Before production release

- Have the Privacy Policy and Terms reviewed by qualified Canadian counsel.
- Replace any wording if app behaviour changes.
- Verify plan prices and entitlements in Google Play Console.
- Add the privacy-policy URL and account-deletion URL to Play Console.

## Local preview

Run from the folder:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.
