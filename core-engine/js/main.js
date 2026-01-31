/**
 * PlotTwist-Factory Core Engine
 * 모든 게임 폴더에서 이 스크립트를 참조하여 실행합니다.
 */

// Monogatari v2 기본 설정
const { monogatari } = window;

// 엔진 설정 (원하는 대로 커스터마이징 가능)
monogatari.settings({
	'Name': 'Mystery Game',
	'Label': 'Start',
});

// 자산 경로 설정 (필요시)
monogatari.assets({
	'scenes': {},
	'characters': {},
});

// 엔진 실행
monogatari.init('#game-screen');