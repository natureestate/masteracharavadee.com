# Master Acharavadee - Project Status

> อัปเดตล่าสุด: 26 กุมภาพันธ์ 2026

---

## สถานะ: MVP สมบูรณ์ (พร้อม Deploy Staging)

---

## สรุป Project

เว็บไซต์ [masteracharavadee.com](https://masteracharavadee.com/) ย้ายจาก WordPress มาเป็น **Vinext** (Next.js 15 App Router บน Vite) ในรูปแบบ **TurboRepo Monorepo** พร้อม Sanity CMS สำหรับ Blog

### Tech Stack

| ส่วน | เทคโนโลยี |
|------|-----------|
| Framework | Vinext (Next.js 15 + Vite 7) |
| Monorepo | TurboRepo + pnpm workspaces |
| Styling | Tailwind CSS v4 + shadcn/ui + Radix UI |
| CMS | Sanity.io (Headless) |
| Deployment | Cloudflare Pages |
| Node.js | v22+ (ต้องใช้ v22 เพราะ Vinext ต้องการ `glob` จาก `node:fs/promises`) |

---

## โครงสร้าง Project

```
masteracharavadee.com/
├── apps/
│   ├── web/          # Vinext web app (port 3000)
│   ├── cms/          # Sanity Studio
│   └── mobile/       # Expo placeholder (ยังไม่พัฒนา)
├── packages/
│   ├── api-client/       # GROQ queries + Zod schemas
│   ├── design-system/    # Tailwind preset + icons
│   └── typescript-config/ # shared tsconfig
├── scripts/
│   └── restartport.sh    # kill port + restart dev
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## หน้าเว็บที่สร้างแล้ว

| หน้า | Path | สถานะ |
|------|------|--------|
| Home | `/` | สมบูรณ์ (7 sections) |
| About | `/about` | สมบูรณ์ (timeline biography) |
| Blog Listing | `/blog` | สมบูรณ์ (category filter, 9 posts) |
| Blog Detail | `/blog/[slug]` | สมบูรณ์ (content, share, related) |
| 404 | `*` | สมบูรณ์ |
| Sitemap | `/sitemap.xml` | สมบูรณ์ (auto-generate) |
| Robots | `/robots.txt` | สมบูรณ์ |

---

## SEO

- **generateMetadata** — ทุกหน้ามี title, description, og:image
- **301 Redirects** — WordPress URL เดิม redirect ไปหน้าใหม่ (ดู `next.config.ts`)
- **JSON-LD** — WebSite, Person, Organization, Article, BreadcrumbList
- **Sitemap** — สร้างอัตโนมัติจาก static pages + blog posts
- **Robots.txt** — Allow all, link sitemap

---

## Responsive Design

- **Desktop** — DesktopHeader (fixed top, dropdown, scroll effect)
- **Mobile** — MobileHeader (hamburger overlay) + MobileBottomNav (5 items, app-like)
- **Footer** — ปรับ padding สำหรับ mobile bottom nav

---

## คำสั่งที่ต้องรู้

### สิ่งที่ต้องทำก่อน (ครั้งแรก)

```bash
# ใช้ Node.js v22+
nvm use 22

# ติดตั้ง dependencies
pnpm install
```

### Development (localhost)

```bash
# เปิด dev server (web เท่านั้น)
pnpm dev:web
# => http://localhost:3000

# เปิด Sanity Studio
pnpm dev:cms

# เปิดทุก app พร้อมกัน
pnpm dev

# Restart port (kill port เก่า + เปิดใหม่)
pnpm restartport
# หรือ
bash scripts/restartport.sh
# กำหนด port เอง: bash scripts/restartport.sh 3001
```

### Build

```bash
# Build web app
pnpm build:web

# Build ทั้ง monorepo
pnpm build
```

### Deploy (Cloudflare Pages)

```bash
# Login Cloudflare (ครั้งแรก)
cd apps/web && npx wrangler login

# Deploy
cd apps/web && npx vinext deploy
```

---

## Environment Variables

### apps/web/.env.local

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://masteracharavadee.com
```

### apps/cms/.env.local

```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

---

## Sanity CMS Setup

### สร้าง Project ใหม่

1. ไปที่ [sanity.io/manage](https://www.sanity.io/manage) แล้วสร้าง project
2. คัดลอก Project ID มาใส่ `.env.local` ทั้ง `apps/web` และ `apps/cms`
3. เพิ่ม CORS origin: `http://localhost:3333` และ domain จริง

### Seed ข้อมูลตัวอย่าง (9 posts)

```bash
cd apps/cms
npx sanity exec scripts/seed.ts --with-user-token
```

### Sanity Schemas

| Document | Description |
|----------|-------------|
| post | Blog post (title, slug, body, featured image, categories, tags) |
| category | หมวดหมู่ (Teaching, Motion, News, Books, Photography) |
| tag | Tag (Death, Jealousy, Love, Rebirth) |
| author | ผู้เขียน |
| siteSettings | ตั้งค่าเว็บ (title, description, OG image) |

---

## สีที่ใช้ (Brand Colors)

| ชื่อ | Hex | ใช้สำหรับ |
|------|-----|-----------|
| brand-gold-50 | #FFF9E6 | Background อ่อน |
| brand-gold-400 | #FFD133 | CTA, accent |
| brand-gold-500 | #C8A951 | Primary gold |
| brand-gold-600 | #B8963D | Hover states |
| brand-cream | #FAF8F5 | Section background |
| brand-dark | #1A1A1A | Text, dark sections |

### Fonts

- **Sans**: Inter (body text)
- **Serif**: Playfair Display (headings)

---

## รูปภาพที่ดาวน์โหลดมา

อยู่ใน `apps/web/public/images/`:

| ไฟล์ | ใช้ตรงไหน |
|------|-----------|
| logo-master.png | Logo header |
| master-portrait.jpg | About section |
| retreat-aerial.jpg | Hero + Bodhidhammayan |
| teachings-articles.jpg | Teachings card |
| teachings-books.jpg | Teachings card |
| teachings-videos.jpg | Teachings card |
| manasikarn-hall.jpg | Manasikarn section |
| biography-somdej.jpg | About page |
| biography-full.jpg | About page |
| dhamma-icon.png | Quote section |
| blog/*.jpg | Blog featured images (9 รูป) |

---

## สิ่งที่ต้องทำต่อ (Next Steps)

### Priority 1 — Deploy Staging

- [ ] สร้าง Sanity project + ใส่ env
- [ ] รัน seed script
- [ ] Deploy Cloudflare Pages
- [ ] ตั้งค่า staging subdomain (เช่น `new.masteracharavadee.com`)

### Priority 2 — เชื่อม Sanity แบบ Live

- [ ] เปลี่ยนจาก sample-data.ts เป็นดึงจาก Sanity API จริง
- [ ] ตั้งค่า ISR (Incremental Static Regeneration) หรือ On-Demand Revalidation
- [ ] ทดสอบ CRUD blog posts ผ่าน Sanity Studio

### Priority 3 — เพิ่มเติม

- [ ] Google Analytics / Tag Manager
- [ ] Contact Form (Cloudflare Workers / Formspree)
- [ ] Search functionality
- [ ] Newsletter signup
- [ ] Multi-language (ไทย/อังกฤษ)

### Priority 4 — Mobile App

- [ ] พัฒนา Expo app ใน `apps/mobile`
- [ ] แชร์ `packages/api-client` กับ mobile

---

## ปัญหาที่เคยเจอ (Troubleshooting)

| ปัญหา | สาเหตุ | วิธีแก้ |
|-------|--------|---------|
| `glob` not found from `node:fs/promises` | Node.js < 22 | `nvm use 22` |
| `_isBuild` undefined | Vite version mismatch | `pnpm --filter web add -D vite@^7` |
| `@vitejs/plugin-rsc` not found | Missing plugin | `pnpm --filter web add -D @vitejs/plugin-rsc @vitejs/plugin-react` |
| tsconfig extends not found | pnpm workspace resolution | ใช้ relative path แทน package name |
| Port ค้าง | Process เก่าไม่ถูก kill | `pnpm restartport` |

---

## Scripts Reference

| Script | คำอธิบาย |
|--------|----------|
| `pnpm dev` | เปิด dev ทุก app |
| `pnpm dev:web` | เปิด web dev server |
| `pnpm dev:cms` | เปิด Sanity Studio |
| `pnpm build` | Build ทุก app |
| `pnpm build:web` | Build web เท่านั้น |
| `pnpm restartport` | Kill port 3100 + restart dev |
| `bash scripts/restartport.sh [port]` | Kill port ที่ระบุ + restart dev |
