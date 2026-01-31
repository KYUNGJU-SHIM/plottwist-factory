// 아파트 단지 강아지 실종 사건
// Generated: 2026-01-31T15:43:48.953Z

monogatari.characters({
  "char_protagonist": {
    "name": "김탐정",
    "color": "#007bff"
  },
  "char_01": {
    "name": "박씨",
    "color": "#6c757d"
  },
  "char_02": {
    "name": "최씨",
    "color": "#28a745"
  },
  "char_03": {
    "name": "정씨",
    "color": "#dc3545"
  },
  "char_04": {
    "name": "강씨",
    "color": "#ffc107"
  },
  "char_05": {
    "name": "조씨",
    "color": "#17a2b8"
  },
  "char_06": {
    "name": "윤씨",
    "color": "#e83e8c"
  },
  "char_07": {
    "name": "오씨",
    "color": "#343a40"
  },
  "char_08": {
    "name": "하씨",
    "color": "#007bff"
  },
  "char_09": {
    "name": "구씨",
    "color": "#6c757d"
  },
  "char_10": {
    "name": "신씨",
    "color": "#28a745"
  },
  "char_dog": {
    "name": "해피",
    "color": "#f8f9fa"
  }
});

monogatari.assets('scenes', {
  "bg_apartment": "#1a1a2e",
  "bg_parkinglot": "#1a1a2e",
  "bg_playground": "#1a1a2e"
});

monogatari.script({
  "scene_001": [
    "show scene bg_apartment",
    "따스한 햇살이 내리쬐는 평화로운 아파트 단지. 하지만 그 평화는 곧 깨어질 운명이었다.",
    "char_dog (왈왈!)",
    "작은 푸들, 해피는 오늘도 아파트 단지를 활보하며 주민들의 사랑을 독차지하고 있었다.",
    "하지만 그 누구도 알지 못했다. 해피에게 닥쳐올 불행을...",
    "jump scene_002"
  ],
  "scene_002": [
    "show scene bg_apartment",
    "다음 날 아침, 아파트 관리사무소는 발칵 뒤집혔다. 해피가 사라진 것이다.",
    "char_protagonist 실종이라니... 무슨 일이 있었던 걸까요?",
    "나는 김탐정. 아파트 주민의 의뢰를 받고 해피 실종 사건을 맡게 되었다.",
    "jump scene_003"
  ],
  "scene_003": [
    "show scene bg_apartment",
    "char_01 탐정님, 해피는 정말 착한 강아지였는데... 어쩌다 이런 일이...",
    "char_protagonist 경비 아저씨, 혹시 어제 밤에 특이한 점은 없었나요?",
    "char_01 음... 특별한 건 없었던 것 같은데요. 아, 조씨가 밤늦게 나가는 걸 봤어요. 평소엔 집에만 있는 사람이거든요.",
    "jump scene_004"
  ],
  "scene_004": [
    "show scene bg_apartment",
    "char_protagonist 조씨... 수상하군요. 먼저 CCTV부터 확인해봐야겠어.",
    "관리사무소에서 CCTV 영상을 확인했지만, 사각지대가 많아 결정적인 증거는 찾을 수 없었다. 하지만, 희미하게 누군가 해피와 비슷한 강아지를 데리고 나가는 장면이 포착되었다.",
    "jump scene_005"
  ],
  "scene_005": [
    "show scene bg_apartment",
    "조씨의 집으로 향했다.",
    "char_protagonist (똑똑) 조씨, 잠시 이야기 좀 나눌 수 있을까요?",
    "jump scene_006"
  ],
  "scene_006": [
    "show scene bg_apartment",
    "char_05 무슨 일이시죠? 저는 지금 바쁩니다.",
    "char_protagonist 어젯밤에 어디 가셨었나요? 경비 아저씨가 늦게 나가시는 걸 봤다고 하던데요.",
    "char_05 저는 집에 있었습니다. TV를 보고 있었죠. 이웃에게 물어보세요. TV 소리가 시끄러웠을 겁니다.",
    "jump scene_007"
  ],
  "scene_007": [
    "show scene bg_apartment",
    "조씨의 말대로 이웃 주민에게 확인해보니, 늦은 밤 TV 소리가 크게 들렸다는 증언을 얻을 수 있었다.",
    "char_protagonist (조씨에게 알리바이가 있는 건가...? 하지만 뭔가 석연치 않아.)",
    "jump scene_008"
  ],
  "scene_008": [
    "show scene bg_apartment",
    "단서를 찾기 위해 아파트 단지를 샅샅이 뒤지던 중, 놀이터에서 윤씨 할머니를 만났다.",
    "char_06 해피는 내 유일한 친구였는데... 누가 해피를 데려갔을까...",
    "char_protagonist 할머니, 혹시 최근에 해피에게 안 좋은 감정을 가진 사람을 보신 적 있으신가요?",
    "char_06 글쎄... 조씨가 평소에 해피 짖는 소리 때문에 짜증을 많이 냈었지...",
    "jump scene_009"
  ],
  "scene_009": [
    "show scene bg_parkinglot",
    "주차장에서 택시 기사 하씨를 만났다.",
    "char_08 어이, 탐정 양반! 무슨 일로 왔어?",
    "char_protagonist 혹시 어제 밤에 아파트에서 손님을 태우고 어디론가 가신 적 있으신가요?",
    "char_08 글쎄... 기억이 잘 안 나는데. 블랙박스를 확인해볼까?",
    "jump scene_010"
  ],
  "scene_010": [
    "show scene bg_parkinglot",
    "하씨의 택시 블랙박스 영상을 확인한 결과, 어젯밤 조씨가 해피를 유기 장소 근처에 내려달라고 요청하는 장면이 담겨 있었다!",
    "char_protagonist (결정적인 증거다! 조씨, 이제 빼도 박도 못하겠군.)",
    "jump scene_011"
  ],
  "scene_011": [
    "show scene bg_apartment",
    "char_protagonist 조씨, 택시 블랙박스에 당신이 해피를 유기 장소 근처에 내려달라고 요청하는 장면이 찍혔습니다. 이제 더 이상 부인할 수 없겠죠?",
    "조씨는 당황한 표정으로 아무 말도 하지 못했다.",
    "jump scene_012"
  ],
  "scene_012": [
    "show scene bg_apartment",
    "char_protagonist 당신은 평소 해피의 짖는 소리에 불만이 많았고, 극단적인 방법으로 문제를 해결하려 했던 거죠?",
    "char_05 ......",
    "조씨는 결국 범행을 시인했다.",
    "jump scene_013"
  ],
  "scene_013": [
    "show scene bg_apartment",
    "조씨의 자백을 받아낸 후, 나는 즉시 해피를 찾기 위해 유기 장소로 향했다.",
    "jump scene_014"
  ],
  "scene_014": [
    "show scene bg_apartment",
    "다행히 해피는 무사히 발견되었고, 윤씨 할머니의 품으로 돌아갔다.",
    "char_06 해피야! 정말 다행이다...",
    "char_dog (왈왈!)",
    "jump scene_015"
  ],
  "scene_015": [
    "show scene bg_apartment",
    "나는 해피 실종 사건을 해결하고 아파트 단지에 다시 평화를 가져다주었다.",
    "char_protagonist 작은 강아지 한 마리에게도 소중한 삶이 있다는 것을 잊지 말아야 합니다.",
    "그리고, 다음 사건을 향해 발걸음을 옮겼다."
  ],
  "Start": [
    "jump scene_001"
  ]
});
