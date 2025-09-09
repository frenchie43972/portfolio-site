📓 Project Journal – Portfolio Site (Vue 3)

Step 1: Project Initialization

We began by scaffolding a new Vue 3 project using Vite. The repository was created and initialized in GitHub under the name `portfolio-site`. One of the early decisions we made was to use vanilla CSS instead of a utility framework like Tailwind or Bootstrap. The reasoning behind this was that learning to structure and style components manually would provide a stronger foundation for front‑end development and make the project more instructive. We also decided to defer TypeScript until later, choosing to first focus on becoming proficient with Vue and JavaScript before layering in type safety.

At this stage, we also established that the site would support bilingual content — English and Japanese — since the target audience includes local businesses in Zushi, Hayama, and Kamakura. We agreed that translations would be handled manually rather than relying on automated tools, to ensure natural, business‑appropriate Japanese. This set the stage for introducing `vue-i18n` to manage internationalization.

---

Step 2: Setting up i18n

We installed `vue-i18n@11`, deliberately avoiding legacy API usage since legacy mode will be deprecated in v12. We structured translations into JSON files, separated by locale (`/en` and `/ja` folders). Each page — Home, About, Services, Projects, and Contact — received its own JSON file, and shared keys like navigation labels and button text were placed in a `common.json` file.

In `i18n/index.js`, we imported all JSON files and combined them into a `messages` object. This allowed us to organize translations in a modular way. Registering i18n in `main.js` then gave us access to `$t()` and `$tm()` across the app. We validated that translations worked by experimenting directly in `App.vue` with `$t('common.nav.about')` and `$tm()` for arrays.

One important lesson here was realizing that JSON structure impacts how `$t()` keys must be called. Since `common.json` was nested under `common`, the correct usage became `$t('common.nav.services')` rather than `$t('nav.services')`. This avoided confusion later when rendering navigation links.

---

Step 3: Routing and Locales

Routing was set up with Vue Router. We made the deliberate decision to include locale codes in the URL structure (`/:locale/...`) so that links could be easily shared and bookmarked in either English or Japanese. The router configuration included child routes under `/:locale`, with Home, About, Services, Projects, and Contact defined as children. A default redirect was set up from `/` to `/en`.

We also implemented a navigation guard to validate the locale. If the locale parameter was not one of the allowed values (`en` or `ja`), the guard redirected to English by default. The guard also ensured that i18n’s active locale stayed in sync with the current URL, so switching pages or languages always updated both Vue Router and i18n consistently.

---

Step 4: Layouts and Global Structure

We created `DefaultLayout.vue` to act as the frame around all pages. This was a key architectural decision: App.vue became nothing more than `<RouterView />`, while `DefaultLayout` took responsibility for housing the Navbar, Footer, and page content. This separation of concerns keeps the entry point clean and mirrors professional patterns in larger Vue projects.

Within `DefaultLayout`, we introduced `<main class="page-content">` to wrap `<RouterView />`. Since the navbar was fixed at the top of the screen, the page content needed padding to avoid being hidden underneath. Initially, padding was attempted via a scoped body style, which failed because scoped styles don’t affect global elements. The correction was to give `.page-content` a top padding equal to the navbar height. Later, we reinforced this with a global CSS variable (`--nav-height`) in a base stylesheet, ensuring consistency.

---

Step 5: Global Styling

We moved global resets into `src/styles/base.css` and imported them in `main.js`. The reset included setting `box-sizing: border-box` universally, removing default margins, and normalizing elements like images, lists, buttons, and anchors. This solved inconsistencies across browsers and gave us predictable defaults. One lesson learned here was that resets can unintentionally break component layouts (like the LanguageToggle pill), so components must explicitly define their own padding and spacing rather than relying on defaults.

---

Step 6: Building the Language Toggle

One of the most interesting steps was building a bilingual language toggle. Initially, for testing, we placed toggle logic inside `DefaultLayout.vue`. While this confirmed the functionality worked, we quickly realized it violated separation of concerns. The logic was moved into its own dedicated component, `LanguageToggle.vue`, which lives inside the Navbar.

