// 방탈출 살인사건: 미궁 속의 진실
// Generated: 2026-01-31T15:04:15.349Z

monogatari.characters({
  "char_protagonist": {
    "name": "나유리",
    "color": "#3498db"
  },
  "char_victim": {
    "name": "강태준",
    "color": "#95a5a6"
  },
  "char_developer": {
    "name": "박철수",
    "color": "#e74c3c"
  },
  "char_student": {
    "name": "김민지",
    "color": "#2ecc71"
  },
  "char_employee": {
    "name": "최지훈",
    "color": "#f39c12"
  },
  "char_gamer": {
    "name": "정현우",
    "color": "#9b59b6"
  },
  "char_investor": {
    "name": "송은주",
    "color": "#34495e"
  }
});

monogatari.assets ('music', {
    'main_bgm': 'audio/bgm/basement-floor.mp3'
});

monogatari.assets('scenes', {
  "bg_lobby": "#1a1a2e",
  "bg_maze": "#1a1a2e",
  "bg_office": "#1a1a2e",
  "bg_cctv": "#1a1a2e"
});

monogatari.script({
  "scene_001": [
    "show scene bg_lobby",
    "방탈출 게임장의 화려한 조명이 나를 감쌌다. 새로운 소재를 찾기 위해 방문한 곳이었지만, 이 곳에서 살인사건이 벌어질 줄은 상상도 못했다.",
    "char_victim 어서 오세요! 오늘 '미궁' 테마는 어떠셨나요? 특히 마지막 방 문제가 아주 기가 막히죠.",
    "강태준 사장은 의기양양한 표정으로 손님들을 맞이하고 있었다. 그의 얼굴에는 성공에 대한 자신감이 넘쳐흘렀다.",
    "jump scene_002"
  ],
  "scene_002": [
    "show scene bg_lobby",
    "다음 날, 나는 게임장 앞에서 경찰 통제선을 마주했다. 어젯밤, 강태준 사장이 싸늘한 시체로 발견되었다는 소식이 들려왔다.",
    "char_protagonist (혼잣말) 방탈출 게임장에서 살인이라니… 흥미로운걸. 그냥 지나칠 수 없지.",
    "jump scene_003"
  ],
  "scene_003": [
    "show scene bg_lobby",
    "char_employee 저… 정말 끔찍해요. 사장님이 갑자기 돌아가시다니….",
    "char_protagonist 실례지만, 어젯밤 상황에 대해 조금 여쭤봐도 될까요? 혹시 특이한 점은 없었나요?",
    {
      "Choice": {
        "계속 질문한다": {
          "Text": "계속 질문한다",
          "Do": "jump scene_004"
        },
        "다른 사람에게 가본다": {
          "Text": "다른 사람에게 가본다",
          "Do": "jump scene_005"
        }
      }
    }
  ],
  "scene_004": [
    "show scene bg_lobby",
    "char_employee 음… 어제 박철수 씨가 좀 예민해 보였어요. 사장님과 계속 뭔가 이야기를 나누던데… 내용은 잘 모르겠어요.",
    "직원의 말에 박철수라는 이름이 뇌리에 박혔다. 그는 누구일까?",
    "jump scene_006"
  ],
  "scene_005": [
    "show scene bg_lobby",
    "char_student 저는 어제 '미궁' 게임을 했는데, 정말 재미있었어요! 하지만… 사장님은 왜…?",
    "char_protagonist 혹시 게임 중에 특이한 점은 없었나요? 예를 들어, 다른 참가자들의 행동이라던가…",
    "char_student 글쎄요… 박철수 씨가 중간에 잠깐 사라졌던 것 같기도 하고… 그냥 화장실에 간 걸지도 모르지만요.",
    "jump scene_006"
  ],
  "scene_006": [
    "show scene bg_office",
    "나는 강태준 사장의 사무실로 향했다. 폴리스 라인이 쳐져 있었지만, 경찰의 허락을 받아 조심스럽게 안으로 들어갔다.",
    "사무실은 어수선하게 흩어져 있었다. 책상 위에는 여러 장의 개발 노트와 설계도가 놓여 있었다.",
    "jump scene_007"
  ],
  "scene_007": [
    "show scene bg_office",
    "개발 노트를 살펴보던 중, 나는 박철수의 이름이 적힌 페이지를 발견했다. '아이디어 도용'이라는 글자가 붉은색 펜으로 강조되어 있었다.",
    "증거물 '강태준의 개발 노트' 획득.",
    "jump scene_008"
  ],
  "scene_008": [
    "show scene bg_cctv",
    "나는 CCTV 감시실로 향했다. 어젯밤 '미궁' 게임 참가자들의 동선을 확인하기 위해서였다.",
    "CCTV 화면 속에서 박철수는 김민지와 함께 게임을 진행하고 있었다. 하지만, 잠시 후 그는 김민지에게서 떨어져 다른 곳으로 향했다.",
    "jump scene_009"
  ],
  "scene_009": [
    "show scene bg_cctv",
    "박철수가 사라진 시간은 약 5분. 그리고 그 시간은 강태준 사장의 사망 추정 시간과 일치했다.",
    "증거물 'CCTV 영상' 획득.",
    "jump scene_010"
  ],
  "scene_010": [
    "show scene bg_lobby",
    "char_protagonist 박철수 씨, 잠깐 시간 괜찮으신가요? 몇 가지 여쭤볼게 있어서요.",
    "char_developer …무슨 일이죠? 저는 아무것도 모릅니다.",
    {
      "Choice": {
        "어젯밤 알리바이에 대해 질문한다": {
          "Text": "어젯밤 알리바이에 대해 질문한다",
          "Do": "jump scene_011"
        },
        "강태준과의 관계에 대해 질문한다": {
          "Text": "강태준과의 관계에 대해 질문한다",
          "Do": "jump scene_012"
        }
      }
    }
  ],
  "scene_011": [
    "show scene bg_lobby",
    "char_protagonist 어젯밤 '미궁' 게임에서 김민지 씨와 함께 있었다고 하셨죠? 혹시 중간에 자리를 비우신 적은 없나요?",
    "char_developer …화장실에 잠깐 다녀왔습니다. 그게 전부입니다.",
    "박철수의 눈빛이 불안하게 흔들렸다.",
    "jump scene_013"
  ],
  "scene_012": [
    "show scene bg_lobby",
    "char_protagonist 강태준 사장님과는 어떤 관계였나요? 개발 노트에 '아이디어 도용'이라고 적혀 있던데…",
    "char_developer …그건 오해입니다. 사장님과는 좋은 협력 관계였습니다.",
    "박철수의 목소리가 떨렸다.",
    "jump scene_013"
  ],
  "scene_013": [
    "show scene bg_lobby",
    "나는 박철수의 집을 수색하기 위해 경찰과 함께 그의 집으로 향했다.",
    "수색 결과, 박철수의 방에서 해독제가 발견되었다. 그리고 그 해독제는 강태준 사장의 컵에서 검출된 독극물 성분과 일치했다.",
    "증거물 '범인의 해독제' 획득.",
    "jump scene_014"
  ],
  "scene_014": [
    "show scene bg_lobby",
    "char_protagonist 박철수 씨, 이제 더 이상 숨길 수 없어요. 당신이 범인입니다.",
    "char_developer ……",
    "박철수는 아무 말도 하지 않았다. 그의 얼굴에는 절망과 분노가 뒤섞여 있었다.",
    "jump scene_015"
  ],
  "scene_015": [
    "show scene bg_lobby",
    "사건은 해결되었지만, 씁쓸함은 가시지 않았다. 아이디어에 대한 집착이 한 사람의 인생을 망쳐버린 것이다.",
    "나는 방탈출 게임장을 나섰다. 미궁 속에서 빠져나온 기분이었다.",
    "jump ending_true"
  ],
  "Start": [
    "play music main_bgm with loop",
    "jump scene_001"
  ]
});
