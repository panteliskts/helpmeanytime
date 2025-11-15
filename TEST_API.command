#!/bin/bash

# PolisPraxis API Testing Script
# Run this AFTER starting the server

echo "🧪 PolisPraxis API Testing"
echo "=========================="
echo ""

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "❌ Server is not running!"
    echo "📋 Please run RUN_ME.command first to start the server"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo "✅ Server is running!"
echo ""

echo "📊 Test 1: Fetching all pledges..."
echo "GET /api/pledges"
curl -s http://localhost:3000/api/pledges | json_pp || curl -s http://localhost:3000/api/pledges
echo ""
echo ""

echo "📊 Test 2: Fetching pledges for Project 1..."
echo "GET /api/pledges?projectId=1"
curl -s "http://localhost:3000/api/pledges?projectId=1" | json_pp || curl -s "http://localhost:3000/api/pledges?projectId=1"
echo ""
echo ""

echo "💰 Test 3: Creating a Money Pledge (€100)..."
echo "POST /api/pledges"
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":1,"type":"money","amount":100}' | json_pp || \
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":1,"type":"money","amount":100}'
echo ""
echo ""

echo "⏰ Test 4: Creating a Time Pledge (5 hours)..."
echo "POST /api/pledges"
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":2,"type":"time","hours":5}' | json_pp || \
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":2,"type":"time","hours":5}'
echo ""
echo ""

echo "🛠️  Test 5: Creating a Materials Pledge..."
echo "POST /api/pledges"
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":3,"type":"materials","description":"Paint and brushes"}' | json_pp || \
curl -s -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"user_id":3,"type":"materials","description":"Paint and brushes"}'
echo ""
echo ""

echo "📈 Test 6: Fetching Project Statistics..."
echo "GET /api/pledges/stats?projectId=1"
curl -s "http://localhost:3000/api/pledges/stats?projectId=1" | json_pp || curl -s "http://localhost:3000/api/pledges/stats?projectId=1"
echo ""
echo ""

echo "=========================="
echo "✅ All API tests completed!"
echo "=========================="
echo ""
echo "🌐 Open in browser:"
echo "   http://localhost:3000/test"
echo ""
read -p "Press Enter to exit..."