We explored different designs for the toggle and decided on a pill-shaped slider with “EN” and “JA” text inside. The current locale determines which side of the pill is active, and the knob slides left or right with a smooth transition. The text for the label above the toggle was pulled from `common.languageToggle.label` in the JSON files, ensuring it was also translated.

This implementation taught us two things: 1) scoped resets can shrink components unexpectedly if spacing isn’t declared explicitly, and 2) UI should be handled entirely inside the component responsible for it, not patched together in a parent.

---

Step 7: Building the Navbar

We created `MainNavbar.vue` with three primary sections: a brand link (logo/name) on the left, the `LanguageToggle` next to it, and navigation links on the right. The navigation links were wired with `RouterLink`, each carrying the current locale parameter so that switching between pages respected the chosen language.

Styling was done with flexbox, aligning items horizontally and spacing them out. We set the navbar as `position: fixed` with a z-index, ensuring it stayed visible while scrolling. The initial mistake of using `height: auto` made the navbar feel too thin; we corrected this by setting an explicit height and aligning items vertically. The `.page-content` padding was then matched to this height, preventing overlap. This demonstrated why tying dimensions to variables (like `--nav-height`) is so valuable.

We also discussed responsiveness. While the desktop Navbar is now functional, we postponed implementing a hamburger menu for mobile devices. This was a conscious choice: in real development, teams often prioritize content and core features first, then add responsiveness and polish later.

---

Step 8: Planning the HomePage

With the Navbar and LanguageToggle complete, we turned our attention to the HomePage. Using the existing JSON translations as a guide, we identified the sections needed: Hero, Intro, Services Preview, and Projects Preview. Testimonials were originally part of the plan but intentionally left out for now.

We decided to stub out the entire page structure before styling or adding detailed functionality. This gives a clear view of the overall flow, similar to how wireframing works in design, before committing to detailed implementation. Once the skeleton is in place, each section (Hero, Intro, Services, Projects) will be built out in turn, using components like Hero.vue, CTA.vue, and ProjectCard.vue.

---

Step 9: ProjectCard + Projects Preview Setup

We introduced the ProjectCard component to display project information on the HomePage. This was the first time we moved beyond simple strings and had to render structured data (title, description, image, link).

We discussed different strategies for handling project images:

Public folder approach (simple paths, no optimization).

Helper function with src/assets/ (our choice) → storing only filenames in JSON, then resolving them in Vue with new URL(...).

Direct imports in components (tightly coupled but explicit).

We chose Option 2 because it keeps JSON clean and still lets Vite optimize assets.

Once the helper was set up, we tested by rendering one card with hardcoded props from projects.json. This confirmed the pipeline:
JSON → props → ProjectCard → Vue resolves image.

Next, we expanded to multiple cards by planning to loop through projectsList. At this stage, the layout wasn’t responsive yet — cards stacked in a column because of global CSS conflicts. We flagged that responsiveness would need attention soon

---

Step 10: Responsiveness Foundations

We noticed that global CSS was constraining every <section> to max-width: 1200px, which caused the Hero background to not span full width. To fix this, we introduced a .container utility class:

Sections like Intro, Services, Projects → wrapped in .container for centered, readable content.

Sections like Hero → remain full-width, spanning edge to edge.

This gives us flexibility and avoids one-size-fits-all CSS.

We also discussed responsiveness strategy:

Build fluid layouts with %, rem, auto-fit as we go.

Reserve media queries for breakpoints (Navbar, font scaling, spacing adjustments).

---

✅ **Step 11**: Build `MainFooter.vue`

- Included brand name linking to home route
- Added translated nav links (services, projects, about, contact)
- Social media icons with accessible anchor tags and aria-labels
- Dynamic year copyright
- Scoped styles and flex layout
- Verified accessibility, reactivity, and i18n compliance

---

