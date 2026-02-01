'use strict';

// ========================================
// Storage 초기화
// ========================================
monogatari.storage({
    "clue_count": 0,
    "st_found_body": false,
    "vs_captain_room": false,
    "vs_engine_room": false,
    "vs_casino": false,
    "vs_deck": false,
    "vs_dining_hall": false,
    "correct_culprit": false,
    "correct_trick": false,
    "correct_motive": false,
    // 증거 플래그
    "ev_oily_footprint": false,
    "ev_logbook": false,
    "ev_blackmail_note": false,
    "ev_hidden_recorder": false
});

// ========================================
// 캐릭터 및 에셋 정의
// ========================================
monogatari.characters({
    "char_protagonist": { "name": "김지운", "color": "#E0E0E0" },
    "char_culprit": { "name": "윤서진", "color": "#A0C4FF" },
    "char_suspect1": { "name": "박선우", "color": "#FFADAD" },
    "char_suspect2": { "name": "최유리", "color": "#FFD6A5" },
    "char_suspect3": { "name": "이정훈", "color": "#FDFFB6" },
    "char_victim": { "name": "강태준", "color": "#BDB2FF" }
});

monogatari.assets('scenes', {
    "bg_captain_room": "#192A56",
    "bg_engine_room": "#2F3640",
    "bg_casino": "#8C2A3C",
    "bg_deck": "#2C3E50",
    "bg_dining_hall": "#4A4A4A"
});

monogatari.assets('music', {
    'main_bgm': 'bgm/dreamy-flashback.mp3'
});

// 유틸리티 함수: 단서 추가 시 카운트 증가
const addClue = (flagName) => {
    const s = monogatari.storage();
    if (!s[flagName]) {
        s[flagName] = true;
        s.clue_count++;
        monogatari.storage(s);
    }
};

