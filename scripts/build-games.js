const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GAMES_DIR = './games';
const TEMPLATE_DIR = './games/_template';
const DIST_DIR = './dist';

// dist 폴더 초기화
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 게임 폴더 목록 (_, . 으로 시작하는 폴더 제외)
const games = fs.readdirSync(GAMES_DIR)
  .filter(f => {
    const fullPath = path.join(GAMES_DIR, f);
    return !f.startsWith('_') && 
           !f.startsWith('.') && 
           fs.statSync(fullPath).isDirectory();
  });

console.log(`Found ${games.length} games to build: ${games.join(', ')}`);

// 각 게임 빌드
for (const game of games) {
  console.log(`\n========== Building: ${game} ==========`);
  
  const gameSrcDir = path.join(GAMES_DIR, game);
  const gameDistDir = path.join(DIST_DIR, game);
  
  // 1. 템플릿 복사
  console.log('1. Copying template...');
  copyDir(TEMPLATE_DIR, gameDistDir);
  
  // 2. 게임별 script.js 덮어쓰기
  console.log('2. Copying game script...');
  const scriptSrc = path.join(gameSrcDir, 'js', 'script.js');
  const scriptDest = path.join(gameDistDir, 'js', 'script.js');
  
  if (fs.existsSync(scriptSrc)) {
    fs.mkdirSync(path.dirname(scriptDest), { recursive: true });
    fs.copyFileSync(scriptSrc, scriptDest);
  } else {
    console.warn(`  Warning: ${scriptSrc} not found!`);
  }
  
  // 3. 게임별 data 폴더 복사 (있으면)
  const dataSrc = path.join(gameSrcDir, 'data');
  const dataDest = path.join(gameDistDir, 'data');
  if (fs.existsSync(dataSrc)) {
    console.log('3. Copying game data...');
    copyDir(dataSrc, dataDest);
  }
  
  // 4. npm install && npm run build
  console.log('4. Installing dependencies...');
  try {
    execSync('npm install', { 
      cwd: gameDistDir, 
      stdio: 'inherit' 
    });
    
    console.log('5. Building...');
    execSync('npm run build', { 
      cwd: gameDistDir, 
      stdio: 'inherit' 
    });

        // npm run build 후 추가
		console.log('6. Moving build output...');
		const buildDir = path.join(gameDistDir, 'dist');
		if (fs.existsSync(buildDir)) {
		  // dist/* 내용을 게임 폴더로 이동
		  const buildFiles = fs.readdirSync(buildDir);
		  for (const file of buildFiles) {
		    const src = path.join(buildDir, file);
		    const dest = path.join(gameDistDir, file);
		    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true });
		    fs.renameSync(src, dest);
		  }
		  fs.rmSync(buildDir, { recursive: true });
		}
    
    console.log(`✓ ${game} built successfully!`);
  } catch (error) {
    console.error(`✗ Failed to build ${game}:`, error.message);
  }
}

// 인덱스 페이지 생성 (게임 목록)
console.log('\n========== Creating index page ==========');
createIndexPage(games);

console.log(`\n✓ Build complete! ${games.length} games processed.`);

// ========== 유틸 함수 ==========

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // node_modules 제외
    if (entry.name === 'node_modules') continue;
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function createIndexPage(games) {
  // 각 게임의 메타데이터 수집
  const gameList = games.map(game => {
    const metaPath = path.join(GAMES_DIR, game, 'game-meta.json');
    let meta = { id: game, title: game };
    
    if (fs.existsSync(metaPath)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
      } catch (e) {
        console.warn(`  Warning: Could not parse ${metaPath}`);
      }
    }
    
    return meta;
  });
  
  const indexHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mystery Visual Novel Games</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      min-height: 100vh;
      color: #fff;
      padding: 40px 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    .games {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .game-card {
      background: rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 24px;
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
      color: inherit;
      display: block;
    }
    .game-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      background: rgba(255,255,255,0.15);
    }
    .game-card h2 {
      margin-bottom: 12px;
      font-size: 1.4rem;
    }
    .game-card p {
      opacity: 0.8;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .game-meta {
      margin-top: 16px;
      font-size: 0.85rem;
      opacity: 0.6;
    }
  </style>
</head>
<body>
  <h1>🔍 Mystery Visual Novel Games</h1>
  <div class="games">
    ${gameList.map(game => `
    <a href="./${game.id}/" class="game-card">
      <h2>${game.title || game.id}</h2>
      <p>${game.description || '추리 비주얼 노벨 게임'}</p>
      <div class="game-meta">
        ${game.characterCount ? `👥 ${game.characterCount}명` : ''}
        ${game.endingCount ? ` · 🎭 ${game.endingCount}개 엔딩` : ''}
      </div>
    </a>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), indexHtml);
  console.log('✓ Index page created');
}