# 📜 Mehwr - Quote Generator

A well designed web app to generate motivational quotes by topic. Built with **Next.js 15**, **ShadCN UI**, **Tailwind CSS**, and deployed on **Vercel**.

---

## Features

- 🎯 Topic-based motivational quote generation

- 🌗 Light/Dark theme toggle with persistence
  
- 💡 Clean and minimal UI using ShadCN + TailwindCSS
  
- 📱 Fully responsive across all devices

- 🚀 Deployed seamlessly with Vercel

---

## Tech Stack

| Category        | Technologies Used                                    |
|----------------|-------------------------------------------------------|
| Frontend       | [Next.js 15](https://nextjs.org), TypeScript         |
| UI Components  | [ShadCN UI](https://ui.shadcn.dev), Tailwind CSS     |
| State Handling | React `useState`                                      |
| Theming        | `next-themes`, Lucide Icons                          |
| Deployment     | [Vercel](https://vercel.com)                         |

---

## How It Works

1. User selects a **topic** from the dropdown.
2. Clicks **"Get Quote"** button.
3. The app fetches 3 random quotes under that topic from a local JSON file.
4. Each quote is shown in a styled card.

---

## Live Demo

👉 [Visit the Live Site](https://quote-generator-eight-weld.vercel.app)  

---

## Getting Started (Local Development)

1. Clone the repository:
```bash
git clone https://github.com/izzanaseer/Nexium_IzzaNaseer_QuoteGenerator.git
cd Nexium_IzzaNaseer_QuoteGenerator
```
2. Intsall dependencies and run the server
```bash
pnpm install
pnpm dev
```
3. Then open `http://localhost:3000` in web browser to visit the site.

---

## Project Structure
```
src/
├── app/
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage rendering Navbar, HeroSection, and Footer in root
│   └── global.css             # Global styles and theme configurations
│
├── _data/
│   └── quotes.json            # Static local JSON data (quotes)
│
├── components/
│   ├── HeroSection.tsx        # Main section with heading, topic selection and quote display
│   ├── QuoteCard.tsx          # Component to render individual quotes
│   └── TopicSelect.tsx        # Dropdown to select topics
│
└── common/                    # Reusable shared components
    ├── Navbar.tsx
    └── Footer.tsx
```

---

## License

This project is licensed under the MIT License.

---

## Contributions

Pull requests, issues, and feature suggestions are welcome!
