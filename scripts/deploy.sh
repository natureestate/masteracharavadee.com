#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "=== masteracharavadee.com Deploy Script ==="
echo "Project root: $PROJECT_ROOT"
echo ""

# สลับไปใช้ Node.js 22 (vinext ต้องการ glob จาก node:fs/promises)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  nvm use 22
else
  NODE_VERSION=$(node -v | cut -d'.' -f1 | tr -d 'v')
  if [ "$NODE_VERSION" -lt 22 ]; then
    echo "ERROR: Node.js 22+ required (current: $(node -v))"
    echo "Install nvm or upgrade Node.js manually."
    exit 1
  fi
fi

echo ""
echo "[1/3] Installing dependencies..."
cd "$PROJECT_ROOT"
pnpm install --frozen-lockfile 2>/dev/null || pnpm install

echo ""
echo "[2/3] Building..."
cd "$PROJECT_ROOT/apps/web"
pnpm run build

echo ""
echo "[3/3] Deploying to Cloudflare Workers..."
npx vinext deploy --skip-build

echo ""
echo "=== Deploy Complete ==="
echo "URL: https://masteracharavadee-web.smeandme.workers.dev"
