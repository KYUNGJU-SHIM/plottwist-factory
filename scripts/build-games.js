const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const templateDir = path.join(rootDir, 'core-engine');
const gamesDir = path.join(rootDir, 'games');
const distDir = path.join(rootDir, 'dist');
const sharedAssetsDir = path.join(rootDir, 'shared-assets');

// 1. dist 폴더 초기화
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 폴더 복사 함수
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. 메인 index.html 복사
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
}

// 3. 게임 빌드
const gameFolders = fs.readdirSync(gamesDir).filter(f => fs.statSync(path.join(gamesDir, f)).isDirectory());
const gameMetadataList = [];

gameFolders.forEach(gameId => {
  const gamePath = path.join(gamesDir, gameId);
  const gameScriptPath = path.join(gamePath, 'js', 'script.js');
  
  if (fs.existsSync(gameScriptPath)) {
    const outputDir = path.join(distDir, gameId);
    const destAssetsDir = path.join(outputDir, 'assets');
    
    // A. 엔진 템플릿 복사
    copyDir(templateDir, outputDir);

    // B. shared-assets 복사 (엔진 표준 폴더명으로 매핑)
    if (fs.existsSync(sharedAssetsDir)) {
      const entries = fs.readdirSync(sharedAssetsDir);
      entries.forEach(entry => {
        const srcPath = path.join(sharedAssetsDir, entry);
        
        // 💡 핵심: shared-assets/audio/bgm -> assets/music/bgm 구조로 변환
        let targetFolderName = entry;
        if (entry === 'audio') targetFolderName = 'music';
        
        const destPath = path.join(destAssetsDir, targetFolderName);
        copyDir(srcPath, destPath);
      });
    }

    // C. 게임별 script.js 주입
    fs.copyFileSync(gameScriptPath, path.join(outputDir, 'js', 'script.js'));
    
    // D. 메타데이터 수집
    const metaPath = path.join(gamePath, 'game-meta.json');
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      gameMetadataList.push({ ...meta, id: gameId, path: `./${gameId}/index.html` });
    }
    
    console.log(`✓ Built: ${gameId}`);
  }
});

fs.writeFileSync(path.join(distDir, 'all-games.json'), JSON.stringify(gameMetadataList, null, 2));