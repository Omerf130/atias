@echo off
cd /d C:\Users\ofacl\OneDrive\913C~1\atias\a-a

echo === Step 1: Removing video1.mp4 from history ===
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch src/assets/video/video1.mp4" --prune-empty -- --all

echo === Step 2: Removing old large video.mp4 from history ===
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch src/assets/video/video.mp4" --prune-empty -- --all

echo === Step 3: Re-adding current video.mp4 ===
git add src/assets/video/video.mp4
git commit -m "re-add video.mp4 (smaller version)"

echo === Step 4: Cleaning up refs and garbage collecting ===
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo === Done! Now run: git push -u origin main --force ===

