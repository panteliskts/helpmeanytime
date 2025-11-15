#!/bin/bash
# Cleanup script for HelpMeAnytime 2.0
# Removes unnecessary files from the project

echo "🧹 Cleaning up unnecessary files..."

# Remove old documentation files
echo "📋 Removing old documentation..."
rm -f BACKEND_TASKS.md
rm -f CHECKLIST.md  
rm -f CURRENT_STATUS.md
rm -f NEXT_STEPS.md
rm -f PLATFORM_ARCHITECTURE.md
rm -f PROGRESS_UPDATE.md
rm -f QUICK_START.md
rm -f SETUP_COMPLETE.md
rm -f STEP_2_COMPLETE.md
rm -f TESTING_GUIDE.md

# Remove old testing files
echo "🧪 Removing old test scripts..."
rm -f api-tester.html
rm -f cleanup.sh
rm -f RUN_ME.command
rm -f start.sh
rm -f test-all.sh
rm -f test-api.sh
rm -f test-interactive.sh
rm -f TEST_API.command
rm -f TEST_INTERACTIVE.command

# Remove unused components (after checking)
echo "🗂️ Cleaning up unused components..."
# rm -rf src/components/map/      # Uncomment if not using map
# rm -rf src/components/layout/   # Uncomment if not using layout components
# rm -rf src/app/map/            # Uncomment if not using map page
# rm -rf src/app/municipality/   # Uncomment if not implementing municipality dashboard

echo "✅ Cleanup complete!"
echo ""
echo "📦 Files remaining:"
echo "✅ DEMO_CREDENTIALS.md     - Login credentials for testing"
echo "✅ STEP_3_COMPLETE.md      - Latest progress summary"
echo "✅ README.md               - Project overview"  
echo "✅ package.json            - Dependencies"
echo "✅ All src/ files          - Core application"
echo ""
echo "🚀 Your project is now clean and ready for demo!"
