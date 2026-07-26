# Kg to Lbs Converter

A complete, high-performance, single-purpose weight conversion web application built with **Next.js 14+ (App Router)**, **TypeScript in strict mode**, and **Vanilla CSS Modules**.

Designed with a clean, editorial utility aesthetic (`--ink: #132a24`, `--paper: #f6f3ec`, `--brass: #b5892b`, `--moss: #3c6e5e`, `--line: #d8d2c2`) and zero unnecessary third-party runtime dependencies. Fully pre-rendered for static hosting (`output: 'export'`).

---

## Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Vanilla CSS Modules (CSS Custom Properties, zero frameworks)
- **Export Mode**: Static HTML Export (`output: 'export'` in `next.config.ts`)
- **SEO & Metadata**: Next.js Metadata API, JSON-LD `FAQPage` schema, dynamic `sitemap.ts`, `robots.txt`

---

## Project Structure

```text
kg-to-lbs-app/
├── app/
│   ├── layout.tsx              (Root layout, metadata, fonts, header/footer container)
│   ├── page.tsx                 (Home page — converter hero, formula guide, chart, FAQs)
│   ├── page.module.css          (Home page specific styles)
│   ├── globals.css              (Design tokens, CSS variables, typography reset)
│   ├── guides/
│   │   ├── 70-kg-to-lbs/page.tsx (Targeted guide for 70 kg to lbs)
│   │   ├── 1-kg-to-lbs/page.tsx  (Targeted guide for base 1 kg unit factor)
│   │   └── kg-to-lbs-chart/page.tsx (Complete reference lookup guide)
│   ├── about/page.tsx           (Standards & metrology overview)
│   └── sitemap.ts               (Dynamic sitemap.xml generator)
├── components/
│   ├── Converter.tsx + Converter.module.css       (Real-time 2-way converter)
│   ├── ConversionChart.tsx + ConversionChart.module.css (Interactive 1-100 kg chart)
│   ├── FAQSection.tsx + FAQSection.module.css     (Collapsible FAQs + JSON-LD schema)
│   ├── Header.tsx + Header.module.css             (Editorial navigation header)
│   └── Footer.tsx + Footer.module.css             (Site footer)
├── lib/
│   └── convert.ts               (Pure conversion math, constants, chart helpers)
├── public/
│   └── robots.txt               (Search engine crawler directives)
├── next.config.ts               (Static export configuration)
├── tsconfig.json                (Strict TypeScript compiler config)
└── README.md                    (Project documentation)
```

---

## Design System Tokens

Defined in `app/globals.css`:

| Token | Hex Value | Purpose |
| --- | --- | --- |
| `--ink` | `#132a24` | Primary text color (deep dark green-black) |
| `--paper` | `#f6f3ec` | Background color (warm editorial paper) |
| `--brass` | `#b5892b` | Primary accent color |
| `--moss` | `#3c6e5e` | Secondary accent & button background |
| `--line` | `#d8d2c2` | Thin borders & table dividing lines |

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Static Export

```bash
npm run build
```

The compiled static HTML/CSS/JS site will be exported to the `out/` folder, ready for immediate deployment on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or S3.

---

## Mathematical Conversion Standard

Based on the **International Yard and Pound Agreement of 1959**:
- `1 pound = 0.45359237 kg`
- `1 kilogram = 2.20462262185 lbs`
