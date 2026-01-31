const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const templateDir = path.join(rootDir, 'core-engine');
const gamesDir = path.join(rootDir, 'games');
const distDir = path.join(rootDir, 'dist');

// 1. dist 폴더 초기화
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 폴더 복사 함수
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

// 2. 루트의 index.html을 dist로 복사 (메인 페이지)
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
}

// 3. 게임 빌드 및 메타데이터 수집
const gameFolders = fs.readdirSync(gamesDir).filter(f => fs.statSync(path.join(gamesDir, f)).isDirectory());
const gameMetadataList = [];

gameFolders.forEach(gameId => {
  const gamePath = path.join(gamesDir, gameId);
  const gameScriptPath = path.join(gamePath, 'js', 'script.js');
  const metaPath = path.join(gamePath, 'game-meta.json'); // 메타데이터 경로
  
  if (fs.existsSync(gameScriptPath)) {
    const outputDir = path.join(distDir, gameId);
    
    // 템플릿 복사 및 스크립트 주입
    copyDir(templateDir, outputDir);
    fs.copyFileSync(gameScriptPath, path.join(outputDir, 'js', 'script.js'));
    
    // 메타데이터 수집
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      gameMetadataList.push({
        ...meta,
        id: gameId,
        path: `./${gameId}/index.html` // dist 기준 상대 경로
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