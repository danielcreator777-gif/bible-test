# ══════════════════════════════════════════
# 聖言寶庫 — GitHub Pages 部署腳本
# 使用方式：把 YOUR_USERNAME 改成你的 GitHub 用戶名後執行
# ══════════════════════════════════════════

$USERNAME = "YOUR_USERNAME"   # <-- 改成你的 GitHub 用戶名
$REPO     = "bible-verse-game"
$REMOTE   = "https://github.com/$USERNAME/$REPO.git"

$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")

Set-Location "c:\Users\daniel-huang\.gemini\antigravity\scratch\BibleVerseGame"

Write-Host "🏰 聖言寶庫部署中..." -ForegroundColor Yellow

# 設定遠端
git remote add origin $REMOTE 2>$null
git remote set-url origin $REMOTE

# 推送到 main branch
git branch -M main
git push -u origin main

Write-Host "`n✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 網頁網址：https://$USERNAME.github.io/$REPO" -ForegroundColor Cyan
Write-Host "`n請到 GitHub repo 的 Settings > Pages > Source 選擇 'main' branch 啟用 GitHub Pages" -ForegroundColor Yellow
