#!/bin/bash
set -e

echo "=== Step 1: Creating a fresh branch with no history ==="
git checkout --orphan temp_branch

echo "=== Step 2: Staging all current files ==="
git add -A

echo "=== Step 3: Committing ==="
git commit -m "initial commit (clean history)"

echo "=== Step 4: Deleting old main branch ==="
git branch -D main

echo "=== Step 5: Renaming temp branch to main ==="
git branch -m main

echo "=== Step 6: Cleaning up old objects ==="
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo "=== Step 7: Force pushing to GitHub ==="
git push -f origin main

echo "=== Done! Push succeeded ==="


