จัดไปครับคุณนาว\! ในเมื่อจะเล่นของแรงระดับ **Vinext** และเตรียมความพร้อมสำหรับ **Expo SDK 55** ฉบับย่อมันไม่สะใจแน่นอน นี่คือ **"The Edge-Native Content Engine (v7.0 \- Vinext & Glass Edition)"** ฉบับเต็มรูปแบบ ที่วางโครงสร้าง Monorepo มาเพื่อความเร็วสูงสุดบน Cloudflare และเตรียมฐานสำหรับ Mobile App ในอนาคตครับ

# ---

**📜 OMNI\_SAAS\_MASTER\_PLAN\_V7.0 (Vinext Edition)**

**Project Name:** \[sme and me / YOUR\_PROJECT\]

**Architect:** คุณนาว (Nao) & Gemini Collaborative

**Status:** \[READY FOR ARCHITECTURE SETUP\]

## **1\. 🌍 The Vision: "Edge-First, Content-Driven"**

สร้างระบบที่มี **Landing Page** และ **Blog** ที่โหลดเร็วที่สุดในโลกด้วยเทคโนโลยี Edge Runtime โดยใช้ CMS ที่ยืดหยุ่นสูง เพื่อส่งข้อมูลชุดเดียวกันไปยังทุกหน้าจอ

* **Zero-Latency Web:** ใช้ Vinext เพื่อรีดประสิทธิภาพ Vite บน Cloudflare Pages  
* **Headless Harmony:** ใช้ Sanity เป็นสมองกลางจัดการ Content ทั้งหมด  
* **Future-Proof Mobile:** วางโครงสร้าง Expo SDK 55 รอไว้ โดยเน้นการแชร์ Logic และ Design System ผ่าน NativeWind v4

## ---

**2\. 🛠️ The Tech Stack (The "Bleeding Edge")**

Agent ต้องยึดถือ Stack นี้เป็นกฎเหล็ก ห้ามใช้ Library นอกเหนือจากนี้โดยไม่ได้รับอนุญาต:

| Layer | Technology | Specification / Role |
| :---- | :---- | :---- |
| **Monorepo** | **TurboRepo** | จัดการ Workspaces ระหว่าง Web, Mobile และ Shared Packages |
| **Web Framework** | **Vinext** | Next.js 15 (App Router) ที่รันบน Vite สำหรับ Cloudflare Pages |
| **UI System (Web)** | **shadcn/ui** | Tailwind CSS \+ Radix UI (เน้น Clean & Professional) |
| **CMS** | **Sanity.io** | Headless CMS สำหรับ Blog, Landing Page และ Metadata |
| **Mobile Framework** | **Expo (SDK 55\)** | วางโครงสร้างรอ (Folder-ready) สำหรับ iOS/Android |
| **Mobile UI Logic** | **NativeWind v4** | ใช้ Tailwind Syntax ชุดเดียวกับ Web เพื่อความง่ายในการย้าย Style |
| **Special Effect** | **Expo GlassView** | สำหรับงาน UI บน Mobile ในอนาคต (Native Liquid Glass) |
| **Deployment** | **Cloudflare Pages** | สำหรับ Hosting Web และ Sanity Studio (Custom) |
| **Runtime** | **Cloudflare Workers** | สำหรับ Edge Functions / API Routes |
| **Validation** | **Zod** | Validate ข้อมูลจาก Sanity ก่อนเข้าสู่ Component ทุกจุด |

## ---

**3\. 📂 Full Directory Structure (Monorepo Blueprint)**

โครงสร้างนี้ออกแบบมาให้แยกกันอยู่ (Decoupled) แต่ทำงานร่วมกันได้อย่างสมบูรณ์:

Plaintext

