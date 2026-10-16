@echo off
title Academic Registry Portal + Cloudflare Live Tunnel
echo ========================================================
echo    Starting Academic Registry Portal & Public Live Tunnel
echo ========================================================
echo.

:: 1. Start local server in background if not already running
tasklist /FI "IMAGENAME eq node.exe" 2>NUL | find /I /N "node.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo [✓] Node server is already running.
) else (
    echo [i] Starting Node server...
    start /B node server.js
    timeout /t 3 /nobreak >nul
)

:: 2. Start Cloudflare Tunnel
echo [i] Starting Cloudflare Public Tunnel...
echo.
.\cloudflared.exe tunnel --url http://localhost:8080

pause
