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


