#!/bin/bash

# PolisPraxis - Quick Test Script
# Run this to test the backend API

echo "🚀 PolisPraxis Backend Testing"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if server is running
echo "📡 Checking if server is running..."
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Server is running!${NC}"
else
    echo -e "${RED}❌ Server is NOT running!${NC}"
    echo ""
    echo "Please run in another terminal:"
    echo "  npm run dev"
    echo ""
    exit 1
fi

echo ""
echo "================================"
echo "🧪 Testing Pledges API"
echo "================================"
echo ""

# Test 1: GET pledges stats
echo -e "${BLUE}Test 1: GET /api/pledges/stats?projectId=1${NC}"
echo "Expected: Stats with totals and progress"
echo ""
curl -s http://localhost:3000/api/pledges/stats?projectId=1 | jq '.'
echo ""

# Test 2: GET pledges
echo -e "${BLUE}Test 2: GET /api/pledges?projectId=1${NC}"
echo "Expected: List of pledges for project 1"
echo ""
curl -s http://localhost:3000/api/pledges?projectId=1 | jq '.'
echo ""

# Test 3: POST new pledge (money)
echo -e "${BLUE}Test 3: POST /api/pledges (Money pledge)${NC}"
echo "Expected: Success message with new pledge"
echo ""
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "1",
    "type": "money",
    "amount": 100,
    "description": "Test money pledge"
  }' | jq '.'
echo ""

# Test 4: POST new pledge (time)
echo -e "${BLUE}Test 4: POST /api/pledges (Time pledge)${NC}"
echo "Expected: Success message with new pledge"
echo ""
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "1",
    "type": "time",
    "hours": 5,
    "description": "Test time pledge"
  }' | jq '.'
echo ""

# Test 5: POST new pledge (materials)
echo -e "${BLUE}Test 5: POST /api/pledges (Materials pledge)${NC}"
echo "Expected: Success message with new pledge"
echo ""
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "1",
    "type": "materials",
    "materials": "Paint and brushes",
    "description": "Test materials pledge"
  }' | jq '.'
echo ""

# Test 6: GET stats again (should show increased numbers)
echo -e "${BLUE}Test 6: GET /api/pledges/stats?projectId=1 (After new pledges)${NC}"
echo "Expected: Updated stats with higher numbers"
echo ""
curl -s http://localhost:3000/api/pledges/stats?projectId=1 | jq '.'
echo ""

echo "================================"
echo -e "${GREEN}✅ All tests completed!${NC}"
echo "================================"
echo ""
echo "💡 Tips:"
echo "  - Check the console logs in your terminal running 'npm run dev'"
echo "  - Open http://localhost:3000 in your browser"
echo "  - Check browser console for any errors"
echo ""
