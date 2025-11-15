#!/bin/bash

echo "🚀 Starting PolisPraxis Development Server..."
echo ""
echo "📋 What will happen:"
echo "  1. Install dependencies (if needed)"
echo "  2. Start Next.js dev server"
echo "  3. Open browser at http://localhost:3000/test"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting server..."
echo ""
echo "✅ Once server starts, open:"
echo "   👉 http://localhost:3000/test"
echo ""
echo "💡 Tips:"
echo "  - Create pledges and watch stats update!"
echo "  - Check terminal for logs"
echo "  - Press Ctrl+C to stop"
echo ""

npm run dev
