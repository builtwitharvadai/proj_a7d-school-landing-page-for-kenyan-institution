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
