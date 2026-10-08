# Rouaa Guesmi: portfolio (rouaaguesmi1.github.io)

Static site (HTML, CSS, JavaScript). No build step, no dependencies. Palette: navy, charcoal, white, with one ice-blue accent.

## Publish on GitHub Pages

The repo `rouaaguesmi1.github.io` already exists, so:

1. Unzip this folder and copy **all files** into that repo (replace what is there).
2. Commit and push to `main`.
3. In the repo, open **Settings > Pages** and set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site is live at https://rouaaguesmi1.github.io/ within a minute or two.

## What is included

| File | Purpose |
|---|---|
| `index.html` | Page structure and content (hero, about, skills, experience, projects, education, booking) |
| `style.css` | Design tokens, layout, responsive rules, motion |
| `script.js` | Project data, skill tabs, filters, hero animation, booking logic |
| `assets/rouaa.jpg` | Your portrait |
| `assets/Rouaa_Guesmi_CV.pdf` | The CV behind the **Download CV** buttons |

## Booking interviews with Google Calendar

The booking form works immediately with no setup. A visitor picks a date, time and length, and Google Calendar opens with the event prefilled and **rouaaguesmi@gmail.com added as a guest**. There is also a **.ics** download for other calendar apps.

For a true self-service booking page where visitors only see your free slots:

1. Google Calendar > **Create** > **Appointment schedule**. Set your availability and save.
2. Click **Share** and copy the public booking link.
3. Open `script.js` and paste it into the first config line: `const APPOINTMENT_URL = "https://calendar.app.google/...";`

Once set, every **Book an interview** button points to that page, and the on-page form stays as a backup.

## Edit your content

- **Projects:** the `PROJECTS` array at the top of `script.js`. Each entry has name, category, description and stack. Cards link to `github.com/rouaaguesmi1/<name>` automatically. Add `feat:true` to make a card large.
- **Skills:** the `SKILLS` object in `script.js`.
- **Experience, education, certifications, contact details:** `index.html`.
- **New CV:** replace `assets/Rouaa_Guesmi_CV.pdf`, keeping the same file name.

## Please check

- **All 11 public repositories are listed**, including the profile README and this portfolio repo. Descriptions come from your READMEs and GitHub descriptions. The stack tags come from READMEs and your CV, so correct any that are off. `Green-Menu-Web-Application` has no README, so its description is a short generic line you should replace.
- The page shows your **phone number** from the CV. Remove the Phone line in the booking section of `index.html` if you prefer not to publish it.
- The hero chips repeat figures from your CV (12-point retrieval gain, QLoRA 7B, 3D U-Net with CBAM). Keep them only if you can stand behind them in an interview.
- Fonts (Sora, IBM Plex Sans, JetBrains Mono) load from Google Fonts. Without a connection the site falls back to system fonts.

## Built in

Responsive down to phones, keyboard focus styles, skip link, reduced-motion support, SEO and social-share meta tags, and structured data for search engines.
