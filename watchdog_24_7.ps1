$WorkDir = "C:\Users\25car\.gemini\antigravity\scratch\academic-portal"
Set-Location $WorkDir
$LinkFile = Join-Path $WorkDir "LIVE_PUBLIC_LINK.txt"
$TunnelLog = Join-Path $WorkDir "tunnel_watchdog.log"

# Save initial known active link if not present
if (-not (Test-Path $LinkFile)) {
    "https://returning-mine-boxes-boxes.trycloudflare.com" | Set-Content $LinkFile
}

while ($true) {
    try {
        # 1. Check if local Node server on port 8080 is responding
        $localOk = $false
        try {
            $resp = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing -TimeoutSec 4 -ErrorAction Stop
            if ($resp.StatusCode -eq 200) { $localOk = $true }
        } catch {
            $localOk = $false
        }

        if (-not $localOk) {
            Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $WorkDir -WindowStyle Hidden
            Start-Sleep -Seconds 3
        }

        # 2. Check if cloudflared.exe is running and current public URL is reachable
        $cfProc = Get-Process -Name "cloudflared" -ErrorAction SilentlyContinue
        $publicOk = $false
        if ($cfProc -and (Test-Path $LinkFile)) {
            $currentUrl = (Get-Content $LinkFile -Raw).Trim()
            if ($currentUrl -match "^https://") {
                try {
                    $pResp = Invoke-WebRequest -Uri $currentUrl -UseBasicParsing -TimeoutSec 6 -ErrorAction Stop
                    if ($pResp.StatusCode -eq 200) { $publicOk = $true }
                } catch {
                    $publicOk = $false
                }
            }
        }

        if (-not $publicOk) {
            if ($cfProc) {
                Stop-Process -Name "cloudflared" -Force -ErrorAction SilentlyContinue
                Start-Sleep -Seconds 2
            }
            if (Test-Path $TunnelLog) { Remove-Item $TunnelLog -Force -ErrorAction SilentlyContinue }
            Start-Process -FilePath (Join-Path $WorkDir "cloudflared.exe") -ArgumentList "tunnel --url http://localhost:8080 --logfile `"$TunnelLog`"" -WorkingDirectory $WorkDir -WindowStyle Hidden
            
            # Wait up to 15 seconds to extract the new trycloudflare URL
            for ($i = 0; $i -lt 15; $i++) {
                Start-Sleep -Seconds 1
                if (Test-Path $TunnelLog) {
                    $logContent = Get-Content $TunnelLog -Raw -ErrorAction SilentlyContinue
                    if ($logContent -match "(https://[a-zA-Z0-9-]+\.trycloudflare\.com)") {
                        $Matches[1] | Set-Content $LinkFile
                        break
                    }
                }
            }
        }
    } catch {
        # Ignore transient errors and keep loop alive
    }

    Start-Sleep -Seconds 20
}
