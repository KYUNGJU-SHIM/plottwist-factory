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

// 2. 루트의 index.html을 dist로 복사 (메인 허브 페이지)
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
}

// 3. 게임 빌드 및 메타데이터 수집
const gameFolders = fs.readdirSync(gamesDir).filter(f => {
  const fullPath = path.join(gamesDir, f);
  return fs.statSync(fullPath).isDirectory();
});

const gameMetadataList = [];

gameFolders.forEach(gameId => {
  const gamePath = path.join(gamesDir, gameId);
  const gameScriptPath = path.join(gamePath, 'js', 'script.js');
  const metaPath = path.join(gamePath, 'game-meta.json');
  
  if (fs.existsSync(gameScriptPath)) {
    const outputDir = path.join(distDir, gameId);
    const destAssetsDir = path.join(outputDir, 'assets');
    
    // A. 템플릿(엔진) 복사
    copyDir(templateDir, outputDir);

    // B. shared-assets 복사 (중첩 방지를 위해 내용물만 복사)
    if (fs.existsSync(sharedAssetsDir)) {
      if (!fs.existsSync(destAssetsDir)) {
        fs.mkdirSync(destAssetsDir, { recursive: true });
      }
    
      const entries = fs.readdirSync(sharedAssetsDir);
      for (const entry of entries) {
        const srcPath = path.join(sharedAssetsDir, entry);
        const destPath = path.join(destAssetsDir, entry);
        
        if (fs.lstatSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    // C. 개별 게임 script.js 덮어쓰기
    // 엔진의 js 폴더가 이미 복사되어 있으므로 그 안의 script.js를 교체합니다.
    const targetScriptPath = path.join(outputDir, 'js', 'script.js');
    fs.copyFileSync(gameScriptPath, targetScriptPath);
    
    // D. 메타데이터 수집
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      gameMetadataList.push({
        ...meta,
        id: gameId,
        path: `./${gameId}/index.html` 
      });
    }
    
    console.log(`✓ Built: ${gameId}`);
  }
});

// 4. 수집된 메타데이터를 dist/all-games.json으로 저장
fs.writeFileSync(
  path.join(distDir, 'all-games.json'), 
  JSON.stringify(gameMetadataList, null, 2)
);

console.log(`\n총 ${gameMetadataList.length}개 게임 빌드 및 메타데이터 생성 완료`);