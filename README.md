# Portfolio Site

A clean, one-page video editing portfolio. Static HTML/CSS/JS — no build step,
no dependencies. Push it to GitHub, turn on GitHub Pages, done.

## File structure

```
index.html          → all the page content and text
css/style.css        → colors, fonts, spacing (all in one place at the top)
js/script.js         → small helper script, you shouldn't need to edit this
assets/videos/       → put your .mp4 files here
assets/images/       → put your poster/portrait images here
```

## Adding a video

1. Drop the video file into `assets/videos/`, e.g. `project-01.mp4`.
2. Open `index.html`, find the matching project block (search for `PROJECT SLOT`
   or `project-01`), and uncomment the `<source>` line so it points at your file:

   ```html
   <source src="assets/videos/project-01.mp4" type="video/mp4">
   ```

3. Save — the placeholder box disappears automatically once the video loads.

The featured video at the very top of the page works the same way; look for
`FEATURED REEL` in `index.html` and point it at `assets/videos/reel.mp4`.

## Adding a new project (not just filling a slot)

Copy an entire `<li class="work-item">...</li>` block in `index.html`,
paste it after the last one, and update the index number, title, category,
and description.

## Editing text

Every editable spot is marked with an `<!-- EDIT ME -->` comment:
- Site title (browser tab) and name in the nav
- Hero headline and one-line positioning statement
- Project titles, categories, and descriptions
- About paragraph and the facts list (software, location, turnaround)
- Contact email and social links
- Footer name

All of it is currently filled with placeholder example content so you can see
the layout — replace it whenever you're ready.

## Changing colors or fonts

Open `css/style.css` and look at the `:root { ... }` block at the very top —
every color and font in the site is a variable there. Change a value once
and it updates everywhere.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → set "Source" to your main branch, root folder.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Videos aren't committed here — `assets/videos/` and `assets/images/` are
  empty placeholders. Keep large video files reasonably compressed (H.264
  .mp4, under ~50MB each) so the page loads quickly and GitHub doesn't choke
  on file size. For longer reels, consider hosting on Vimeo/YouTube and
  swapping the `<video>` tag for an embed instead.
