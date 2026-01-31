
import { Monogatari } from '@monogatari/core';

// Monogatari 인스턴스를 전역으로 노출
window.monogatari = Monogatari;

// 기본 설정
Monogatari.settings({
  // 게임 이름 (세이브 데이터 키)
  'Name': 'MysteryVN',
  
  // 버전
  'Version': '1.0.0',
  
  // 자동 저장
  'AutoSave': 0,
  
  // 빠른 진행 허용
  'Skip': 0,
  
  // 선택지 기록
  'ChoiceHistory': true,
  
  // 씬 기록
  'SceneHistory': true,
  
  // 텍스트 속도 (ms)
  'TypeAnimation': true,
  'TypeAnimationSpeed': 30,
  
  // 음성 설정
  'NVL': false,
  
  // 로그 기능
  'ShowLog': true,
  
  // 기본 표시
  'ShowMainScreenBackButton': true,
  
  // 언어 설정
  'Language': 'Korean',
  'MultiLanguage': false
});

// 액션 초기화
Monogatari.action('message').messages({
  'help': {
    title: '도움말',
    content: `
      <p><strong>게임 조작법</strong></p>
      <ul>
        <li>클릭/탭: 다음 대사로 진행</li>
        <li>ESC: 메뉴 열기</li>
        <li>Space: 다음 대사로 진행</li>
        <li>H: 텍스트 박스 숨기기/보이기</li>
        <li>S: 빠른 저장</li>
        <li>L: 빠른 로드</li>
      </ul>
    `
  }
});

// 게임별 스크립트 로드
import './script.js';

// 초기화
Monogatari.init('#monogatari').then(() => {
  console.log('Monogatari initialized');
});