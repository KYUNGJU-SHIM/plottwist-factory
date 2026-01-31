const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, '../core-engine');
const gamesDir = path.join(__dirname, '../games');
const distDir = path.join(__dirname, '../dist');

// dist 폴더 생성/초기화
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
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// games 폴더의 모든 게임
const games = fs.readdirSync(gamesDir)
  .filter(f => {
    const fullPath = path.join(gamesDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

games.forEach(gameId => {
  const gameScriptPath = path.join(gamesDir, gameId, 'js', 'script.js');
  
  if (fs.existsSync(gameScriptPath)) {
    const outputDir = path.join(distDir, gameId);
    
    // 1. 템플릿 전체 복사
    copyDir(templateDir, outputDir);
    
    // 2. 게임별 script.js 덮어쓰기
    fs.copyFileSync(gameScriptPath, path.join(outputDir, 'js', 'script.js'));
    
    console.log(`✓ Built: ${gameId}`);
  }
});

console.log(`\n총 ${games.length}개 게임 빌드 완료`);