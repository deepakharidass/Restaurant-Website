# Urban Taste - Restaurant Website

Urban Taste is a modern, fully responsive multi-page restaurant website built as a complete business site project. It showcases a contemporary restaurant with a hero landing page, about section, menu & booking page, and a contact page with client-side form validation.

## Pages

- **index.html**: Landing page with hero, highlights, signature dishes, and call-to-action.
- **about.html**: Story, values, and team section.
- **services.html**: Menu highlights, experiences, and a booking form.
- **contact.html**: Contact details and a contact form with validation.

## Project Structure

```text
.
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── hero-restaurant.jpg
    ├── dish-1.jpg
    ├── dish-2.jpg
    ├── dish-3.jpg
    ├── dessert-1.jpg
    ├── dessert-2.jpg
    ├── dessert-3.jpg
    ├── signature-dessert-1.jpg
    ├── signature-dessert-2.jpg
    ├── signature-dessert-3.jpg
    ├── about-interior.jpg
    ├── dining-1.jpg
    ├── dining-2.jpg
    ├── dining-3.jpg
    ├── team-chef.jpg
    ├── team-manager.jpg
    └── team-sommelier.jpg
```

> **Note:** Add your own optimized images (compressed JPG/WEBP) into the `images` folder using the filenames above, or update the image paths in the HTML files if you prefer different names.

## Features

- **Multi-page layout** with shared navigation and footer
- **Fully responsive, mobile-first design**
- **Modern UI** using flexbox and CSS grid
- **Navigation** between all pages
- **Booking form** on `services.html`
- **Contact form** on `contact.html`
- **Client-side validation** for required fields and email format
- **Lazy-loaded images** for basic image optimization

## Contact & Booking Forms

Both the contact and booking forms use JavaScript for simple client-side validation:

- Checks **required fields** (name, email, etc.)
- Validates **email format**
- Ensures **contact message** is at least 10 characters
- Shows inline error messages and a success message

Currently, the forms do not submit to a backend. To hook them up to a real service, connect them to a backend endpoint or a form service (e.g., Netlify Forms, Formspree) and adjust the `form` `action`/`method` or the JavaScript accordingly.

## Running Locally

1. Open the project folder in your editor.
2. Use a simple local server:
   - VS Code Live Server extension, or
   - Python built-in server:
     ```bash
     cd "Full Stack Development/Restaurant Website"
     python -m http.server 8000
     ```
3. Open `http://localhost:8000` in your browser and navigate between pages.

## Deployment

You can deploy this project easily using **GitHub Pages** or **Netlify**.

### 1. Deploy to GitHub Pages

1. Create a new Git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Urban Taste website"
   ```
2. Create a new repository on GitHub (without adding a README).
3. Add GitHub as a remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. In your GitHub repository:
   - Go to **Settings → Pages**
   - Under **Source**, select `Deploy from a branch`
   - Choose `main` branch and `/ (root)` folder
   - Save
5. After a few minutes, GitHub Pages will provide a live URL for your site.

### 2. Deploy to Netlify

**Option A: Drag & Drop**

1. Run a build step if needed (not required for this static site).
2. Zip the project folder (or just use the folder).
3. Go to [Netlify](https://app.netlify.com/).
4. Create an account or log in.
5. Drag & drop your folder into the **Sites** area.

**Option B: Connect to GitHub**

1. Push your project to a GitHub repository (see steps above).
2. In Netlify, choose **Add new site → Import an existing project**.
3. Connect your GitHub account and select the repository.
4. Since this is a static site with no build step:
   - Build command: leave empty or `npm run build` if you add a build later.
   - Publish directory: `/` (root).
5. Deploy and get your live URL.

## Image Optimization Tips

- Use **compressed JPG or WEBP** images with reasonable dimensions (e.g., 1600px wide for hero, 800px for dishes/team).
- Run images through tools like:
  - [Squoosh](https://squoosh.app/)
  - [TinyJPG](https://tinyjpg.com/)
  - [TinyPNG](https://tinypng.com/)
- Keep filenames consistent with those referenced in the HTML or update the HTML accordingly.

## Customization Ideas

- Update colors and fonts in `css/styles.css`.
- Swap copy for your own restaurant name, address, and story.
- Add real map embed (e.g., Google Maps or OpenStreetMap) to replace the map placeholder on `contact.html`.
- Integrate a backend or third-party booking system for real reservations.

