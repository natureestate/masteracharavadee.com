# Build & Deploy Guide — masteracharavadee.com

## ข้อกำหนดเบื้องต้น (Prerequisites)

| รายการ | เวอร์ชันขั้นต่ำ |
|--------|----------------|
| Node.js | **v22+** (vinext ต้องการ `node:fs/promises` glob) |
| pnpm | v9+ |
| nvm | แนะนำ เพื่อสลับ Node version ได้สะดวก |
| Cloudflare account | ต้อง login ผ่าน `wrangler login` แล้ว |

## Quick Start

```bash
# 1. สลับไปใช้ Node.js 22
nvm use 22

# 2. ติดตั้ง dependencies (ถ้ายังไม่ได้ติดตั้ง)
pnpm install

# 3. Build + Deploy ในคำสั่งเดียว
cd apps/web && pnpm run deploy
```

## คำสั่งทั้งหมด

### Development (รันบนเครื่อง)

```bash
nvm use 22
cd apps/web
pnpm run dev
# เปิด http://localhost:3000
```

### Build อย่างเดียว (ไม่ deploy)

```bash
nvm use 22
cd apps/web
pnpm run build
```

Build output จะอยู่ที่:
- `apps/web/dist/client/` — static assets (JS, CSS, images)
- `apps/web/dist/server/` — SSR/RSC bundles + worker entry

### Deploy ไปยัง Cloudflare Workers

```bash
nvm use 22
cd apps/web
pnpm run deploy
```

คำสั่งนี้จะ:
1. Build โปรเจกต์ผ่าน Vite (5 ขั้นตอน)
2. Upload assets ไปยัง Cloudflare
3. Deploy Worker ไปที่ `https://masteracharavadee-web.smeandme.workers.dev`

### Deploy โดยข้าม Build (ใช้ build เดิม)

```bash
nvm use 22
cd apps/web
npx vinext deploy --skip-build
```

## Script สำหรับ Build & Redeploy

สร้างไฟล์ `scripts/deploy.sh` ไว้ที่ root ของโปรเจกต์:

```bash
#!/bin/bash
set -e

echo "=== masteracharavadee.com Deploy Script ==="
echo ""

# สลับไปใช้ Node.js 22
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22

echo ""
echo "[1/3] Installing dependencies..."
pnpm install

echo ""
echo "[2/3] Building..."
cd apps/web
pnpm run build

echo ""
echo "[3/3] Deploying to Cloudflare Workers..."
pnpm run deploy --skip-build

echo ""
echo "=== Deploy Complete ==="
```

ใช้งาน:

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## โครงสร้างที่เกี่ยวข้อง

```
apps/web/
├── wrangler.json          # Cloudflare Workers config
├── vite.config.ts         # Vite + vinext + @cloudflare/vite-plugin
├── worker/index.ts        # Worker entry point
├── src/                   # Source code
│   ├── app/               # App Router pages
│   ├── components/        # React components
│   └── lib/               # Utilities
├── dist/                  # Build output (git-ignored)
│   ├── client/            # Static assets
│   └── server/            # SSR bundles
└── package.json
```

## wrangler.json อธิบาย

```jsonc
{
  "name": "masteracharavadee-web",       // ชื่อ Worker
  "compatibility_date": "2024-12-01",    // Cloudflare compat date
  "compatibility_flags": ["nodejs_compat"], // รองรับ Node.js APIs
  "main": "./worker/index.ts",           // Entry point ของ Worker
  "assets": {
    "not_found_handling": "none",        // ไม่ใช้ default 404 ของ Cloudflare
    "binding": "ASSETS"                  // Binding สำหรับ static assets
  }
}
```

**สำคัญ:** ห้ามใช้ `pages_build_output_dir` เพราะโปรเจกต์นี้ใช้ Cloudflare Workers (ไม่ใช่ Pages) และ `@cloudflare/vite-plugin` จัดการ build output เอง

## Troubleshooting

### `node:fs/promises does not provide an export named 'glob'`

Node.js เวอร์ชันต่ำกว่า 22 ใช้คำสั่ง:

```bash
nvm use 22
```

### Deploy แล้วหน้าขาว / 404

1. ตรวจสอบว่า `wrangler.json` ไม่มี `pages_build_output_dir`
2. ตรวจสอบว่ามี `"main": "./worker/index.ts"` และ `"assets"` config
3. ลอง build + deploy ใหม่:

```bash
nvm use 22 && cd apps/web && pnpm run deploy
```

### ดู Deployment History

```bash
cd apps/web && npx wrangler deployments list
```

### ดู Worker Logs (realtime)

```bash
cd apps/web && npx wrangler tail
```

## URL ของเว็บไซต์

| สภาพแวดล้อม | URL |
|-------------|-----|
| Production | https://masteracharavadee-web.smeandme.workers.dev |
| Local Dev | http://localhost:3000 |
