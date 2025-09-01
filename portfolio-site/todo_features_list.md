# 📌 To-Do / Features List for Portfolio Site

## 🔹 Core Pages (must-have)

- [x] HomePage (Hero, Intro, Services Preview, Projects Preview)
- [ ] ServicesPage (detailed services list + process)
- [ ] ProjectsPage (portfolio with ProjectCard components)
- [ ] AboutPage (bio + skills)
- [ ] ContactPage (form with TextInput, TextArea, SubmitButton)

---

## 🔹 Components

- [x] MainNavbar (brand, nav links, LanguageToggle)
- [x] LanguageToggle (EN/JA switch)
- [x] HeroSection (headline, subheadline, CTA)
- [x] CTA button styling
- [ ] ServicesPreview cards (3 mini cards: builds, hosting, maintenance)
- [ ] ProjectCard grid in ProjectsPage
- [ ] SiteFooter
- [ ] Create a general Button component (refactor SubmitButton or new)

---

## 🔹 Layout & Styling

- [x] DefaultLayout with fixed navbar + page-content padding
- [x] Global base.css with resets
- [ ] Responsive Navbar (hamburger menu on small screens)
- [ ] Responsive typography (scale h1, h2, body text)
- [ ] Consistent spacing system (margins, padding, gaps)
- [ ] Add brand colors and fonts
- [ ] Add dividers (e.g., `<hr>` or styled separators) between sections on HomePage

---

## 🔹 Functionality

- [x] vue-i18n setup with en/ja JSON files
- [x] Locale in URL (`/:locale/...`) with default redirect
- [x] Navigation guard syncing locale with i18n
- [ ] Contact form submission handling (email backend or service)
- [ ] Add form validation (required fields, email format)
- [ ] Smooth scroll to sections (optional polish)
- [ ] Add page meta titles + descriptions dynamically from i18n

---

## 🔹 Future Enhancements (nice-to-have)

- [ ] Testimonials section (if added later)
- [ ] Dark mode toggle
- [ ] Animations (fade-in, slide-in sections)
- [ ] Lazy load images in ProjectsPage
- [ ] SEO improvements (structured data, OG tags)
- [ ] Add animation or image carousel to Hero
- [ ] Enhance Intro section (make more engaging visually/textually)

---

🛠️ Immediate Fixes / Next Steps

Build out full Intro section with better text and visuals.

Style Services preview with card layout.

Loop through projectsList JSON instead of hardcoding cards.

Add basic responsive containers to all HomePage sections.

🎨 Styling Improvements

Add visual dividers (e.g., <hr> or styled separators) between sections.

Add animations or carousel to Hero section.

Improve Intro section visuals (currently plain).

📱 Responsiveness / UX

Fix Navbar responsiveness → collapse into hamburger menu on small screens.

Adjust font sizes & spacing with media queries for mobile.

Verify projects grid collapses properly on tablet & mobile.

🧩 Components Refactor

Consider making a general Button component (reuse across Hero, Services, Projects, Contact).

Polish ProjectCard (hover effects, clickable area).

Ensure all localized strings (EN/JA) are correctly applied.
