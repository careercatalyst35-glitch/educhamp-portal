const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

const WORK_DIR = __dirname;
const LINK_FILE = path.join(WORK_DIR, 'LIVE_PUBLIC_LINK.txt');
const TUNNEL_LOG = path.join(WORK_DIR, 'tunnel_pm2.log');

let serverChild = null;
let tunnelChild = null;

function checkLocalServer() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:8080', { timeout: 4000 }, (res) => {
      res.resume();
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

function isProcessRunning(imageName) {
  try {
    const out = execSync(`tasklist /FI "IMAGENAME eq ${imageName}" /NH`, { encoding: 'utf8' });
    return out.toLowerCase().includes(imageName.toLowerCase());
  } catch {
    return false;
  }
}

async function tick() {
  try {
    // 1. Ensure local Node server on port 8080 is up
    const isUp = await checkLocalServer();
    if (!isUp && !serverChild) {
      console.log('[Watchdog] Starting server.js on port 8080...');
      serverChild = spawn(process.execPath, [path.join(WORK_DIR, 'server.js')], {
        cwd: WORK_DIR,
        stdio: 'ignore',
        detached: true
      });
      serverChild.on('exit', () => {
        serverChild = null;
      });
      serverChild.unref();
    }

    // 2. Ensure cloudflared.exe tunnel is running
    const cfRunning = isProcessRunning('cloudflared.exe');
    if (!cfRunning && !tunnelChild) {
      console.log('[Watchdog] Starting cloudflared.exe tunnel...');
      try {
        if (fs.existsSync(TUNNEL_LOG)) fs.unlinkSync(TUNNEL_LOG);
      } catch {}

      tunnelChild = spawn(
        path.join(WORK_DIR, 'cloudflared.exe'),
        ['tunnel', '--url', 'http://localhost:8080', '--logfile', TUNNEL_LOG],
        {
          cwd: WORK_DIR,
          stdio: 'ignore',
          detached: true
        }
      );
      tunnelChild.on('exit', () => {
        tunnelChild = null;
      });
      tunnelChild.unref();

      // Poll log for new URL
      setTimeout(() => {
        try {
          if (fs.existsSync(TUNNEL_LOG)) {
            const log = fs.readFileSync(TUNNEL_LOG, 'utf8');
            const m = log.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
            if (m) {
              fs.writeFileSync(LINK_FILE, m[0], 'utf8');
              console.log('[Watchdog] Active Public Link updated:', m[0]);
            }
          }
        } catch {}
      }, 8000);
    }
  } catch (err) {
    console.error('[Watchdog] Error:', err.message);
  }
}

console.log('[Watchdog] 24/7 EduChamp Service started inside PM2.');
tick();
setInterval(tick, 10000);
