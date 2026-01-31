// Monogatari를 esm.sh CDN에서 로드
import Monogatari from 'https://esm.sh/@monogatari/core@2.0.2';

// 전역으로 노출 (script.js에서 사용)
window.Monogatari = Monogatari;

// 기본 설정
Monogatari.settings({
  'Name': 'MysteryVN',
  'Version': '1.0.0',
  'AutoSave': 0,
  'Skip': 0,
  'ChoiceHistory': true,
  'SceneHistory': true,
  'TypeAnimation': true,
  'TypeAnimationSpeed': 30,
  'NVL': false,
  'ShowLog': true,
  'ShowMainScreenBackButton': true,
  'Language': 'Korean',
  'MultiLanguage': false
});

// 도움말 메시지
Monogatari.action('message').messages({
  'help': {
    title: '도움말',
    content: `
      <p><strong>게임 조작법</strong></p>
      <ul>
        <li>클릭/탭: 다음 대사</li>
        <li>ESC: 메뉴</li>
        <li>Space: 다음 대사</li>
        <li>H: 텍스트 숨기기</li>
        <li>S: 빠른 저장</li>
        <li>L: 빠른 로드</li>
      </ul>
    `
  }
});

// 게임 스크립트 로드 후 초기화
import('./script.js').then(() => {
  console.log('Game script loaded');
  Monogatari.init('#monogatari').then(() => {
    console.log('Monogatari initialized');
  });
}).catch(err => {
  console.error('Failed to load game script:', err);
});
