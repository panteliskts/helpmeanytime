#!/bin/bash

# Cleanup Script - Remove Unnecessary Documentation Files
# Keep only: README.md, CHECKLIST.md, BACKEND_TASKS.md

cd "$(dirname "$0")"

echo "🧹 Cleaning up unnecessary documentation files..."
echo ""

# Files to delete
FILES_TO_DELETE=(
    "ONE_CLICK_GUIDE.md"
    "SIMPLE_START.md"
    "START_GUIDE.html"
    "STEP_BY_STEP_GUIDE.md"
    "TESTING.md"
    "QUICK_START.md"
    "SUMMARY.md"
    "API_DOCUMENTATION.md"
    "src/hooks/usePledges.README.md"
)

# Delete each file
for file in "${FILES_TO_DELETE[@]}"; do
    if [ -f "$file" ]; then
        rm -f "$file"
        echo "✅ Deleted: $file"
    else
        echo "⏭️  Skipped: $file (not found)"
    fi
done

echo ""
echo "🎉 Cleanup complete!"
echo ""
echo "📁 Remaining documentation files:"
ls -1 *.md 2>/dev/null || echo "No .md files"

echo ""
echo "✅ Kept essential files:"
echo "   - README.md (project overview)"
echo "   - BACKEND_TASKS.md (developer tasks)"
echo "   - CHECKLIST.md (progress tracking)"