// ========================================
// 스크립트 시작
// ========================================
monogatari.script({
    'Start': [
        "play music main_bgm with loop",
        'jump scene_prologue_01',
    ],

    'scene_prologue_01': [
        'show scene bg_dining_hall',
        '북태평양을 가로지르는 호화 크루즈 \'오리온호\'. 나는 차기작 구상을 위해 이 배에 올랐다.',
        '하지만 망망대해 위에서의 낭만도 잠시, 거대한 태풍이 오리온호를 집어삼키려 하고 있었다.',
        'char_victim 최유리 씨, 이런 날은 둘이서 와인이나 한잔하면 좋지 않겠어? 내 방에 아주 좋은 게 있는데.',
        'char_suspect2 관심 없어요, 선장님. 배나 제대로 신경 쓰시죠.',
        '가수 최유리는 혐오감이 가득한 얼굴로 선장을 쏘아붙이고는 자리를 떠났다. 선장의 평판은 그리 좋아 보이지 않았다.',
        'jump scene_prologue_02',
    ],

    'scene_prologue_02': [
        'show scene bg_deck',
        '바람을 쐬러 나온 갑판은 이미 거친 비바람이 몰아치고 있었다.',
        'char_suspect3 이런, 폭풍이 생각보다 더 거세군요. 이런 날은 잠들기도 쉽지 않겠어요.',
        '온화한 인상의 노신사, 이정훈 씨가 내게 말을 걸어왔다. 그때, 선장실 쪽에서 고성이 터져 나왔다.',
        'char_suspect1 이건 약속이랑 다르잖소! 당장 내 물건부터 처리해 줘요!',
        'char_victim 시끄럽소, 박 사장. 이 배에선 내가 왕이야. 돈을 더 가져오든가, 아니면 조용히 하든가.',
        '사업가 박선우가 핏발 선 눈으로 선장을 노려보고 있었다. 두 사람 사이에도 심상치 않은 기류가 흘렀다.',
        'jump scene_prologue_03',
    ],

    'scene_prologue_03': [
        'show scene bg_deck',
        '박선우가 분을 삭이지 못하고 떠난 뒤, 1등 항해사 윤서진이 선장에게 다가갔다.',
        'char_culprit 선장님, 태풍 대비 보고 드립니다. 기관실 비상 설비 점검이 필요할 것 같습니다.',
        'char_victim 알아서 해. 쯧, 자네 아비처럼 무능하게 배나 가라앉히지 말고.',
        '선장의 모욕적인 말에, 윤서진 항해사의 표정이 순간 얼어붙었다. 그녀는 아무 말 없이 고개를 숙이고 자리를 떠났다.',
        '폭풍우가 몰아치는 배 안에서, 저마다의 갈등이 파도처럼 일렁이고 있었다. 그리고 이것이 내가 선장을 본 마지막 모습이었다.',
        'jump scene_incident_01',
    ],

    'scene_incident_01': [
        'show scene bg_dining_hall',
        '다음 날 아침, 배는 여전히 폭풍의 영향권 안에 있었다. 승객들은 불안감 속에서 식당에 모여들었다.',
        'char_suspect1 선장은 어디 있는 거야? 배가 이 모양인데 코빼기도 안 보이다니!',
        'char_culprit 선장님께서 응답이 없으십니다. 계속 호출하고 있지만...',
        '그때, 한 승무원이 새파랗게 질린 얼굴로 식당에 뛰어 들어왔다.',
        'char_culprit 무슨 일이지?',
        '"서... 선장실 문이 열려 있는데... 피가..."',
        'jump scene_incident_02',
    ],

    'scene_incident_02': [
        'show scene bg_captain_room',
        function() { monogatari.storage({ st_found_body: true }); },
        '강태준 선장은 자신의 방, 그 화려한 집무용 책상에 쓰러져 있었다. 가슴에는 날카로운 흉기가 남긴 단 하나의 자상이 선명했다.',
        'char_protagonist (사망 추정 시각은 어젯밤... 태풍이 가장 심할 때로군.)',
        'char_culprit 외부와의 통신은 두절 상태입니다. 구조 신호도 보낼 수 없습니다. 이 배 안의 누군가가... 범인입니다.',
        '고립된 크루즈, 폭풍 속의 살인. 원치 않았지만, 나의 추리가 시작되어야만 했다.',
        'jump scene_investigation_hub_1',
    ],

    // ========================================
    // 수사 허브 (선택지 수정 핵심)
    // ========================================
    'scene_investigation_hub_1': [
        'show scene bg_dining_hall',
        '1차 수사를 시작한다. 어디를 먼저 조사할까?',
        {
            'Choice': {
                'Room': {
                    'Text': '사건 현장인 [선장실]을 조사한다.',
                    'Condition': () => !monogatari.storage().vs_captain_room,
                    'Do': 'jump scene_investigate_captain_room_1'
                },
                'Engine': {
                    'Text': '알리바이를 주장하는 [기관실]을 조사한다.',
                    'Condition': () => !monogatari.storage().vs_engine_room,
                    'Do': 'jump scene_investigate_engine_room_1'
                },
                'Casino': {
                    'Text': '박선우가 있었다는 [카지노]를 조사한다.',
                    'Condition': () => !monogatari.storage().vs_casino,
                    'Do': 'jump scene_investigate_casino_1'
                },
                'Deck': {
                    'Text': '목격자를 찾으러 [갑판]으로 가본다.',
                    'Condition': () => !monogatari.storage().vs_deck,
                    'Do': 'jump scene_investigate_deck_1'
                },
                'Dining': {
                    'Text': '다른 용의자들이 있는 [식당]으로 가본다.',
                    'Condition': () => !monogatari.storage().vs_dining_hall,
                    'Do': 'jump scene_investigate_dining_hall_1'
                }
            }
        }
    ],

    'scene_investigate_captain_room_1': [
        'show scene bg_captain_room',
        function() { 
            monogatari.storage({ vs_captain_room: true });
            addClue('ev_blackmail_note');
            addClue('ev_oily_footprint');
        },
        '선장실은 여전히 어지럽다. 시신은 옮겨졌지만 비릿한 냄새는 가시지 않았다.',
        '쓰레기통에서 찢어진 종이 조각을 발견했다. \'밀수... 약속한 금액을 당장...\' (단서 획득)',
        '그리고 문 앞 카펫에서 기관실 윤활유와 비슷한 기름 발자국을 발견했다. (단서 획득)',
        'jump scene_investigation_hub_2',
    ],

    'scene_investigate_engine_room_1': [
        'show scene bg_engine_room',
        function() { 
            monogatari.storage({ vs_engine_room: true });
            addClue('ev_logbook');
        },
        '윤서진 항해사가 묵묵히 계기판을 살피고 있었다. 그녀가 내민 일지에는 23:00 정각 기록이 있었다.',
        'char_protagonist (이 잉크... 나중에 급하게 써넣은 것처럼 미묘하게 다르다. 단서 획득)',
        'jump scene_investigation_hub_2',
    ],

    'scene_investigate_casino_1': [
        'show scene bg_casino',
        function() { monogatari.storage({ vs_casino: true }); },
        '박선우가 초조하게 손톱을 물어뜯고 있다. 딜러는 그의 알리바이를 증언했다.',
        'char_protagonist (알리바이는 확실해 보이지만, 선장과 금전 문제가 있었던 건 분명하다.)',
        'jump scene_investigation_hub_2',
    ],

    'scene_investigate_deck_1': [
        'show scene bg_deck',
        function() { monogatari.storage({ vs_deck: true }); },
        '이정훈 씨가 23시 직전, 승무원 복장의 인물이 비상 통로 창고로 사라지는 걸 봤다고 증언했다.',
        'char_protagonist (체격이 그리 크지 않은 승무원... 중요한 정보다.)',
        'jump scene_investigation_hub_2',
    ],

    'scene_investigate_dining_hall_1': [
        'show scene bg_dining_hall',
        function() { 
            monogatari.storage({ vs_dining_hall: true });
            addClue('ev_hidden_recorder');
        },
        '최유리는 선장의 성희롱을 증언하며 소형 녹음기를 보여주었다. (단서 획득)',
        'char_protagonist (강력한 살해 동기가 확인되었다.)',
        'jump scene_investigation_hub_2',
    ],

    'scene_investigation_hub_2': [
        '2차 수사를 시작한다. 남은 장소 중 어디를 조사할까?',
        {
            'Choice': {
                'Room': {
                    'Text': '[선장실] 조사',
                    'Condition': () => !monogatari.storage().vs_captain_room,
                    'Do': 'jump scene_investigate_captain_room_1'
                },
                'Engine': {
                    'Text': '[기관실] 조사',
                    'Condition': () => !monogatari.storage().vs_engine_room,
                    'Do': 'jump scene_investigate_engine_room_1'
                },
                'Casino': {
                    'Text': '[카지노] 조사',
                    'Condition': () => !monogatari.storage().vs_casino,
                    'Do': 'jump scene_investigate_casino_1'
                },
                'Deck': {
                    'Text': '[갑판] 조사',
                    'Condition': () => !monogatari.storage().vs_deck,
                    'Do': 'jump scene_investigate_deck_1'
                },
                'Dining': {
                    'Text': '[식당] 조사',
                    'Condition': () => !monogatari.storage().vs_dining_hall,
                    'Do': 'jump scene_investigate_dining_hall_1'
                },
                'End': {
                    'Text': '충분하다. 수사를 종료한다.',
                    'Do': 'jump scene_investigation_end'
                }
            }
        }
    ],

    'scene_investigation_end': [
        'show scene bg_dining_hall',
        '모든 수사가 끝났다. 나는 생존자 전원을 라운지로 모이게 했다.',
        'char_protagonist 지금부터... 제가 알아낸 진실을 말씀드리겠습니다.',
        function() {
            const s = monogatari.storage();
            if (s.clue_count >= 3) {
                return '(단서는 충분히 모였다. 범인을 지목할 수 있을 것 같다.)';
            } else {
                return '(단서가 부족하지만 어떻게든 추리를 완성해야 한다.)';
            }
        },
        'jump scene_deduction_start',
    ],

    // ========================================
    // 추리 파트
    // ========================================
    'scene_deduction_start': [
        'show scene #2d2d44',
        '이제 범인을 지목할 시간이다...',
        'jump _deduction_q_culprit',
    ],

    '_deduction_q_culprit': [
        '"강태준 선장을 살해한 범인은 누구입니까?"',
        {
            'Choice': {
                'Park': { 'Text': '박선우', 'Do': 'jump _deduction_q_culprit_wrong' },
                'Choi': { 'Text': '최유리', 'Do': 'jump _deduction_q_culprit_wrong' },
                'Yoon': { 'Text': '윤서진', 'Do': 'jump _deduction_q_culprit_correct' }
            }
        }
    ],

    '_deduction_q_culprit_wrong': [
        '아닙니다. 그 사람에겐 확실한 알리바이가 있습니다.',
        'jump _deduction_q_trick',
    ],

    '_deduction_q_culprit_correct': [
        '맞습니다. 범인은 바로 1등 항해사, 윤서진 씨입니다.',
        function() { monogatari.storage({ correct_culprit: true }); },
        'jump _deduction_q_trick',
    ],

    '_deduction_q_trick': [
        '"범인은 어떻게 알리바이를 만들었습니까?"',
        {
            'Choice': {
                'Option1': { 'Text': '카지노 손님 매수', 'Do': 'jump _deduction_q_trick_wrong' },
                'Option2': { 'Text': '승무원 전용 통로 이용 및 일지 조작', 'Do': 'jump _deduction_q_trick_correct' }
            }
        }
    ],

    '_deduction_q_trick_wrong': [ '아닙니다. 그것은 트릭이 아닙니다.', 'jump _deduction_q_motive' ],
    '_deduction_q_trick_correct': [ 
        '정확합니다. 기관실 소음을 틈타 비상 통로로 이동한 뒤 일지를 조작했죠.', 
        function() { monogatari.storage({ correct_trick: true }); },
        'jump _deduction_q_motive' 
    ],

    '_deduction_q_motive': [
        '"범인의 진짜 범행 동기는 무엇입니까?"',
        {
            'Choice': {
                'Motive1': { 'Text': '성희롱 복수', 'Do': 'jump _deduction_q_motive_wrong' },
                'Motive2': { 'Text': '보험사기로 희생된 아버지의 복수', 'Do': 'jump _deduction_q_motive_correct' }
            }
        }
    ],

    '_deduction_q_motive_wrong': [ '틀렸습니다. 그것은 다른 사람의 동기입니다.', 'jump _deduction_complete' ],
    '_deduction_q_motive_correct': [ 
        '그렇습니다. 파랑새호 사건의 딸로서 복수를 감행한 것입니다.', 
        function() { monogatari.storage({ correct_motive: true }); },
        'jump _deduction_complete' 
    ],

    '_deduction_complete': [
        '추리가 끝났다...',
        function() {
            const s = monogatari.storage();
            if (s.correct_culprit && s.correct_trick && s.correct_motive && s.clue_count >= 3) {
                monogatari.run('jump scene_ending_true');
            } else if (s.correct_culprit) {
                monogatari.run('jump scene_ending_good');
            } else {
                monogatari.run('jump scene_ending_bad');
            }
            return false;
        }
    ],

    'scene_ending_true': [
        'show scene #000000',
        '【 진 엔딩: 폭풍 속의 진실 】',
        '나의 완벽한 추리 앞에 윤서진은 모든 것을 자백했다. 슬픈 복수극은 이렇게 막을 내렸다.',
        'end'
    ],
    'scene_ending_good': [
        'show scene #000000',
        '【 굿 엔딩: 차가운 복수 】',
        '범인을 지목하는 데 성공했지만 그녀의 슬픈 과거까지는 닿지 못했다.',
        'end'
    ],
    'scene_ending_bad': [
        'show scene #000000',
        '【 배드 엔딩: 뒤바뀐 운명 】',
        '나의 추리는 빗나갔다. 진범은 어둠 속에서 조용히 미소 짓고 있다.',
        'end'
    ]
});