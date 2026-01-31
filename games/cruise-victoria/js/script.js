// 태풍 속 크루즈 빅토리아호
// Generated: 2026-01-31T12:50:15.412Z

monogatari.characters({
  "char_protagonist": {
    "name": "강수현",
    "color": "#2980b9"
  },
  "char_heiress": {
    "name": "박선영",
    "color": "#e74c3c"
  },
  "char_doctor": {
    "name": "최준혁",
    "color": "#95a5a6"
  },
  "char_singer": {
    "name": "유미나",
    "color": "#f1c40f"
  },
  "char_steward": {
    "name": "이동욱",
    "color": "#34495e"
  },
  "char_detective": {
    "name": "오형사",
    "color": "#777777"
  },
  "char_victim": {
    "name": "김민준",
    "color": "#000000"
  }
});

monogatari.assets('scenes', {
  "bg_cruise": "#1a1a2e",
  "bg_cabin": "#1a1a2e",
  "bg_hallway": "#1a1a2e",
  "bg_dining": "#1a1a2e",
  "bg_lounge": "#1a1a2e"
});

monogatari.assets ('music', {
    'main_bgm': 'audio/bgm/half-mystery.mp3'
});

monogatari.script({
  "scene_001": [
    "show scene bg_cabin",
    "화려한 크루즈 빅토리아호, 나는 추리 소설가 강수현. 휴가를 즐기러 왔지만, 불길한 기운이 감돈다.",
    "객실 문이 열리고, 김민준 사장이 쓰러져 있다. 그는 이미 숨을 거둔 듯하다.",
    "char_victim (괴로운 신음) 컥….",
    "마지막으로 괴로운 신음을 내뱉고 눈을 감았다.",
    "jump scene_002"
  ],
  "scene_002": [
    "show scene bg_cruise",
    "사건 현장을 보존하고, 크루즈 내에 있던 오형사에게 알렸다. 그는 휴가 중이었지만, 사건을 외면할 수 없었을 것이다.",
    "char_detective 젠장, 휴가 망했군. 강 작가, 자네도 있었나. 무슨 일인지 대충 짐작은 가네.",
    "jump scene_003"
  ],
  "scene_003": [
    "show scene bg_cabin",
    "오형사와 함께 객실을 조사하기 시작했다. 흉기는 날카로운 칼. 주변은 격렬하게 싸운 흔적은 없어보인다.",
    "피해자의 다이어리가 눈에 띈다. 최근 크루즈 사업 투자로 막대한 손실을 입었다는 내용이 적혀 있다.",
    "다이어리에는 몇몇 사람들의 이름이 적혀있다. 박선영, 최준혁, 유미나, 그리고 이동욱...",
    "jump scene_004"
  ],
  "scene_004": [
    "show scene bg_cruise",
    "오형사와 함께 용의자들을 차례대로 만나보기로 했다. 첫 번째는 재벌 상속녀 박선영. 그녀는 과거 김민준과 연인 관계였다.",
    "char_heiress 김민준이 죽었다고요? 말도 안 돼… 그 사람은… 한때 사랑했던 사람이었어요.",
    "char_detective 사건 당일, 뭘 하고 있었습니까?",
    "char_heiress 스파에서 마사지를 받고 있었어요. 증인이 필요하면 스파 직원을 불러주세요.",
    "jump scene_005"
  ],
  "scene_005": [
    "show scene bg_cruise",
    "다음은 김민준의 주치의였던 최준혁. 그는 냉정하고 차분한 태도를 유지했다.",
    "char_doctor 김민준은 최근 건강이 좋지 않았습니다. 스트레스가 심했죠. 죽음이 안타깝지만, 놀랍지는 않네요.",
    "char_protagonist 사건 당일 밤에는 어디에 계셨나요?",
    "char_doctor 제 방에서 책을 읽고 있었습니다. 혼자였기 때문에 증명할 방법은 없군요.",
    "jump scene_006"
  ],
  "scene_006": [
    "show scene bg_cruise",
    "세 번째 용의자는 유명 가수 유미나. 그녀는 과거 김민준과 스캔들이 있었다.",
    "char_singer 그 사람이 죽었다니… 믿을 수 없어요. 우린 그저 비즈니스 관계였을 뿐이에요!",
    "char_detective 사건 당일 밤 11시부터 12시 사이에 뭘 했습니까?",
    "char_singer 라운지에서 술을 마시고 있었어요. 팬들이랑 사진도 찍었고요. 증인들이 많을 거예요.",
    "jump scene_007"
  ],
  "scene_007": [
    "show scene bg_cruise",
    "마지막으로 크루즈 승무원 이동욱을 만났다. 그는 친절했지만, 어딘가 불안해 보였다.",
    "char_steward 사장님이… 돌아가셨다니… 정말 안타깝습니다.",
    "char_protagonist 사건 발생 시각에 무엇을 하고 있었나요?",
    "char_steward 룸서비스를 제공하고 있었습니다. 다른 승객에게 룸서비스를 전달했었죠.",
    "jump scene_008"
  ],
  "scene_008": [
    "show scene bg_hallway",
    "이동욱이 룸서비스를 제공했다는 승객을 찾아 증언을 확보했다. 하지만, 뭔가 이상하다. 룸서비스 기록과 시간이 맞지 않는다.",
    "태풍 때문에 CCTV가 작동하지 않는다는 점을 이용한 알리바이 트릭인가…?",
    "jump scene_009"
  ],
  "scene_009": [
    "show scene bg_cabin",
    "다시 김민준의 객실을 조사하던 중, 룸서비스 카트에서 희미한 혈흔을 발견했다.",
    "char_detective 국과수에 감식을 의뢰해야겠군. 강 작가, 자네 생각은 어떤가?",
    {
      "Choice": {
        "이동욱이 범인이라고 생각한다.": {
          "Text": "이동욱이 범인이라고 생각한다.",
          "Do": "jump scene_010"
        },
        "아직 단서가 부족하다.": {
          "Text": "아직 단서가 부족하다.",
          "Do": "jump scene_011"
        }
      }
    }
  ],
  "scene_010": [
    "show scene bg_cruise",
    "이동욱을 다시 불러 심문하기로 했다.",
    "char_detective 이동욱 씨, 룸서비스 기록이 당신의 증언과 다르다는 사실을 알고 있습니까?",
    "char_steward (당황하며) 그, 그럴 리가 없습니다… 저는 분명히 룸서비스를…",
    "jump scene_012"
  ],
  "scene_011": [
    "show scene bg_lounge",
    "다른 용의자들의 알리바이를 다시 확인해봐야겠다.",
    "박선영의 스파 기록, 유미나의 팬들과 찍은 사진들을 조사해 추가 단서를 찾아보자.",
    "하지만 뚜렷한 단서는 발견하지 못했다.",
    "jump scene_012"
  ],
  "scene_012": [
    "show scene bg_cruise",
    "국과수 감식 결과, 룸서비스 카트에서 발견된 혈흔은 김민준의 것이었다.",
    "char_detective 이동욱 씨, 이제 변명할 수 없겠지. 룸서비스 카트에 묻은 피해자의 혈흔은 어떻게 설명할 건가?",
    "char_steward (울먹이며) 죄송합니다… 제가… 제가 죽였습니다…",
    "jump scene_013"
  ],
  "scene_013": [
    "show scene bg_cruise",
    "이동욱은 모든 것을 자백했다. 그는 과거 김민준의 회사에 투자했다가 전 재산을 잃었고, 복수를 계획했다.",
    "char_steward 김민준 그 자식… 내 인생을 망쳤어! 냉정하게 외면하는 모습에 분노를 참을 수 없었습니다…",
    "jump scene_014"
  ],
  "scene_014": [
    "show scene bg_cruise",
    "태풍 속 크루즈 살인사건은 그렇게 막을 내렸다. 이동욱은 체포되었고, 나는 다시 휴가를 즐기기로 했다.",
    "char_detective 강 작가, 덕분에 사건을 해결할 수 있었네. 역시 추리 소설가는 다르구만.",
    "char_protagonist 별말씀을요. 저도 흥미로운 경험이었어요.",
    "jump scene_015"
  ],
  "scene_015": [
    "show scene bg_cruise",
    "하지만 마음 한구석에는 씁쓸함이 남았다. 인간의 욕망과 복수심이 만들어낸 비극… 다음 작품에는 어떤 이야기를 담아야 할까?",
    "나는 다시 바다를 바라보며 새로운 영감을 떠올리기 시작했다.",
    "The End."
  ],
  "Start": [
    "play music main_bgm with loop",
    "jump scene_001"
  ]
});
