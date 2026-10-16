@echo off
title Uploading EduChamp Portal to GitHub
cd /d "C:\Users\25car\.gemini\antigravity\scratch\academic-portal"
echo ========================================================
echo    Uploading EduChamp Portal to GitHub...
echo    (If a GitHub Sign-In box appears, click "Sign in with your browser")
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
echo    DONE! Now go to https://dashboard.render.com
echo ========================================================
pause
