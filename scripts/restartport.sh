#!/bin/bash
# Kill process ที่ค้างบน port ที่ระบุ แล้ว restart dev server
PORT=${1:-3100}

echo "🔄 กำลัง kill process บน port $PORT..."
PID=$(lsof -ti:$PORT 2>/dev/null)

if [ -n "$PID" ]; then
  kill -9 $PID 2>/dev/null
  sleep 1
  echo "✅ kill process $PID สำเร็จ"
else
  echo "ℹ️  ไม่มี process บน port $PORT"
fi

echo "🚀 กำลังเปิด dev server..."
cd "$(dirname "$0")/.."
pnpm dev:web