✅ **Step 12**: Add Mobile Hamburger Menu

- Added FontAwesome hamburger icon to `MainNavbar.vue` that appears on screens <768px
- Introduced `MobileNavDrawer.vue` as a slide-in mobile navigation panel
- Menu opens/closes via click and automatically closes on route change
- Preserves locale param in all mobile links via `RouterLink`
- LanguageToggle component reused inside the drawer for bilingual switching
- CSS media queries hide desktop `.nav-links` and show `.hamburger`
- Transition animation handled via `<transition name="slide">`
- Style and layout scoped per component, with room to expand for responsiveness
- Added backdrop click to close the drawer
- ESC key now closes the drawer
- Drawer layout updated to flex container with 75% drawer, 25% translucent backdrop

---

✅ **Step 13**: Refactor Footer for Mobile

- Assessed mobile footer UX on iPhone 14
- Identified large gaps and redundancy between footer links and hamburger menu
- Removed nav links from `MainFooter.vue` on mobile to prevent duplication
- Reduced font size and spacing (`gap`) of social media icons for better layout fit
- Verified appearance and spacing across breakpoints
- Footer now presents a clean, focused layout on small screens

---

✅ **Step 14**: Fix i18n Integration

- Identified issue: router guard was using `i18n.global.locale = locale` which only works in legacy mode
- Updated to `i18n.global.locale.value = locale` for proper Composition API usage
- Verified translations now switch correctly across Navbar, Footer, HomePage, and MobileNavDrawer
- Confirmed `$t()` and `t()` calls function as expected in templates and `<script setup>`
- Set plan to persist locale using `localStorage` to survive reloads

---

🛠️ Features to Fix/Add (Backlog)

- [ ] Populate all pages: AboutPage, ServicesPage, ProjectsPage, ContactPage
- [ ] Fill out `projects.json` with real content and images
- [ ] Ensure full i18n coverage on all pages (EN + JA)
- [ ] Add ContactForm.vue with validation and feedback (after pages are complete)
- [ ] Add accessibility features (ARIA, keyboard nav)
- [ ] Add basic SEO (meta tags, titles per route)
- [ ] Create unit tests for key components (e.g., ProjectCard.vue)
- [ ] Prepare site for deployment (e.g., Netlify or Vercel)
- [ ] Add README badges and usage notes for GitHub
- [ ] Fix footer responsiveness
- [ X ] Footer nav links bleed off the screen on mobile screens
- [ X ] fa icons need to be responsive; right now they shrink out of sight
- [ ] JA translation text is larger, causing layout shifts; normalize text sizes with EN
- [ ] Responsiveness in general will have to be dealt with
- [ ] Add a logo to `.brand`; currently only displays name

- [ ] Add role="dialog" and aria-labels to mobile nav for accessibility
- [ ] Add keyboard focus trap (optional, accessibility boost)
- [ ] Animate hamburger icon into "X" (optional polish)
- [ ] Persist last selected locale in `localStorage` so user preference survives reloads

Lessons Learned (So Far)

- Do not put global resets inside scoped component styles; they won’t affect `<body>` or global elements. Keep resets in a global stylesheet.
- Do not leave placeholder logic in the wrong place (we first tested the toggle inside DefaultLayout, but it belonged in LanguageToggle.vue).
- JSON structure matters — always confirm the correct key path when using `$t()`.
- Explicitly set padding and sizing in components so they are not broken by global resets.
- Use CSS variables for shared dimensions like navbar height to keep content and layout aligned.
- Build the structure first (stub) before styling. It avoids rework if sections are added, removed, or rearranged later.
- Keep each component responsible for its own layout and logic — don’t spread responsibilities across unrelated files.

* In Composition API mode (`legacy: false`), `i18n.global.locale` is a **ref** and must be updated with `.value`
* Always guard array/object translations via `tm()` with `Array.isArray` to prevent runtime errors
* Route guards should keep Vue Router, i18n, and `<html lang>` in sync