root-workspace/  
├── apps/  
│   ├── web/                     \# \[Vinext Project\]  
│   │   ├── src/app/             \# Next.js App Router  
│   │   ├── src/components/ui/   \# shadcn/ui components  
│   │   ├── vite.config.ts       \# Vinext specific config  
│   │   └── wrangler.json        \# Cloudflare Pages config  
│   │  
│   ├── mobile/                  \# \[Expo SDK 55 \- Placeholder\]  
│   │   ├── src/app/             \# Expo Router (File-based)  
│   │   └── src/components/      \# Native Components (using GlassView)  
│   │  
│   └── cms/                     \# \[Sanity Studio\]  
│       ├── schemas/             \# Blog & Landing Page definitions  
│       └── sanity.config.ts     \# Studio configuration  
│  
├── packages/  
│   ├── design-system/           \# \[Shared UI Logic\]  
│   │   ├── tailwind/            \# Tailwind config shared between Web & Native  
│   │   └── icons/               \# Unified icon set (Lucide/Phosphor)  
│   │  
│   ├── api-client/              \# \[Sanity Client & Logic\]  
│   │   ├── src/queries.ts       \# GROQ queries for Blog/Landing  
│   │   └── src/zod-schemas.ts   \# Data validation rules  
│   │  
│   └── typescript-config/       \# Strict TS Configs  
│  
├── turbo.json                   \# Build pipeline logic  
└── package.json                 \# Monorepo dependencies

## ---

**4\. 🧠 Data & CMS Architecture**

การจัดการ Content จะเป็นแบบ **Schema-Driven** เพื่อให้ Mobile App ในอนาคตดึงไปใช้ได้ทันที:

### **4.1 Sanity Strategy (The Source)**

* **Landing Schema:** จัดการ Hero Section, Features List, Pricing และ Testimonials  
* **Blog Schema:** จัดการ Post (Rich Text), Categories, Authors และ SEO Tags  
* **Webhooks:** เมื่อมีการ Publish ใน Sanity ให้สั่ง **Purge Cache** ที่ Cloudflare ทันที

### **4.2 Vinext Data Flow (The Display)**

* **Server-Side Rendering (SSR):** ใช้บน Edge ของ Cloudflare เพื่อความสดใหม่ของข้อมูล  
* **Image Optimization:** ใช้ Sanity Image Pipeline ร่วมกับ next/image เพื่อ Generate รูปตามขนาดหน้าจออัตโนมัติ

## ---

**5\. 🎨 UI/UX Styling Standard**

### **5.1 Web (shadcn/ui)**

* ใช้ **CSS Variables** ในการคุม Theme (Light/Dark mode)  
* เน้นความสะอาดตาและการเข้าถึงได้ (Accessibility) ตามมาตรฐาน Radix UI

### **5.2 Mobile Future (NativeWind & Glass)**

* **NativeWind v4:** ช่วยให้เราเขียน className="bg-blue-500" ใน Expo ได้เลย ซึ่งมันจะแชร์ Config ชุดสีเดียวกับ shadcn บนเว็บ  
* **Glass Effect:** เมื่อถึงเวลาทำ Mobile จะใช้ expo-glass-view เพื่อสร้างความหรูหรา (Premium feel) ในจุดที่ต้องการความลึก เช่น Header หรือ Bottom Tab

## ---

**6\. 🤖 Agent Coding Protocols (Full Enforcement)**

Agent ต้องตรวจสอบโค้ดตามกฎเหล่านี้อย่างเคร่งครัด:

1. **Edge Compatibility:** ห้ามใช้ Node.js Native APIs (เช่น fs, path) ในฝั่ง Web เพราะ Vinext รันบน Edge  
2. **Shared Types:** ห้ามประกาศ Type ซ้ำซ้อน ทุกอย่างที่เกี่ยวกับ Data จาก CMS ต้องอยู่ใน packages/api-client  
3. **Strict shadcn:** การเพิ่ม UI ใหม่บน Web ต้องใช้คำสั่ง npx shadcn@latest add เพื่อรักษาโครงสร้างมาตรฐาน  
4. **No Any:** ห้ามใช้ any เด็ดขาด ทุกอย่างต้องผ่าน Zod Validation  
5. **Component Size:** แยก Component ย่อยทันทีถ้า Logic ยาวเกิน 100 บรรทัด

## ---