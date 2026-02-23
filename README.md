# SWU PHINMA - IT Website

Official website for the College of Information Technology at Southwestern University PHINMA.

## Project Structure

```
swu-it-website/
├── index.html              # Homepage
├── assets/                 # CSS, JS, images, videos
│   ├── css/
│   ├── js/
│   ├── images/
│   │   ├── branding/      # Logos and favicons
│   │   ├── projects/      # Student project images
│   │   ├── organizations/ # Organization photos
│   │   └── gallery/       # Campus images
│   └── videos/
└── pages/                  # Other HTML pages
```

## File Organization

- **Root**: `index.html` (main homepage)
- **Pages**: All other pages are in the `pages/` folder
- **Assets**: CSS, JavaScript, images, and videos in `assets/` folder
- **Images**: Organized by category (branding, projects, organizations, gallery)

## Quick Reference

**To add a new image:**
1. Place it in the appropriate `assets/images/` subfolder
2. Reference it in your HTML/JS files

**To add a new page:**
1. Create the HTML file in the `pages/` folder
2. Use `../assets/` for CSS, JS, and images
3. Use `../index.html` to link back to homepage

## Pages

- `index.html` - Homepage
- `pages/about-swu-it.html` - About page
- `pages/contact.html` - Contact page
- `pages/organizations.html` - Organizations
- `pages/outputs.html` - Student outputs
- `pages/virtual-tour.html` - Virtual tour

---

**Last Updated**: February 23, 2026
