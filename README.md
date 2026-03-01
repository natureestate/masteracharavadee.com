<p align="center">
  <img src="apps/web/public/images/logo-master.webp" alt="Master Acharavadee" height="80" />
</p>

<h1 align="center">masteracharavadee.com</h1>

<p align="center">
  <strong>Edge-Native Content Engine</strong> — เว็บไซต์ทางการของ Master Acharavadee Wongsakon<br/>
  สร้างด้วย Vinext (Next.js 15 + Vite 7) บน Cloudflare Workers
</p>

<p align="center">
  <a href="https://masteracharavadee-web.smeandme.workers.dev">🌐 Live Site</a> ·
  <a href="#getting-started">🚀 Getting Started</a> ·
  <a href="#architecture">🏗 Architecture</a> ·
  <a href="#deployment">📦 Deployment</a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
- [Scripts Reference](#scripts-reference)
- [Environment Variables](#environment-variables)
- [Pages & Routes](#pages--routes)
- [Components Map](#components-map)
- [Design System](#design-system)
- [Image Assets](#image-assets)
- [CMS (Sanity)](#cms-sanity)
- [Deployment](#deployment)
- [Worker Entry Point](#worker-entry-point)
- [Configuration Files](#configuration-files)
- [SEO & Performance](#seo--performance)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

เว็บไซต์ทางการของ **Master Acharavadee Wongsakon** — ครูสอนวิปัสสนาชาวไทยผู้สอน Techo Vipassana Meditation ที่ศูนย์ปฏิบัติธรรม Bodhidhammayan ทั่วประเทศไทย

เว็บไซต์ประกอบด้วย:
- **Homepage** — Hero, About, Video Quote, Latest Posts, Teachings, Bodhidhammayan, Manasikarn
- **About** — ชีวประวัติ Master Acharavadee
- **Blog** — บทความ, คำสอน, หนังสือ พร้อม category filter
- **SEO** — JSON-LD structured data, sitemap, robots.txt, 301 redirects จากเว็บเดิม

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | [Vinext](https://github.com/niconiahi/vinext) (Next.js App Router on Vite) | latest |
| **React** | React 19 | ^19.2.4 |
| **Build Tool** | Vite | ^7.3.1 |
| **Next.js Shims** | next | 15.5.12 |
| **Monorepo** | TurboRepo + pnpm workspaces | turbo ^2 |
| **Styling** | Tailwind CSS v4 + shadcn/ui + Radix UI | ^4 |
| **CMS** | Sanity.io (Headless) | ^3 |
| **Deployment** | Cloudflare Workers (ไม่ใช่ Pages) | wrangler ^4.69 |
| **Language** | TypeScript | ^5 |
| **Node.js** | v22+ (ต้องการ `glob` จาก `node:fs/promises`) | >=22 |
| **Package Manager** | pnpm | 9.15.4 |
| **Validation** | Zod | ^3 |
| **Icons** | Lucide React | ^0.460 |

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Cloudflare Edge                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Cloudflare Worker                     │  │
│  │  ┌─────────────┐  ┌───────────────────────────┐   │  │
│  │  │ /_vinext/    │  │   App Router Handler      │   │  │
│  │  │ image        │  │   (RSC + SSR)             │   │  │
│  │  │ optimization │  │                           │   │  │
│  │  └──────┬───────┘  └─────────┬─────────────────┘   │  │
│  │         │                    │                      │  │
│  │         ▼                    ▼                      │  │
│  │  ┌─────────────┐  ┌───────────────────────────┐   │  │
│  │  │ env.ASSETS  │  │  vinext/server/            │   │  │
│  │  │ (Static)    │  │  app-router-entry          │   │  │
│  │  └─────────────┘  └───────────────────────────┘   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Static Assets (CDN)                   │  │
│  │  /images/*.webp  /assets/*.js  /assets/*.css       │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
         │                              │
         ▼                              ▼
┌─────────────────┐          ┌─────────────────────┐
│  Sanity.io CMS  │          │  External Images     │
│  (cdn.sanity.io)│          │  (masteracharavadee  │
│                 │          │   .com, i0.wp.com)   │
└─────────────────┘          └─────────────────────┘
```

### Build Pipeline

```
vinext build
  ├── [1/5] analyze client references (RSC)
  ├── [2/5] analyze server references (SSR)
  ├── [3/5] build rsc environment  → dist/server/
  ├── [4/5] build client environment → dist/client/
  └── [5/5] build ssr environment  → dist/server/ssr/

vinext deploy
  └── wrangler deploy → Cloudflare Workers
```

---

## Monorepo Structure

```
masteracharavadee.com/
│
├── apps/
│   ├── web/                          # เว็บแอปหลัก (Vinext + Cloudflare Workers)
│   │   ├── public/images/            # รูปภาพ WebP ทั้งหมด (31 ไฟล์)
│   │   ├── src/
│   │   │   ├── app/                  # Next.js App Router (pages, layout, metadata)
│   │   │   ├── components/           # React components (layout, sections, ui, seo, blog)
│   │   │   └── lib/                  # Utilities (sample-data, cn, formatDate)
│   │   ├── worker/index.ts           # Cloudflare Worker entry point
│   │   ├── wrangler.json             # Cloudflare Workers config
│   │   ├── next.config.ts            # Next.js config (images, redirects)
│   │   ├── vite.config.ts            # Vite + vinext + @cloudflare/vite-plugin
│   │   └── postcss.config.cjs        # PostCSS + Tailwind v4
│   │
│   ├── cms/                          # Sanity Studio (Headless CMS)
│   │   ├── schemas/                  # Content schemas (post, category, tag, author, siteSettings)
│   │   ├── scripts/seed.ts           # Seed script สำหรับข้อมูลตัวอย่าง
│   │   └── sanity.config.ts          # Sanity Studio configuration
│   │
│   └── mobile/                       # Expo SDK 55 (placeholder — ยังไม่พัฒนา)
│
├── packages/
│   ├── api-client/                   # Sanity client, GROQ queries, Zod schemas
│   │   └── src/
│   │       ├── client.ts             # Sanity client setup
│   │       ├── queries.ts            # GROQ queries
│   │       └── zod-schemas.ts        # Zod validation schemas
│   │
│   ├── design-system/                # Shared design tokens
│   │   ├── tailwind/preset.ts        # Brand colors, fonts preset
│   │   └── icons/index.ts            # Shared icon exports
│   │
│   └── typescript-config/            # Shared TypeScript configs
│       ├── base.json                 # Base config (strict, ES2022, bundler)
│       └── react.json                # React config (jsx react-jsx, DOM)
│
├── scripts/
│   ├── deploy.sh                     # Build + deploy automation
│   └── restartport.sh                # Kill port + restart dev server
│
├── turbo.json                        # TurboRepo task config
├── pnpm-workspace.yaml               # pnpm workspace definition
├── package.json                      # Root scripts + engine constraints
└── pnpm-lock.yaml                    # Lockfile
```

---

## Getting Started

### Prerequisites

| Requirement | Version | Check |
|-------------|---------|-------|
| Node.js | **v22+** | `node -v` |
| pnpm | **v9+** | `pnpm -v` |
| nvm (recommended) | — | `nvm -v` |
| Cloudflare account | — | [dash.cloudflare.com](https://dash.cloudflare.com) |

### Installation

```bash
# Clone
git clone git@github.com:natureestate/masteracharavadee.com.git
cd masteracharavadee.com

# ใช้ Node.js 22
nvm use 22

# ติดตั้ง dependencies
pnpm install
```

### Development

```bash
# รัน web dev server (port 3000)
pnpm dev:web

# รัน Sanity Studio
pnpm dev:cms

# รันทุก app พร้อมกัน
pnpm dev
```

### Build

```bash
# Build เฉพาะ web
pnpm build:web

# Build ทุก app
pnpm build
```

### Deploy

```bash
# วิธีที่ 1: ใช้ deploy script (แนะนำ)
bash scripts/deploy.sh

# วิธีที่ 2: deploy ตรงจาก apps/web
cd apps/web && pnpm run deploy

# วิธีที่ 3: build แยก แล้ว deploy
cd apps/web
pnpm run build
npx vinext deploy --skip-build
```

---

## Scripts Reference

### Root Scripts (`package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| `pnpm dev` | `turbo dev` | รัน dev server ทุก app |
| `pnpm build` | `turbo build` | Build ทุก app |
| `pnpm lint` | `turbo lint` | Lint ทุก app |
| `pnpm dev:web` | `turbo dev --filter=@masteracharavadee/web` | รัน web dev server |
| `pnpm dev:cms` | `turbo dev --filter=@masteracharavadee/cms` | รัน Sanity Studio |
| `pnpm build:web` | `turbo build --filter=@masteracharavadee/web` | Build เฉพาะ web |
| `pnpm restartport` | `bash scripts/restartport.sh` | Kill port 3100 + restart dev |

### Web App Scripts (`apps/web/package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| `pnpm dev` | `vinext dev` | Dev server (HMR, RSC) |
| `pnpm build` | `vinext build` | Production build |
| `pnpm start` | `vinext start` | Start production server |
| `pnpm deploy` | `vinext deploy` | Build + deploy to Cloudflare |
| `pnpm lint` | `vinext lint` | Lint check |

### CMS Scripts (`apps/cms/package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| `pnpm dev` | `sanity dev` | Sanity Studio dev server |
| `pnpm build` | `sanity build` | Build Sanity Studio |
| `pnpm deploy` | `sanity deploy` | Deploy Sanity Studio |

### Shell Scripts (`scripts/`)

| Script | Usage | Description |
|--------|-------|-------------|
| `deploy.sh` | `bash scripts/deploy.sh` | Full deploy pipeline (nvm → install → build → deploy) |
| `restartport.sh` | `bash scripts/restartport.sh [port]` | Kill process on port (default: 3100) + restart dev |

---

## Environment Variables

### `apps/web/.env.local`

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token

# Site
NEXT_PUBLIC_SITE_URL=https://masteracharavadee.com
```

### `apps/cms/.env.local`

```env
# Sanity Studio
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

> **Note:** ปัจจุบันเว็บใช้ sample data จาก `src/lib/sample-data.ts` — ยังไม่เชื่อมต่อ Sanity live

---

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage — 7 sections (Hero, About, VideoQuote, LatestPosts, Teachings, Bodhidhammayan, Manasikarn) |
| `/about` | `src/app/about/page.tsx` | ชีวประวัติ Master Acharavadee |
| `/blog` | `src/app/blog/page.tsx` | รายการบทความ + category filter |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | บทความเดี่ยว |
| `*` | `src/app/not-found.tsx` | 404 Not Found |
| `/sitemap.xml` | `src/app/sitemap.ts` | Dynamic sitemap |
| `/robots.txt` | `src/app/robots.ts` | Robots.txt |

### 301 Redirects (จากเว็บเดิม)

| Old Path | New Path |
|----------|----------|
| `/masters-biography` | `/about` |
| `/:year/:month/:day/:slug` | `/blog/:slug` |
| `/category/mobile` | `/blog?category=teaching` |
| `/category/motion` | `/blog?category=motion` |
| `/category/news` | `/blog?category=news` |
| `/category/books` | `/blog?category=books` |
| `/category/photography` | `/blog?category=photography` |
| `/category/:slug` | `/blog?category=:slug` |
| `/blog/page/:page` | `/blog?page=:page` |

---

## Components Map

### Layout Components (`src/components/layout/`)

| Component | Type | Description |
|-----------|------|-------------|
| `DesktopHeader` | Server + Client | Fixed header, dropdown mega menu, scroll effect, `hidden md:block` |
| `MobileHeader` | Client | Hamburger → centered modal overlay, blur backdrop, motion animation, `md:hidden` |
| `MobileBottomNav` | Client | Fixed bottom nav (5 items), app-style, `md:hidden` |
| `Footer` | Server | Contact info, quick links, scroll-to-top button |

### Section Components (`src/components/sections/`)

| Component | Description |
|-----------|-------------|
| `HeroSection` | Full-width hero, คำคม Lord Buddha, CTA buttons |
| `AboutSection` | Master portrait + bio summary |
| `VideoQuoteSection` | YouTube embed + inspirational quote |
| `LatestPostsSection` | 4 latest blog posts grid |
| `TeachingsSection` | 3 cards — Articles, Books, Videos |
| `BodhidhammayanSection` | Hero image + retreat info + external link |
| `ManasikarnSection` | Hero image (repositioned to building) + hall info |

### UI Components (`src/components/ui/`)

| Component | Description |
|-----------|-------------|
| `button` | shadcn-style button (variants: default, outline, ghost, link) |
| `separator` | Radix UI separator |
| `section-heading` | Reusable section title + subtitle |
| `scroll-to-top` | "Back to top" button with smooth scroll |

### Other Components

| Component | Path | Description |
|-----------|------|-------------|
| `BlogCard` | `src/components/blog/BlogCard.tsx` | Blog post card for listing pages |
| `JsonLd` | `src/components/seo/JsonLd.tsx` | Structured data (WebSite, Person, Organization, Article, BreadcrumbList) |

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-gold-50` | `#FBF7ED` | Light gold background |
| `brand-gold-100` | `#F5ECCE` | Borders, hover states |
| `brand-gold-200` | `#ECDA9E` | Selection highlight |
| `brand-gold-300` | `#E0C36C` | — |
| `brand-gold-400` | `#D4AC3E` | Gradient start, headings |
| `brand-gold-500` | `#C49A2C` | Primary accent, icons |
| `brand-gold-600` | `#A47D22` | Active states, links |
| `brand-gold-700` | `#7E5F1A` | Dark accent |
| `brand-gold-800` | `#5C4514` | — |
| `brand-gold-900` | `#3D2E0E` | — |
| `brand-cream` | `#FAF8F5` | Page background |
| `brand-dark` | `#1A1A1A` | Text, dark sections |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `font-sans` | Inter | Body text, UI |
| `font-serif` | Playfair Display | Headings, quotes |

### Utility Classes

| Class | Description |
|-------|-------------|
| `.gold-gradient` | `linear-gradient(135deg, brand-gold-400, brand-gold-600)` |
| `.gold-text` | Gradient text effect |
| `.section-padding` | Responsive horizontal padding (`1.5rem` → `4rem` → `8rem`) |
| `.safe-bottom` | `padding-bottom: env(safe-area-inset-bottom)` |

---

## Image Assets

ภาพทั้งหมดแปลงเป็น **WebP** เพื่อ performance (~4.3 MB จากเดิม ~18 MB)

### Main Images (`public/images/`)

| File | Usage |
|------|-------|
| `logo-master.webp` | Logo ใน header |
| `master-portrait.webp` | About section, JSON-LD |
| `dhamma-icon.webp` | Hero section icon |
| `retreat-aerial.webp` | Hero background |
| `retreat-aerial-bodhidhammayan.webp` | Bodhidhammayan section |
| `bodhidhammayan-master.webp` | Bodhidhammayan section |
| `manasikarn-hall.webp` | Manasikarn section |
| `teachings-articles.webp` | Teachings card |
| `teachings-books.webp` | Teachings card |
| `teachings-videos.webp` | Teachings card |
| `biography-full.webp` | About page |
| `biography-somdej.webp` | About page |

### Blog Images (`public/images/blog/`)

19 featured images สำหรับบทความ — ทั้งหมดเป็น WebP

### External Images

| Source | Usage |
|--------|-------|
| `masteracharavadee.com/wp-content/uploads/2022/11/manasikarn.jpeg` | Manasikarn hero |
| `i0.wp.com/masteracharavadee.com/wp-content/uploads/2022/08/JP_DJI_0065-2_W_re.jpg` | Bodhidhammayan hero |
| `cdn.sanity.io` | Sanity CMS images (อนาคต) |

---

## CMS (Sanity)

### Schemas (`apps/cms/schemas/`)

| Schema | Description |
|--------|-------------|
| `post` | บทความ — title, slug, body, excerpt, featured image, category, tags, author |
| `category` | หมวดหมู่ — title, slug, description |
| `tag` | แท็ก — title, slug |
| `author` | ผู้เขียน — name, slug, image, bio |
| `siteSettings` | ตั้งค่าเว็บ — title, description, logo, social links |

### Current State

ปัจจุบันเว็บใช้ **sample data** จาก `src/lib/sample-data.ts` (19 โพสต์) — ยังไม่เชื่อมต่อ Sanity live

### Seed Data

```bash
cd apps/cms
npx tsx scripts/seed.ts
```

---

## Deployment

### Production URL

```
https://masteracharavadee-web.smeandme.workers.dev
```

### Platform

**Cloudflare Workers** (ไม่ใช่ Cloudflare Pages) — ใช้ `wrangler` deploy ผ่าน `vinext deploy`

### Deploy Process

```
scripts/deploy.sh
  │
  ├── nvm use 22
  ├── pnpm install
  ├── cd apps/web && pnpm run build
  │     ├── [1/5] analyze client references
  │     ├── [2/5] analyze server references
  │     ├── [3/5] build rsc environment
  │     ├── [4/5] build client environment
  │     └── [5/5] build ssr environment
  └── npx vinext deploy --skip-build
        └── wrangler deploy
              ├── Upload static assets → CDN
              ├── Upload Worker bundle → Edge
              └── ✅ Live at production URL
```

### Build Output

```
apps/web/dist/
├── client/           # Static assets (JS, CSS, images)
│   ├── assets/       # Hashed bundles
│   ├── images/       # WebP images
│   └── .vite/        # Manifest
└── server/           # Worker bundle
    ├── index.js      # RSC entry
    ├── ssr/          # SSR entry + chunks
    └── wrangler.json # Redirected config
```

---

## Worker Entry Point

`apps/web/worker/index.ts` — Cloudflare Worker ที่จัดการ 2 routes:

### 1. Image Optimization (`/_vinext/image`)

- ใช้ `handleImageOptimization` จาก vinext
- ถ้ามี `env.IMAGES` (Cloudflare Images binding) → transform ภาพ (resize, format, quality)
- ถ้าไม่มี → serve ภาพต้นฉบับจาก `env.ASSETS` โดยไม่ transform

### 2. App Router (ทุก route อื่น)

- ใช้ `vinext/server/app-router-entry` สำหรับ RSC + SSR rendering

### Env Bindings

| Binding | Type | Required | Description |
|---------|------|----------|-------------|
| `ASSETS` | Fetcher | Yes | Static assets (auto-configured) |
| `IMAGES` | CloudflareImagesBinding | No | Cloudflare Images Transformations API |

---

## Configuration Files

### `wrangler.json`

```json
{
  "name": "masteracharavadee-web",
  "compatibility_date": "2024-12-01",
  "compatibility_flags": ["nodejs_compat"],
  "main": "./worker/index.ts",
  "assets": {
    "not_found_handling": "none",
    "binding": "ASSETS"
  }
}
```

### `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});
```

### `turbo.json`

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": [".vinext/**", ".next/**", "dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": { "dependsOn": ["^build"] }
  }
}
```

### `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### `postcss.config.cjs`

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

---

## SEO & Performance

### Structured Data (JSON-LD)

- `WebSite` — search action, site name
- `Person` — Master Acharavadee bio
- `Organization` — official website
- `Article` — blog posts (per page)
- `BreadcrumbList` — navigation breadcrumbs

### Performance Optimizations

| Optimization | Detail |
|-------------|--------|
| **WebP Images** | ทุกภาพแปลงเป็น WebP (~4.3 MB จากเดิม ~18 MB, ลด ~76%) |
| **Edge Rendering** | RSC + SSR บน Cloudflare Workers edge |
| **Font Loading** | `display: "swap"` สำหรับ Inter + Playfair Display |
| **Image Optimization** | `/_vinext/image` route สำหรับ resize + format conversion |
| **Code Splitting** | Vite automatic chunk splitting |
| **Static Assets CDN** | Cloudflare global CDN สำหรับ static files |

### Sitemap & Robots

- `/sitemap.xml` — dynamic sitemap สร้างจาก routes
- `/robots.txt` — allow all crawlers

---

## Troubleshooting

### Node.js Version Error

```
SyntaxError: The requested module 'node:fs/promises' does not provide an export named 'glob'
```

**Fix:** ต้องใช้ Node.js v22+ — `nvm use 22`

### Images Not Loading (400 Bad Request)

ถ้า `/_vinext/image` return 400:
1. ตรวจสอบว่า `env.IMAGES` binding ไม่ได้ configured (ปกติ — จะ fallback ไปใช้ภาพต้นฉบับ)
2. ตรวจสอบว่าภาพอยู่ใน `public/images/` จริง

### Port Already in Use

```bash
# Kill port แล้ว restart
bash scripts/restartport.sh 3000

# หรือ kill เฉพาะ port
lsof -ti:3000 | xargs kill -9
```

### Deploy Fails

1. ตรวจสอบ `wrangler login` — ต้อง authenticate กับ Cloudflare
2. ตรวจสอบ Node.js version — ต้อง v22+
3. ตรวจสอบ `pnpm install` — dependencies ต้องครบ

---

## Roadmap

- [ ] เชื่อมต่อ Sanity CMS live (แทน sample data)
- [ ] Expo mobile app (apps/mobile)
- [ ] Cloudflare Images binding สำหรับ image transformation
- [ ] i18n (Thai / English)
- [ ] Search functionality
- [ ] GitHub Actions CI/CD pipeline
- [ ] Analytics integration

---

## License

All Rights Reserved &copy; masteracharavadee.com
