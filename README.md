# School Landing Page for Kenyan Institution

A simple, single-page website that acts as the school's digital front door. It shows key school information, our values, and contact details to prospective students, parents, and the wider community.

The site is deliberately simple: there is no database, no login, and no special software to install. It is made of a few plain files that open in any web browser.

---

## Who This Website Is For

- **Prospective students and parents** – learning about the school, its values, and how to get in touch.
- **Current parents and the community** – finding contact details and general information quickly.
- **School staff** – the people who keep the content up to date. This guide is written mainly for you, and assumes no technical background.

---

## File Structure

```
/
├── index.html      The page content: all text, headings, and links
├── styles.css      The look of the page: colours, fonts, and spacing
├── app.js          Small interactive features (for example, the mobile menu)
├── images/         All photos and logos used on the page
├── .gitignore      Tells Git which files to leave out (you will rarely need this)
└── README.md       This guide
```

**In short:** to change *what the page says*, edit `index.html`. To change *how it looks*, edit `styles.css`. Put new pictures in the `images/` folder.

---

## How to Edit Content

### What you need

- A plain text editor. Good free options are [Visual Studio Code](https://code.visualstudio.com/) or Notepad (Windows) / TextEdit in plain-text mode (Mac).
- A web browser (Chrome, Firefox, Edge, or Safari) to preview your changes.

**Do not** use Microsoft Word or Google Docs to edit these files – they add hidden formatting that will break the page.

### Previewing your changes

1. Open the project folder on your computer.
2. Double-click `index.html`. It opens in your web browser.
3. After saving a change in your editor, refresh the browser (press `F5`, or `Cmd + R` on a Mac) to see it.

### HTML basics (`index.html`)

HTML wraps text in *tags*. A tag has an opening part like `<p>` and a closing part like `</p>`. **Only change the words between the tags** – leave the tags themselves alone.

| Tag | What it is | Example |
|-----|-----------|---------|
| `<h1>`, `<h2>`, `<h3>` | Headings (h1 is the biggest) | `<h2>Our Values</h2>` |
| `<p>` | A paragraph of text | `<p>We were founded in 1985.</p>` |
| `<a href="...">` | A link | `<a href="tel:+254700000000">Call us</a>` |
| `<img src="..." alt="...">` | A picture | `<img src="images/library.jpg" alt="Students reading in the library">` |
| `<li>` | An item in a list | `<li>Integrity</li>` |

**Example – changing the phone number:**

Before:
```html
<a href="tel:+254700000000">+254 700 000 000</a>
```
After:
```html
<a href="tel:+254711222333">+254 711 222 333</a>
```
Notice the number appears twice: once inside `href="..."` (what the phone dials) and once as the visible text. Update both.

**Example – changing a picture:**

1. Copy the new photo into the `images/` folder (see the image guidelines below).
2. In `index.html`, find the `<img>` tag and change the file name after `src=`.
3. Update the `alt="..."` text to describe the new photo. This text is read aloud to visually impaired visitors and shown if the image fails to load.

### CSS basics (`styles.css`)

CSS controls the appearance. Each rule names what it styles, followed by settings inside curly braces `{ }`:

```css
h1 {
  color: #1a5c38;
  font-size: 2.5rem;
}
```

- `color` – text colour. Colours are written as codes like `#1a5c38`. You can find codes with an online "colour picker".
- `font-size` – text size.
- `background-color` – the colour behind an element.

Only change the value after the colon (`:`), and always keep the semicolon (`;`) at the end of the line. If you are unsure, ask for help rather than guessing – small mistakes in CSS can affect the whole page.

### Golden rules for safe editing

1. **Make a backup copy** of a file before you change it.
2. **Change one thing at a time**, save, and check it in the browser.
3. **Do not delete** angle brackets `< >`, quote marks `" "`, curly braces `{ }`, or semicolons `;`.
4. If something breaks, restore your backup copy and try again.

---

## Image Optimisation Guidelines

Many visitors will view the site on mobile phones using mobile data, so keeping images small makes the page load faster and costs visitors less.

- **Format:** use `.jpg` for photos and `.png` for logos or images with transparent backgrounds. `.webp` is even smaller if you have a tool that can produce it.
- **Size:** resize photos so they are no wider than **1600 pixels** for large banner images and **800 pixels** for smaller pictures.
- **File weight:** aim for under **200 KB** per photo, and never more than **500 KB**.
- **Free tools:** [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) – drag your image in, then download the smaller version.
- **File names:** use lowercase letters and hyphens, with no spaces, e.g. `science-lab.jpg` (not `Science Lab FINAL.JPG`). File names are case-sensitive once the site is online.
- **Alt text:** always give every image a short, meaningful description in its `alt="..."` text.
- **Permission:** only use photos the school owns or has permission to use, and obtain consent before publishing photos of students.

---

## Image Management

The page currently shows sample photos linked directly from [Unsplash](https://unsplash.com/). The school logo (`images/logo.png`) and browser tab icon (`images/favicon.ico`) are read from the `images/` folder, so add those two files there. Over time, replace the sample photos with real photos of the school.

### Sourcing images

- **School photos first:** real photos of your classrooms, grounds, learners and events build the most trust with parents.
- **Free stock photos:** [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/) offer photos that are free to use, including commercially, without asking permission. Crediting the photographer is appreciated but not required.
- **Avoid** images copied from Google search results or other websites – they are usually protected by copyright.
- **Consent:** get written consent from parents or guardians before publishing photos in which learners can be identified.

### Recommended dimensions

| Where it appears | Size (width × height) | Notes |
|------------------|-----------------------|-------|
| Hero banner (top of the page) | **1920 × 1080** pixels | Also save smaller copies at 1200 and 800 pixels wide |
| Programme and achievement cards | **800 × 600** pixels | Also save a 400-pixel-wide copy for phones |
| Logo (`logo.png`) | 80 × 80 pixels | Square, transparent background |
| Favicon (`favicon.ico`) | 32 × 32 pixels | Create one free at [favicon.io](https://favicon.io/) |

### Optimisation tools

- **[Squoosh](https://squoosh.app/)** – free, works in the browser. Resize the image, choose the output format, and adjust quality (around 70–75 keeps photos sharp but small).
- **[TinyPNG](https://tinypng.com/)** – free, drag and drop. Shrinks `.jpg`, `.png` and `.webp` files without visible loss of quality.

**Maximum file size:** keep every image under **200 KB**. Card images at 800 pixels wide should usually be well below 100 KB.

### Creating WebP versions

WebP files are typically 25–35% smaller than JPEG. The page offers WebP to browsers that support it and falls back to JPEG for older ones, so each photo needs both versions.

1. Open the photo in [Squoosh](https://squoosh.app/).
2. Under **Resize**, set the width (for example `800`).
3. Under **Compress**, choose **WebP**, set quality to about 75, and download. Name it e.g. `library-800w.webp`.
4. Repeat with **MozJPEG** selected to download `library-800w.jpg`.
5. Repeat steps 2–4 for the smaller width (for example `400`), giving `library-400w.webp` and `library-400w.jpg`.
6. Upload all files to the `images/` folder.

### Replacing a photo on the page

Each photo in `index.html` sits inside a `<picture>` block like this:

```html
<picture class="card-media">
  <source type="image/webp" srcset="images/library-400w.webp 400w, images/library-800w.webp 800w" sizes="(max-width: 768px) 100vw, 50vw">
  <img srcset="images/library-400w.jpg 400w, images/library-800w.jpg 800w" sizes="(max-width: 768px) 100vw, 50vw" src="images/library-800w.jpg" alt="Students reading together in the school library" width="800" height="533" loading="lazy" decoding="async">
</picture>
```

1. Replace the addresses in `srcset="..."` (both lines) and `src="..."` with your new file names.
2. If the new photo has a different shape, update `width` and `height` to match its real pixel size.
3. Leave `sizes`, `loading` and `decoding` as they are. The hero banner uses `loading="eager"` because it is the first thing visitors see – do not change it to `lazy`.

### Writing alt text

The `alt="..."` text is read aloud by screen readers and shown when an image cannot load.

- Describe what the photo shows and why it matters, e.g. `alt="Grade 4 learners carrying out a science experiment"`.
- Do **not** write `image`, `photo` or `picture of` – screen readers already announce that it is an image.
- Keep it to one short sentence (under about 125 characters).
- Always update the alt text whenever you replace a photo.

### Testing on slow connections

Many families browse on mobile data, so check the page on a slow connection after adding images:

1. Open the page in Chrome and press `F12` to open Developer Tools.
2. Open the **Network** tab and change **No throttling** to **Slow 4G** (or **3G**).
3. Refresh the page. The top of the page should appear within a few seconds, and photos further down should load only as you scroll to them.
4. If the page feels slow, look in the **Size** column for any image over 200 KB and optimise it again.

---

## Deployment (Publishing on GitHub Pages)

The site is hosted for free on GitHub Pages. Once set up, any change saved to the `main` branch goes live automatically within a few minutes.

### First-time setup (done once, usually by the technical contact)

1. Sign in to [GitHub](https://github.com/) and open the project repository.
2. Click **Settings**, then **Pages** in the left-hand menu.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **`main`** branch and the **`/ (root)`** folder, then click **Save**.
5. After a few minutes, the page shows the website address, usually `https://<username>.github.io/<repository-name>/`.

### Updating the live site (editing directly on GitHub)

This is the easiest method for non-technical staff:

1. Open the repository on GitHub and click the file you want to change (for example, `index.html`).
2. Click the **pencil icon** (Edit this file).
3. Make your change.
4. Scroll down, write a short note describing what you changed (e.g. "Updated term dates"), and click **Commit changes**.
5. Wait 1–5 minutes, then refresh the live website.

### Uploading new images on GitHub

1. Open the `images/` folder in the repository.
2. Click **Add file** → **Upload files**.
3. Drag in your optimised images, add a short note, and click **Commit changes**.

### Using a custom domain (optional)

If the school owns a domain (e.g. `www.ourschool.ac.ke`), enter it under **Settings → Pages → Custom domain**, and ask your domain provider to point the domain to GitHub Pages as described in [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Tick **Enforce HTTPS** once it becomes available.

---

## Testing and Performance

This section records the quality targets for the site, what has been built in to meet them, and how to check them yourself. Re-run these checks after any large change (new section, new photos, or edits to `styles.css` or `app.js`).

> **Note:** The figures below are the **targets** the page is built to meet. Lighthouse and device results depend on the browser, device and network used, so record your own measured results in the [Test results log](#test-results-log) each time you test.

### Lighthouse scores

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) is a free checker built into Chrome. Test in **Mobile** mode.

| Category | Target score | What supports it |
|----------|:------------:|------------------|
| Performance | 90 or higher | No web fonts or frameworks, a single small CSS and JS file, `defer` on the script, responsive WebP photos, lazy loading below the fold, a high-priority hero image |
| Accessibility | 95 or higher | Skip link, landmarks, sequential headings, descriptive alt text, labelled menu button, visible focus rings, WCAG AA colours |
| Best Practices | 95 or higher | HTTPS images and map, explicit image sizes (no layout shift), no console errors |
| SEO | 95 or higher | Page title, meta description, `lang` attribute, Open Graph tags, structured data (Schema.org) |

### Performance metrics (Slow 3G / Slow 4G)

| Metric | Target on 3G | Target on 4G | Notes |
|--------|:------------:|:------------:|-------|
| First Contentful Paint (FCP) | under 3.0 s | under 1.8 s | Text and colours appear before photos load |
| Largest Contentful Paint (LCP) | under 4.0 s | under 2.5 s | The hero photo is usually the largest element |
| Time to Interactive (TTI) | under 5.0 s | under 3.8 s | `app.js` is small and loads with `defer` |
| Cumulative Layout Shift (CLS) | under 0.1 | under 0.1 | Every image has `width` and `height` set |

Page weight of our own files (before server compression): `index.html` about 21 KB, `styles.css` about 23 KB and `app.js` about 10 KB. Photos are loaded from Unsplash in sizes that match the screen.

### Browser compatibility

| Browser | Versions to test | Expected support |
|---------|------------------|------------------|
| Google Chrome (desktop and Android) | Latest 2 versions | Full |
| Mozilla Firefox | Latest 2 versions | Full |
| Apple Safari (macOS and iOS) | 15 and newer | Full |
| Microsoft Edge | Latest 2 versions | Full |
| Older browsers (e.g. Safari 12, Opera Mini) | Not tested | Content, links and contact details work; smooth scrolling and fade-in effects are skipped |

Every interactive feature checks that the browser supports it first, so the page never breaks on older phones. It just looks a little plainer.

### Device testing

| Device type | What to check |
|-------------|---------------|
| iPhone (Safari, iOS 15+) | Menu opens and closes, phone number opens the dialler, map loads, no sideways scrolling |
| Android phone (Chrome, Android 10+) | Same as above, plus the page loads quickly on mobile data |
| Low-cost Android phone (small screen, 360 px wide) | Text is readable without zooming and buttons are easy to tap |
| Tablet | Layout switches to two columns, navigation shows as a row |
| Desktop / laptop | Three-column cards, full-height hero, keyboard navigation works |

### Accessibility compliance (WCAG 2.1 AA)

The page is designed to meet **WCAG 2.1 Level AA**:

- **Keyboard:** press `Tab` from the top of the page. The first stop is "Skip to main content", and every link and button shows a clear focus ring.
- **Screen readers:** headings run in order (one main heading, then section and card headings), all photos have descriptive alt text, the menu button announces whether it is open or closed, and Kiswahili words are marked with `lang="sw"` so they are pronounced correctly.
- **Colour contrast:** body text and links meet 4.5:1 and large text and focus rings meet 3:1.
- **Reduced motion:** visitors who turn on "reduce motion" on their phone or computer do not see the fade-in or smooth scrolling effects.
- **Print:** the page prints cleanly in black and white without the menu, map or buttons.

### Known issues and limitations

- The social media links in the footer are placeholders until the school's official accounts are added. Replace each `href="#"` with the real page address.
- `images/logo.png`, `images/favicon.ico` and `images/apple-touch-icon.png` (180 × 180 px) must be added to the `images/` folder. Until then the logo shows its alt text and browsers show a default tab icon.
- Photos and the map are loaded from Unsplash and Google. If either service is blocked or offline, the page still works but those images will not appear.
- The Google Map is a large embed. On very slow connections it may take a few seconds to show after you scroll to it.

### Running the tests locally

**1. Lighthouse (Chrome)**

1. Open the page in Chrome. For the most accurate results, use the live GitHub Pages address, or run a local server (see step 4).
2. Press `F12`, open the **Lighthouse** tab, choose **Mobile** and tick all categories.
3. Click **Analyze page load** and compare the scores with the targets above.

**2. Slow connection check**

Follow the steps in [Testing on slow connections](#testing-on-slow-connections), choosing **3G** to check the FCP and LCP targets in the Lighthouse or **Performance** tab.

**3. Keyboard and screen reader check**

1. Put the mouse aside and use only `Tab`, `Shift + Tab` and `Enter` to move through the page and open the menu.
2. Optionally, turn on a screen reader: **NVDA** (free, Windows), **VoiceOver** (`Cmd + F5` on Mac, or Settings → Accessibility on iPhone) or **TalkBack** (Android).

**4. Local server (for the technical contact)**

Some browser features work best over `http://` instead of opening the file directly. From the project folder, run one of:

```
python3 -m http.server 8000
npx serve .
```

Then open `http://localhost:8000` (or the address shown) in your browser. To run Lighthouse from the command line instead: `npx lighthouse http://localhost:8000 --view`.

**5. Validation**

- HTML: upload `index.html` to the [W3C Markup Validator](https://validator.w3.org/#validate_by_upload).
- CSS: upload `styles.css` to the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload).
- Accessibility: run [WAVE](https://wave.webaim.org/) on the live address.

### Test results log

Record each round of testing here so changes over time are easy to spot.

| Date | Tested by | Device / browser | Performance | Accessibility | Best Practices | SEO | Notes |
|------|-----------|------------------|:-----------:|:-------------:|:--------------:|:---:|-------|
| | | | | | | | |

---

## Technical Support

For problems you cannot solve using this guide, contact the school's designated technical contact:

| | |
|---|---|
| **Role** | School ICT Coordinator / Website Administrator |
| **Contact** | Through the school administration office |
| **When to contact** | The site is down, the layout is broken, or you need a new section added |

When asking for help, please include: what you were trying to change, which file you edited, and a screenshot of the problem if possible.

---

## Troubleshooting Common Issues

| Problem | Likely cause | What to do |
|---------|-------------|------------|
| My change does not show on the live site | GitHub Pages is still updating, or the browser is showing an old copy | Wait 5 minutes, then do a hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac) |
| An image shows as a broken icon | The file name or folder in `src="..."` does not match the actual file | Check spelling, capital letters, and file extension exactly (e.g. `.jpg` vs `.JPG`) and that the file is in `images/` |
| The whole page lost its colours and layout | `styles.css` was renamed, moved, or has a typing error | Make sure `styles.css` is in the main folder; restore your backup if you recently edited it |
| Part of the page disappeared or text looks jumbled | A tag was deleted or left unclosed in `index.html` | Restore your backup, or check that every opening tag (e.g. `<p>`) has its closing tag (`</p>`) |
| Strange symbols appear instead of letters | The file was saved in the wrong text format | Re-save the file using **UTF-8** encoding in your text editor |
| The page loads slowly on phones | Images are too large | Follow the Image Optimisation Guidelines above |
| The mobile menu does not open | `app.js` is missing or has an error | Make sure `app.js` is in the main folder and has not been edited by mistake; contact technical support |
| The live site shows a "404" page | GitHub Pages is not set up, or `index.html` was renamed | Check **Settings → Pages** and confirm the main file is still named exactly `index.html` |
| Lighthouse scores are much lower than expected | Browser extensions, or testing the file directly instead of over `http://` | Test in an Incognito/Private window and use the live site or a local server (see Running the tests locally) |
| Sections stay invisible or faded | An error in `app.js` stopped the page scripts | Press `F12` and open the **Console** tab; errors from the site start with `[school-landing]`. Restore your backup of `app.js` |
| The keyboard focus ring is not visible | A colour in `styles.css` was changed to one that blends into the background | Restore the original `--color-primary` / `--color-secondary-light` values, or pick a colour that passes a contrast checker such as [WebAIM](https://webaim.org/resources/contrastchecker/) |
| The map is blank | Google Maps is blocked on the network, or the connection is very slow | Check that `https://www.google.com/maps` opens in the same browser; the address and phone number above the map still work |
