const moves = {
  "1": {
    "identifier":"pound",
    typeId: 1,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null,
    description: "Pounds with fore­ legs or tail."
  },
  "2": {
    "identifier":"karate-chop",
    typeId: 2,
    "power":50,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 44,
    effectChance: null,
    description: "Has a high criti­ cal hit ratio."
  },
  "3": {
    "identifier":"double-slap",
    typeId: 1,
    "power":15,
    "pp":10,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null,
    description: "Repeatedly slaps 2-5 times."
  },
  "4": {
    "identifier":"comet-punch",
    typeId: 1,
    "power":18,
    "pp":15,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null,
    description: "Repeatedly punches 2-5 times."
  },
  "5": {
    "identifier":"mega-punch",
    typeId: 1,
    "power":80,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "6": {
    "identifier":"pay-day",
    typeId: 1,
    "power":40,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 35,
    effectChance: null
  },
  "7": {
    "identifier":"fire-punch",
    typeId: 10,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 5,
    effectChance: 10
  },
  "8": {
    "identifier":"ice-punch",
    typeId: 15,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 6,
    effectChance: 10
  },
  "9": {
    "identifier":"thunder-punch",
    typeId: 13,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 7,
    effectChance: 10
  },
  "10": {
    "identifier":"scratch",
    typeId: 1,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "11": {
    "identifier":"vice-grip",
    typeId: 1,
    "power":55,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "12": {
    "identifier":"guillotine",
    typeId: 1,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 39,
    effectChance: null
  },
  "13": {
    "identifier":"razor-wind",
    typeId: 1,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 3,
    effectId: 40,
    effectChance: null
  },
  "14": {
    "identifier":"swords-dance",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 51,
    effectChance: null
  },
  "15": {
    "identifier":"cut",
    typeId: 1,
    "power":50,
    "pp":30,
    "accuracy":95,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "16": {
    "identifier":"gust",
    typeId: 3,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 150,
    effectChance: null
  },
  "17": {
    "identifier":"wing-attack",
    typeId: 3,
    "power":60,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "18": {
    "identifier":"whirlwind",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":-6,
    targetId: 10,
    damageClassId: 1,
    effectId: 29,
    effectChance: null
  },
  "19": {
    "identifier":"fly",
    typeId: 3,
    "power":90,
    "pp":15,
    "accuracy":95,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 156,
    effectChance: null
  },
  "20": {
    "identifier":"bind",
    typeId: 1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 43,
    effectChance: 100
  },
  "21": {
    "identifier":"slam",
    typeId: 1,
    "power":80,
    "pp":20,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "22": {
    "identifier":"vine-whip",
    typeId: 12,
    "power":45,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "23": {
    "identifier":"stomp",
    typeId: 1,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 151,
    effectChance: 30
  },
  "24": {
    "identifier":"double-kick",
    typeId: 2,
    "power":30,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 45,
    effectChance: null
  },
  "25": {
    "identifier":"mega-kick",
    typeId: 1,
    "power":120,
    "pp":5,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "26": {
    "identifier":"jump-kick",
    typeId: 2,
    "power":100,
    "pp":10,
    "accuracy":95,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 46,
    effectChance: null
  },
  "27": {
    "identifier":"rolling-kick",
    typeId: 2,
    "power":60,
    "pp":15,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 30
  },
  "28": {
    "identifier":"sand-attack",
    typeId: 5,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 24,
    effectChance: null
  },
  "29": {
    "identifier":"headbutt",
    typeId: 1,
    "power":70,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 30
  },
  "30": {
    "identifier":"horn-attack",
    typeId: 1,
    "power":65,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "31": {
    "identifier":"fury-attack",
    typeId: 1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null
  },
  "32": {
    "identifier":"horn-drill",
    typeId: 1,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 39,
    effectChance: null
  },
  "33": {
    "identifier":"tackle",
    typeId: 1,
    "power":50,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "34": {
    "identifier":"body-slam",
    typeId: 1,
    "power":85,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 7,
    effectChance: 30
  },
  "35": {
    "identifier":"wrap",
    typeId: 1,
    "power":15,
    "pp":20,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 43,
    effectChance: 100
  },
  "36": {
    "identifier":"take-down",
    typeId: 1,
    "power":90,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 49,
    effectChance: null
  },
  "37": {
    "identifier":"thrash",
    typeId: 1,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 8,
    damageClassId: 2,
    effectId: 28,
    effectChance: null
  },
  "38": {
    "identifier":"double-edge",
    typeId: 1,
    "power":120,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 199,
    effectChance: null
  },
  "39": {
    "identifier":"tail-whip",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 1,
    effectId: 20,
    effectChance: null
  },
  "40": {
    "identifier":"poison-sting",
    typeId: 4,
    "power":15,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 3,
    effectChance: 30
  },
  "41": {
    "identifier":"twineedle",
    typeId: 7,
    "power":25,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 78,
    effectChance: 20
  },
  "42": {
    "identifier":"pin-missile",
    typeId: 7,
    "power":25,
    "pp":20,
    "accuracy":95,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null
  },
  "43": {
    "identifier":"leer",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 1,
    effectId: 20,
    effectChance: 100
  },
  "44": {
    "identifier":"bite",
    typeId: 17,
    "power":60,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 30
  },
  "45": {
    "identifier":"growl",
    typeId: 1,
    "power":null,
    "pp":40,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 1,
    effectId: 19,
    effectChance: null
  },
  "46": {
    "identifier":"roar",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":-6,
    targetId: 10,
    damageClassId: 1,
    effectId: 29,
    effectChance: null
  },
  "47": {
    "identifier":"sing",
    typeId: 1,
    "power":null,
    "pp":15,
    "accuracy":55,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 2,
    effectChance: null
  },
  "48": {
    "identifier":"supersonic",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":55,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 50,
    effectChance: null
  },
  "49": {
    "identifier":"sonic-boom",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 131,
    effectChance: null
  },
  "50": {
    "identifier":"disable",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 87,
    effectChance: null
  },
  "51": {
    "identifier":"acid",
    typeId: 4,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 3,
    effectId: 73,
    effectChance: 10
  },
  "52": {
    "identifier":"ember",
    typeId: 10,
    "power":40,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 5,
    effectChance: 10
  },
  "53": {
    "identifier":"flamethrower",
    typeId: 10,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 5,
    effectChance: 10
  },
  "54": {
    "identifier":"mist",
    typeId: 15,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 4,
    damageClassId: 1,
    effectId: 47,
    effectChance: null
  },
  "55": {
    "identifier":"water-gun",
    typeId: 11,
    "power":40,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 1,
    effectChance: null
  },
  "56": {
    "identifier":"hydro-pump",
    typeId: 11,
    "power":110,
    "pp":5,
    "accuracy":80,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 1,
    effectChance: null
  },
  "57": {
    "identifier":"surf",
    typeId: 11,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 9,
    damageClassId: 3,
    effectId: 258,
    effectChance: null
  },
  "58": {
    "identifier":"ice-beam",
    typeId: 15,
    "power":90,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 6,
    effectChance: 10
  },
  "59": {
    "identifier":"blizzard",
    typeId: 15,
    "power":110,
    "pp":5,
    "accuracy":70,
    "priority":0,
    targetId: 11,
    damageClassId: 3,
    effectId: 261,
    effectChance: 10
  },
  "60": {
    "identifier":"psybeam",
    typeId: 14,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 77,
    effectChance: 10
  },
  "61": {
    "identifier":"bubble-beam",
    typeId: 11,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 71,
    effectChance: 10
  },
  "62": {
    "identifier":"aurora-beam",
    typeId: 15,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 69,
    effectChance: 10
  },
  "63": {
    "identifier":"hyper-beam",
    typeId: 1,
    "power":150,
    "pp":5,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 81,
    effectChance: null
  },
  "64": {
    "identifier":"peck",
    typeId: 3,
    "power":35,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "65": {
    "identifier":"drill-peck",
    typeId: 3,
    "power":80,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "66": {
    "identifier":"submission",
    typeId: 2,
    "power":80,
    "pp":20,
    "accuracy":80,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 49,
    effectChance: null
  },
  "67": {
    "identifier":"low-kick",
    typeId: 2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 197,
    effectChance: null
  },
  "68": {
    "identifier":"counter",
    typeId: 2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":-5,
    targetId: 1,
    damageClassId: 2,
    effectId: 90,
    effectChance: null
  },
  "69": {
    "identifier":"seismic-toss",
    typeId: 2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 88,
    effectChance: null
  },
  "70": {
    "identifier":"strength",
    typeId: 1,
    "power":80,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "71": {
    "identifier":"absorb",
    typeId: 12,
    "power":20,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 4,
    effectChance: null
  },
  "72": {
    "identifier":"mega-drain",
    typeId: 12,
    "power":40,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 4,
    effectChance: null
  },
  "73": {
    "identifier":"leech-seed",
    typeId: 12,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 85,
    effectChance: null
  },
  "74": {
    "identifier":"growth",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 317,
    effectChance: null
  },
  "75": {
    "identifier":"razor-leaf",
    typeId: 12,
    "power":55,
    "pp":25,
    "accuracy":95,
    "priority":0,
    targetId: 11,
    damageClassId: 2,
    effectId: 44,
    effectChance: null
  },
  "76": {
    "identifier":"solar-beam",
    typeId: 12,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 152,
    effectChance: null
  },
  "77": {
    "identifier":"poison-powder",
    typeId: 4,
    "power":null,
    "pp":35,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 67,
    effectChance: null
  },
  "78": {
    "identifier":"stun-spore",
    typeId: 12,
    "power":null,
    "pp":30,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 68,
    effectChance: null
  },
  "79": {
    "identifier":"sleep-powder",
    typeId: 12,
    "power":null,
    "pp":15,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 2,
    effectChance: null
  },
  "80": {
    "identifier":"petal-dance",
    typeId: 12,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 8,
    damageClassId: 3,
    effectId: 28,
    effectChance: null
  },
  "81": {
    "identifier":"string-shot",
    typeId: 7,
    "power":null,
    "pp":40,
    "accuracy":95,
    "priority":0,
    targetId: 11,
    damageClassId: 1,
    effectId: 21,
    effectChance: null
  },
  "82": {
    "identifier":"dragon-rage",
    typeId: 16,
    "power":null,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 42,
    effectChance: null
  },
  "83": {
    "identifier":"fire-spin",
    typeId: 10,
    "power":35,
    "pp":15,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 43,
    effectChance: 100
  },
  "84": {
    "identifier":"thunder-shock",
    typeId: 13,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 7,
    effectChance: 10
  },
  "85": {
    "identifier":"thunderbolt",
    typeId: 13,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 7,
    effectChance: 10
  },
  "86": {
    "identifier":"thunder-wave",
    typeId: 13,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 68,
    effectChance: null
  },
  "87": {
    "identifier":"thunder",
    typeId: 13,
    "power":110,
    "pp":10,
    "accuracy":70,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 153,
    effectChance: 30
  },
  "88": {
    "identifier":"rock-throw",
    typeId: 6,
    "power":50,
    "pp":15,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "89": {
    "identifier":"earthquake",
    typeId: 5,
    "power":100,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 9,
    damageClassId: 2,
    effectId: 148,
    effectChance: null
  },
  "90": {
    "identifier":"fissure",
    typeId: 5,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 39,
    effectChance: null
  },
  "91": {
    "identifier":"dig",
    typeId: 5,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 257,
    effectChance: null
  },
  "92": {
    "identifier":"toxic",
    typeId: 4,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 34,
    effectChance: null
  },
  "93": {
    "identifier":"confusion",
    typeId: 14,
    "power":50,
    "pp":25,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 77,
    effectChance: 10
  },
  "94": {
    "identifier":"psychic",
    typeId: 14,
    "power":90,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 73,
    effectChance: 10
  },
  "95": {
    "identifier":"hypnosis",
    typeId: 14,
    "power":null,
    "pp":20,
    "accuracy":60,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 2,
    effectChance: null
  },
  "96": {
    "identifier":"meditate",
    typeId: 14,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 11,
    effectChance: null
  },
  "97": {
    "identifier":"agility",
    typeId: 14,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 53,
    effectChance: null
  },
  "98": {
    "identifier":"quick-attack",
    typeId: 1,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":1,
    targetId: 10,
    damageClassId: 2,
    effectId: 104,
    effectChance: null
  },
  "99": {
    "identifier":"rage",
    typeId: 1,
    "power":20,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 82,
    effectChance: null
  },
  "100": {
    "identifier":"teleport",
    typeId: 14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 154,
    effectChance: null
  },
  "101": {
    "identifier":"night-shade",
    typeId: 8,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 88,
    effectChance: null
  },
  "102": {
    "identifier":"mimic",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 83,
    effectChance: null
  },
  "103": {
    "identifier":"screech",
    typeId: 1,
    "power":null,
    "pp":40,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 60,
    effectChance: null
  },
  "104": {
    "identifier":"double-team",
    typeId: 1,
    "power":null,
    "pp":15,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 17,
    effectChance: null
  },
  "105": {
    "identifier":"recover",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 33,
    effectChance: null
  },
  "106": {
    "identifier":"harden",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 12,
    effectChance: null
  },
  "107": {
    "identifier":"minimize",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 109,
    effectChance: null
  },
  "108": {
    "identifier":"smokescreen",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 24,
    effectChance: null
  },
  "109": {
    "identifier":"confuse-ray",
    typeId: 8,
    "power":null,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 50,
    effectChance: null
  },
  "110": {
    "identifier":"withdraw",
    typeId: 11,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 12,
    effectChance: null
  },
  "111": {
    "identifier":"defense-curl",
    typeId: 1,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 157,
    effectChance: null
  },
  "112": {
    "identifier":"barrier",
    typeId: 14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 52,
    effectChance: null
  },
  "113": {
    "identifier":"light-screen",
    typeId: 14,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 4,
    damageClassId: 1,
    effectId: 36,
    effectChance: null
  },
  "114": {
    "identifier":"haze",
    typeId: 15,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 12,
    damageClassId: 1,
    effectId: 26,
    effectChance: null
  },
  "115": {
    "identifier":"reflect",
    typeId: 14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 4,
    damageClassId: 1,
    effectId: 66,
    effectChance: null
  },
  "116": {
    "identifier":"focus-energy",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 48,
    effectChance: null
  },
  "117": {
    "identifier":"bide",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":1,
    targetId: 7,
    damageClassId: 2,
    effectId: 27,
    effectChance: null
  },
  "118": {
    "identifier":"metronome",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 84,
    effectChance: null
  },
  "119": {
    "identifier":"mirror-move",
    typeId: 3,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 10,
    effectChance: null
  },
  "120": {
    "identifier":"self-destruct",
    typeId: 1,
    "power":200,
    "pp":5,
    "accuracy":100,
    "priority":0,
    targetId: 9,
    damageClassId: 2,
    effectId: 8,
    effectChance: null
  },
  "121": {
    "identifier":"egg-bomb",
    typeId: 1,
    "power":100,
    "pp":10,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 1,
    effectChance: null
  },
  "122": {
    "identifier":"lick",
    typeId: 8,
    "power":30,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 7,
    effectChance: 30
  },
  "123": {
    "identifier":"smog",
    typeId: 4,
    "power":30,
    "pp":20,
    "accuracy":70,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 3,
    effectChance: 40
  },
  "124": {
    "identifier":"sludge",
    typeId: 4,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 3,
    effectChance: 30
  },
  "125": {
    "identifier":"bone-club",
    typeId: 5,
    "power":65,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 10
  },
  "126": {
    "identifier":"fire-blast",
    typeId: 10,
    "power":110,
    "pp":5,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 5,
    effectChance: 10
  },
  "127": {
    "identifier":"waterfall",
    typeId: 11,
    "power":80,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 20
  },
  "128": {
    "identifier":"clamp",
    typeId: 11,
    "power":35,
    "pp":15,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 43,
    effectChance: 100
  },
  "129": {
    "identifier":"swift",
    typeId: 1,
    "power":60,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 11,
    damageClassId: 3,
    effectId: 18,
    effectChance: null
  },
  "130": {
    "identifier":"skull-bash",
    typeId: 1,
    "power":130,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 146,
    effectChance: 100
  },
  "131": {
    "identifier":"spike-cannon",
    typeId: 1,
    "power":20,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null
  },
  "132": {
    "identifier":"constrict",
    typeId: 1,
    "power":10,
    "pp":35,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 71,
    effectChance: 10
  },
  "133": {
    "identifier":"amnesia",
    typeId: 14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 55,
    effectChance: null
  },
  "134": {
    "identifier":"kinesis",
    typeId: 14,
    "power":null,
    "pp":15,
    "accuracy":80,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 24,
    effectChance: null
  },
  "135": {
    "identifier":"soft-boiled",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 33,
    effectChance: null
  },
  "136": {
    "identifier":"high-jump-kick",
    typeId: 2,
    "power":130,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 46,
    effectChance: null
  },
  "137": {
    "identifier":"glare",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 68,
    effectChance: null
  },
  "138": {
    "identifier":"dream-eater",
    typeId: 14,
    "power":100,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 9,
    effectChance: null
  },
  "139": {
    "identifier":"poison-gas",
    typeId: 4,
    "power":null,
    "pp":40,
    "accuracy":90,
    "priority":0,
    targetId: 11,
    damageClassId: 1,
    effectId: 67,
    effectChance: null
  },
  "140": {
    "identifier":"barrage",
    typeId: 1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null
  },
  "141": {
    "identifier":"leech-life",
    typeId: 7,
    "power":20,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 4,
    effectChance: null
  },
  "142": {
    "identifier":"lovely-kiss",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":75,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 2,
    effectChance: null
  },
  "143": {
    "identifier":"sky-attack",
    typeId: 3,
    "power":140,
    "pp":5,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 76,
    effectChance: 30
  },
  "144": {
    "identifier":"transform",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 58,
    effectChance: null
  },
  "145": {
    "identifier":"bubble",
    typeId: 11,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    targetId: 11,
    damageClassId: 3,
    effectId: 71,
    effectChance: 10
  },
  "146": {
    "identifier":"dizzy-punch",
    typeId: 1,
    "power":70,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 77,
    effectChance: 20
  },
  "147": {
    "identifier":"spore",
    typeId: 12,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 2,
    effectChance: null
  },
  "148": {
    "identifier":"flash",
    typeId: 1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 1,
    effectId: 24,
    effectChance: null
  },
  "149": {
    "identifier":"psywave",
    typeId: 14,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 89,
    effectChance: null
  },
  "150": {
    "identifier":"splash",
    typeId: 1,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 86,
    effectChance: null
  },
  "151": {
    "identifier":"acid-armor",
    typeId: 4,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 52,
    effectChance: null
  },
  "152": {
    "identifier":"crabhammer",
    typeId: 11,
    "power":100,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 44,
    effectChance: null
  },
  "153": {
    "identifier":"explosion",
    typeId: 1,
    "power":250,
    "pp":5,
    "accuracy":100,
    "priority":0,
    targetId: 9,
    damageClassId: 2,
    effectId: 8,
    effectChance: null
  },
  "154": {
    "identifier":"fury-swipes",
    typeId: 1,
    "power":18,
    "pp":15,
    "accuracy":80,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 30,
    effectChance: null
  },
  "155": {
    "identifier":"bonemerang",
    typeId: 5,
    "power":50,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 45,
    effectChance: null
  },
  "156": {
    "identifier":"rest",
    typeId: 14,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 38,
    effectChance: null
  },
  "157": {
    "identifier":"rock-slide",
    typeId: 6,
    "power":75,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 11,
    damageClassId: 2,
    effectId: 32,
    effectChance: 30
  },
  "158": {
    "identifier":"hyper-fang",
    typeId: 1,
    "power":80,
    "pp":15,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 32,
    effectChance: 10
  },
  "159": {
    "identifier":"sharpen",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 11,
    effectChance: null
  },
  "160": {
    "identifier":"conversion",
    typeId: 1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 31,
    effectChance: null
  },
  "161": {
    "identifier":"tri-attack",
    typeId: 1,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 3,
    effectId: 37,
    effectChance: 20
  },
  "162": {
    "identifier":"super-fang",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 41,
    effectChance: null
  },
  "163": {
    "identifier":"slash",
    typeId: 1,
    "power":70,
    "pp":20,
    "accuracy":100,
    "priority":0,
    targetId: 10,
    damageClassId: 2,
    effectId: 44,
    effectChance: null
  },
  "164": {
    "identifier":"substitute",
    typeId: 1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    targetId: 7,
    damageClassId: 1,
    effectId: 80,
    effectChance: null
  },
  "165": {
    "identifier":"struggle",
    typeId: 1,
    "power":50,
    "pp":null,
    "accuracy":null,
    "priority":0,
    targetId: 8,
    damageClassId: 2,
    effectId: 255,
    effectChance: null
  },
};
const descriptions = {
  "5": {
    description: "A powerful punch thrown very hard."
  },
  "6": {
    description: "Throws coins. Gets them back later."
  },
  "7": {
    description: "A fiery punch. May cause a burn."
  },
  "8": {
    description: "An icy punch. May cause freezing."
  },
  "9": {
    description: "An electric punch. It may paralyze."
  },
  "10": {
    description: "Scratches with sharp claws."
  },
  "11": {
    description: "Grips with power­ ful pincers."
  },
  "12": {
    description: "A one-hit KO, pincer attack."
  },
  "13": {
    description: "1st turn: Prepare 2nd turn: Attack"
  },
  "14": {
    description: "A dance that in­ creases ATTACK."
  },
  "15": {
    description: "Cuts using claws, scythes, etc."
  },
  "16": {
    description: "Whips up a strong gust of wind."
  },
  "17": {
    description: "Strikes the target with wings."
  },
  "18": {
    description: "Blows away the foe & ends battle."
  },
  "19": {
    description: "1st turn: Fly 2nd turn: Attack"
  },
  "20": {
    description: "Binds the target for 2-5 turns."
  },
  "21": {
    description: "Slams the foe with a tail, vine, etc."
  },
  "22": {
    description: "Whips the foe with slender vines."
  },
  "23": {
    description: "An attack that may cause flinching."
  },
  "24": {
    description: "A double kicking attack."
  },
  "25": {
    description: "A powerful kicking attack."
  },
  "26": {
    description: "May miss, damaging the user."
  },
  "27": {
    description: "A fast, spinning kick."
  },
  "28": {
    description: "Reduces accuracy by throwing sand."
  },
  "29": {
    description: "An attack that may make foe flinch."
  },
  "30": {
    description: "An attack using a horn to jab."
  },
  "31": {
    description: "Jabs the target 2-5 times."
  },
  "32": {
    description: "A one-hit KO, drill attack."
  },
  "33": {
    description: "A full-body charge attack."
  },
  "34": {
    description: "An attack that may cause paralysis."
  },
  "35": {
    description: "Squeezes the foe for 2-5 turns."
  },
  "36": {
    description: "A tackle that also hurts the user."
  },
  "37": {
    description: "Works 2-3 turns and confuses user."
  },
  "38": {
    description: "A tackle that also hurts the user."
  },
  "39": {
    description: "Lowers the foe's DEFENSE."
  },
  "40": {
    description: "An attack that may poison the target."
  },
  "41": {
    description: "Jabs the foe twice using stingers."
  },
  "42": {
    description: "Fires pins that strike 2-5 times."
  },
  "43": {
    description: "Reduces the foe's DEFENSE."
  },
  "44": {
    description: "An attack that may cause flinching."
  },
  "45": {
    description: "Reduces the foe's ATTACK."
  },
  "46": {
    description: "Scares wild foes to end battle."
  },
  "47": {
    description: "May cause the foe to fall asleep."
  },
  "48": {
    description: "Sound waves that cause confusion."
  },
  "49": {
    description: "Always inflicts 20HP damage."
  },
  "50": {
    description: "Disables the foe's most recent move."
  },
  "51": {
    description: "An attack that may lower DEFENSE."
  },
  "52": {
    description: "An attack that may inflict a burn."
  },
  "53": {
    description: "An attack that may inflict a burn."
  },
  "54": {
    description: "Prevents stat reduction."
  },
  "55": {
    description: "Squirts water to attack."
  },
  "56": {
    description: "A powerful water- type attack."
  },
  "57": {
    description: "A strong water- type attack."
  },
  "58": {
    description: "An attack that may freeze the foe."
  },
  "59": {
    description: "An attack that may freeze the foe."
  },
  "60": {
    description: "An attack that may confuse the foe."
  },
  "61": {
    description: "An attack that may lower SPEED."
  },
  "62": {
    description: "An attack that may lower ATTACK."
  },
  "63": {
    description: "1st turn: Attack 2nd turn: Rest"
  },
  "64": {
    description: "Jabs the foe with a beak, etc."
  },
  "65": {
    description: "A strong, spin­ ning-peck attack."
  },
  "66": {
    description: "An attack that al­ so hurts the user."
  },
  "67": {
    description: "An attack that may cause flinching."
  },
  "68": {
    description: "Returns a physical blow double."
  },
  "69": {
    description: "The user's level equals damage HP."
  },
  "70": {
    description: "A powerful physi­ cal attack."
  },
  "71": {
    description: "Steals 1/2 of the damage inflicted."
  },
  "72": {
    description: "Steals 1/2 of the damage inflicted."
  },
  "73": {
    description: "Steals HP from the foe on every turn."
  },
  "74": {
    description: "Raises the SPCL. ATK rating."
  },
  "75": {
    description: "Has a high criti­ cal hit ratio."
  },
  "76": {
    description: "1st turn: Prepare 2nd turn: Attack"
  },
  "77": {
    description: "A move that may poison the foe."
  },
  "78": {
    description: "A move that may paralyze the foe."
  },
  "79": {
    description: "May cause the foe to fall asleep."
  },
  "80": {
    description: "Works 2-3 turns and confuses user."
  },
  "81": {
    description: "A move that lowers the foe's SPEED."
  },
  "82": {
    description: "Always inflicts 40HP damage."
  },
  "83": {
    description: "Traps foe in fire for 2-5 turns."
  },
  "84": {
    description: "An attack that may cause paralysis."
  },
  "85": {
    description: "An attack that may cause paralysis."
  },
  "86": {
    description: "A move that may cause paralysis."
  },
  "87": {
    description: "An attack that may cause paralysis."
  },
  "88": {
    description: "Drops rocks on the enemy."
  },
  "89": {
    description: "Tough but useless vs. flying foes."
  },
  "90": {
    description: "A ground-type, one-hit KO attack."
  },
  "91": {
    description: "1st turn: Burrow 2nd turn: Attack"
  },
  "92": {
    description: "A poison move with increasing damage."
  },
  "93": {
    description: "An attack that may cause confusion."
  },
  "94": {
    description: "An attack that may lower SPCL.DEF."
  },
  "95": {
    description: "May put the foe to sleep."
  },
  "96": {
    description: "Raises the user's ATTACK."
  },
  "97": {
    description: "Sharply increases the user's SPEED."
  },
  "98": {
    description: "Lets the user get in the first hit."
  },
  "99": {
    description: "Raises ATTACK if the user is hit."
  },
  "100": {
    description: "A move for fleeing from battle."
  },
  "101": {
    description: "The user's level equals damage HP."
  },
  "102": {
    description: "Copies a move used by the foe."
  },
  "103": {
    description: "Sharply reduces the foe's DEFENSE."
  },
  "104": {
    description: "Heightens evasive­ ness."
  },
  "105": {
    description: "Restores HP by 1/2 the max HP."
  },
  "106": {
    description: "Raises the user's DEFENSE."
  },
  "107": {
    description: "Heightens evasive­ ness."
  },
  "108": {
    description: "Lowers the foe's accuracy."
  },
  "109": {
    description: "A move that causes confusion."
  },
  "110": {
    description: "Heightens the user's DEFENSE."
  },
  "111": {
    description: "Heightens the user's DEFENSE."
  },
  "112": {
    description: "Sharply increases user's DEFENSE."
  },
  "113": {
    description: "Ups SPCL.DEF with a wall of light."
  },
  "114": {
    description: "Eliminates all stat changes."
  },
  "115": {
    description: "Raises DEFENSE with a barrier."
  },
  "116": {
    description: "Raises the criti­ cal hit ratio."
  },
  "117": {
    description: "Waits 2-3 turns & hits back double."
  },
  "118": {
    description: "Randomly uses any POKéMON move."
  },
  "119": {
    description: "Counters with the same move."
  },
  "120": {
    description: "Powerful but makes the user faint."
  },
  "121": {
    description: "Eggs are hurled at the foe."
  },
  "122": {
    description: "An attack that may cause paralysis."
  },
  "123": {
    description: "An attack that may poison the foe."
  },
  "124": {
    description: "An attack that may poison the foe."
  },
  "125": {
    description: "An attack that may cause flinching."
  },
  "126": {
    description: "An attack that may cause a burn."
  },
  "127": {
    description: "An aquatic charge attack."
  },
  "128": {
    description: "Traps the foe for 2-5 turns."
  },
  "129": {
    description: "An attack that never misses."
  },
  "130": {
    description: "1st turn: Prepare 2nd turn: Attack"
  },
  "131": {
    description: "Fires spikes to hit 2-5 times."
  },
  "132": {
    description: "An attack that may lower SPEED."
  },
  "133": {
    description: "Sharply raises the user's SPCL.DEF."
  },
  "134": {
    description: "Reduces the foe's accuracy."
  },
  "135": {
    description: "Restores HP by 1/2 the user's max HP."
  },
  "136": {
    description: "May miss and hurt the user."
  },
  "137": {
    description: "A move that may cause paralysis."
  },
  "138": {
    description: "Steals HP from a sleeping victim."
  },
  "139": {
    description: "A move that may poison the foe."
  },
  "140": {
    description: "Throws orbs to hit 2-5 times."
  },
  "141": {
    description: "Steals 1/2 of the damage inflicted."
  },
  "142": {
    description: "May cause the foe to fall asleep."
  },
  "143": {
    description: "1st turn: Prepare 2nd turn: Attack"
  },
  "144": {
    description: "The user assumes the foe's guise."
  },
  "145": {
    description: "An attack that may reduce SPEED."
  },
  "146": {
    description: "An attack that may cause confusion."
  },
  "147": {
    description: "A move that induces sleep."
  },
  "148": {
    description: "Blinds the foe to reduce accuracy."
  },
  "149": {
    description: "An attack with variable power."
  },
  "150": {
    description: "Has no effect whatsoever."
  },
  "151": {
    description: "Sharply raises the user's DEFENSE."
  },
  "152": {
    description: "Has a high criti­ cal hit ratio."
  },
  "153": {
    description: "Very powerful but makes user faint."
  },
  "154": {
    description: "Quickly scratches 2-5 times."
  },
  "155": {
    description: "An attack that strikes twice."
  },
  "156": {
    description: "Sleep for 2 turns to fully recover."
  },
  "157": {
    description: "An attack that may cause flinching."
  },
  "158": {
    description: "An attack that may cause flinching."
  },
  "159": {
    description: "A move that raises the user's ATTACK."
  },
  "160": {
    description: "Change user's type to a move's type."
  },
  "161": {
    description: "Fires three kinds of beams at once."
  },
  "162": {
    description: "Cuts the foe's HP by 1/2."
  },
  "163": {
    description: "Has a high criti­ cal hit ratio."
  },
  "164": {
    description: "Makes a decoy with 1/4 user's max HP."
  },
  "165": {
    description: "Used only if all PP are exhausted."
  },
}

const stats =
{
  "14": {
    statId: 2,
    statChange: 2
  },
  "28": {
    statId: 7,
    statChange: -1
  },
  "39": {
    statId: 3,
    statChange: -1
  },
  "43": {
    statId: 3,
    statChange: -1
  },
  "45": {
    statId: 2,
    statChange: -1
  },
  "51": {
    statId: 5,
    statChange: -1
  },
  "61": {
    statId: 6,
    statChange: -1
  },
  "62": {
    statId: 2,
    statChange: -1
  },
  "74": {
    statId: 2,
    statChange: 1
  },
  "74": {
    statId: 4,
    statChange: 1
  },
  "81": {
    statId: 6,
    statChange: -2
  },
  "94": {
    statId: 5,
    statChange: -1
  },
  "96": {
    statId: 2,
    statChange: 1
  },
  "97": {
    statId: 6,
    statChange: 2
  },
  "103": {
    statId: 3,
    statChange: -2
  },
  "104": {
    statId: 8,
    statChange: 1
  },
  "106": {
    statId: 3,
    statChange: 1
  },
  "107": {
    statId: 8,
    statChange: 2
  },
  "108": {
    statId: 7,
    statChange: -1
  },
  "110": {
    statId: 3,
    statChange: 1
  },
  "111": {
    statId: 3,
    statChange: 1
  },
  "112": {
    statId: 3,
    statChange: 2
  },
  "132": {
    statId: 6,
    statChange: -1
  },
  "133": {
    statId: 5,
    statChange: 2
  },
  "134": {
    statId: 7,
    statChange: -1
  },
  "145": {
    statId: 6,
    statChange: -1
  },
  "148": {
    statId: 7,
    statChange: -1
  },
  "151": {
    statId: 3,
    statChange: 2
  },
  "159": {
    statId: 2,
    statChange: 1
  },
}

const meta = {
  "1": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "2": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "3": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "4": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "5": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "6": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "7": {
    ailmentId: 4,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "8": {
    ailmentId: 3,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "9": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "10": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "11": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "12": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "13": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "14": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "15": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "16": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "17": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "18": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "19": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "20": {
    ailmentId: 8,
    minHits: null,
    maxHits: null,
    minTurns: 5,
    maxTurns: 6,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 100,
    flinchChance: 0,
    statChance: 0
  },
  "21": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "22": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "23": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "24": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 2,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "25": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "26": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "27": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "28": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "29": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "30": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "31": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "32": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "33": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "34": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 30,
    flinchChance: 0,
    statChance: 0
  },
  "35": {
    ailmentId: 8,
    minHits: null,
    maxHits: null,
    minTurns: 5,
    maxTurns: 6,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 100,
    flinchChance: 0,
    statChance: 0
  },
  "36": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":-25,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "37": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "38": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":-33,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "39": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "40": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 30,
    flinchChance: 0,
    statChance: 0
  },
  "41": {
    ailmentId: 5,
    minHits: 2,
    maxHits: 2,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 20,
    flinchChance: 0,
    statChance: 0
  },
  "42": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "43": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 100
  },
  "44": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "45": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "46": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "47": {
    ailmentId: 2,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "48": {
    ailmentId: 6,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 5,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "49": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "50": {
    ailmentId: 13,
    minHits: null,
    maxHits: null,
    minTurns: 4,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "51": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "52": {
    ailmentId: 4,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "53": {
    ailmentId: 4,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "54": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "55": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "56": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "57": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "58": {
    ailmentId: 3,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "59": {
    ailmentId: 3,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "60": {
    ailmentId: 6,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 5,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "61": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "62": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "63": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "64": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "65": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "66": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":-25,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "67": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "68": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "69": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "70": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "71": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":50,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "72": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":50,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "73": {
    ailmentId: 18,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "74": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "75": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "76": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "77": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "78": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "79": {
    ailmentId: 2,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "80": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "81": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "82": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "83": {
    ailmentId: 8,
    minHits: null,
    maxHits: null,
    minTurns: 5,
    maxTurns: 6,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 100,
    flinchChance: 0,
    statChance: 0
  },
  "84": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "85": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "86": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "87": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 30,
    flinchChance: 0,
    statChance: 0
  },
  "88": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "89": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "90": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "91": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "92": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: 15,
    maxTurns: 15,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "93": {
    ailmentId: 6,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 5,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "94": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "95": {
    ailmentId: 2,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "96": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "97": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "98": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "99": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "100": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "101": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "102": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "103": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "104": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "105": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":50,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "106": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "107": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "108": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "109": {
    ailmentId: 6,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 5,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "110": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "111": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "112": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "113": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "114": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "115": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "116": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "117": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "118": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "119": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "120": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "121": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "122": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 30,
    flinchChance: 0,
    statChance: 0
  },
  "123": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 40,
    flinchChance: 0,
    statChance: 0
  },
  "124": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 30,
    flinchChance: 0,
    statChance: 0
  },
  "125": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 10,
    statChance: 0
  },
  "126": {
    ailmentId: 4,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 10,
    flinchChance: 0,
    statChance: 0
  },
  "127": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 20,
    statChance: 0
  },
  "128": {
    ailmentId: 8,
    minHits: null,
    maxHits: null,
    minTurns: 5,
    maxTurns: 6,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 100,
    flinchChance: 0,
    statChance: 0
  },
  "129": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "130": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 100,
    flinchChance: 0,
    statChance: 0
  },
  "131": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "132": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "133": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "134": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "135": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":50,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "136": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "137": {
    ailmentId: 1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "138": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":50,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "139": {
    ailmentId: 5,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "140": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "141": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":50,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "142": {
    ailmentId: 2,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "143": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "144": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "145": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 10
  },
  "146": {
    ailmentId: 6,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 5,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 20,
    flinchChance: 0,
    statChance: 0
  },
  "147": {
    ailmentId: 2,
    minHits: null,
    maxHits: null,
    minTurns: 2,
    maxTurns: 4,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "148": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "149": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "150": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "151": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "152": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "153": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "154": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 5,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "155": {
    ailmentId: 0,
    minHits: 2,
    maxHits: 2,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "156": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "157": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 30,
    statChance: 0
  },
  "158": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 10,
    statChance: 0
  },
  "159": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "160": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "161": {
    ailmentId: -1,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 20,
    flinchChance: 0,
    statChance: 0
  },
  "162": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "163": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 1,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "164": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":0,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
  "165": {
    ailmentId: 0,
    minHits: null,
    maxHits: null,
    minTurns: null,
    maxTurns: null,
    "drain":0,
    "healing":-25,
    critRate: 0,
    ailmentChance: 0,
    flinchChance: 0,
    statChance: 0
  },
}

const names = {
  "1": {
    "name":"Pound"
  },
  "2": {
    "name":"Karate Chop"
  },
  "3": {
    "name":"Double Slap"
  },
  "4": {
    "name":"Comet Punch"
  },
  "5": {
    "name":"Mega Punch"
  },
  "6": {
    "name":"Pay Day"
  },
  "7": {
    "name":"Fire Punch"
  },
  "8": {
    "name":"Ice Punch"
  },
  "9": {
    "name":"Thunder Punch"
  },
  "10": {
    "name":"Scratch"
  },
  "11": {
    "name":"Vice Grip"
  },
  "12": {
    "name":"Guillotine"
  },
  "13": {
    "name":"Razor Wind"
  },
  "14": {
    "name":"Swords Dance"
  },
  "15": {
    "name":"Cut"
  },
  "16": {
    "name":"Gust"
  },
  "17": {
    "name":"Wing Attack"
  },
  "18": {
    "name":"Whirlwind"
  },
  "19": {
    "name":"Fly"
  },
  "20": {
    "name":"Bind"
  },
  "21": {
    "name":"Slam"
  },
  "22": {
    "name":"Vine Whip"
  },
  "23": {
    "name":"Stomp"
  },
  "24": {
    "name":"Double Kick"
  },
  "25": {
    "name":"Mega Kick"
  },
  "26": {
    "name":"Jump Kick"
  },
  "27": {
    "name":"Rolling Kick"
  },
  "28": {
    "name":"Sand Attack"
  },
  "29": {
    "name":"Headbutt"
  },
  "30": {
    "name":"Horn Attack"
  },
  "31": {
    "name":"Fury Attack"
  },
  "32": {
    "name":"Horn Drill"
  },
  "33": {
    "name":"Tackle"
  },
  "34": {
    "name":"Body Slam"
  },
  "35": {
    "name":"Wrap"
  },
  "36": {
    "name":"Take Down"
  },
  "37": {
    "name":"Thrash"
  },
  "38": {
    "name":"Double-Edge"
  },
  "39": {
    "name":"Tail Whip"
  },
  "40": {
    "name":"Poison Sting"
  },
  "41": {
    "name":"Twineedle"
  },
  "42": {
    "name":"Pin Missile"
  },
  "43": {
    "name":"Leer"
  },
  "44": {
    "name":"Bite"
  },
  "45": {
    "name":"Growl"
  },
  "46": {
    "name":"Roar"
  },
  "47": {
    "name":"Sing"
  },
  "48": {
    "name":"Supersonic"
  },
  "49": {
    "name":"Sonic Boom"
  },
  "50": {
    "name":"Disable"
  },
  "51": {
    "name":"Acid"
  },
  "52": {
    "name":"Ember"
  },
  "53": {
    "name":"Flamethrower"
  },
  "54": {
    "name":"Mist"
  },
  "55": {
    "name":"Water Gun"
  },
  "56": {
    "name":"Hydro Pump"
  },
  "57": {
    "name":"Surf"
  },
  "58": {
    "name":"Ice Beam"
  },
  "59": {
    "name":"Blizzard"
  },
  "60": {
    "name":"Psybeam"
  },
  "61": {
    "name":"Bubble Beam"
  },
  "62": {
    "name":"Aurora Beam"
  },
  "63": {
    "name":"Hyper Beam"
  },
  "64": {
    "name":"Peck"
  },
  "65": {
    "name":"Drill Peck"
  },
  "66": {
    "name":"Submission"
  },
  "67": {
    "name":"Low Kick"
  },
  "68": {
    "name":"Counter"
  },
  "69": {
    "name":"Seismic Toss"
  },
  "70": {
    "name":"Strength"
  },
  "71": {
    "name":"Absorb"
  },
  "72": {
    "name":"Mega Drain"
  },
  "73": {
    "name":"Leech Seed"
  },
  "74": {
    "name":"Growth"
  },
  "75": {
    "name":"Razor Leaf"
  },
  "76": {
    "name":"Solar Beam"
  },
  "77": {
    "name":"Poison Powder"
  },
  "78": {
    "name":"Stun Spore"
  },
  "79": {
    "name":"Sleep Powder"
  },
  "80": {
    "name":"Petal Dance"
  },
  "81": {
    "name":"String Shot"
  },
  "82": {
    "name":"Dragon Rage"
  },
  "83": {
    "name":"Fire Spin"
  },
  "84": {
    "name":"Thunder Shock"
  },
  "85": {
    "name":"Thunderbolt"
  },
  "86": {
    "name":"Thunder Wave"
  },
  "87": {
    "name":"Thunder"
  },
  "88": {
    "name":"Rock Throw"
  },
  "89": {
    "name":"Earthquake"
  },
  "90": {
    "name":"Fissure"
  },
  "91": {
    "name":"Dig"
  },
  "92": {
    "name":"Toxic"
  },
  "93": {
    "name":"Confusion"
  },
  "94": {
    "name":"Psychic"
  },
  "95": {
    "name":"Hypnosis"
  },
  "96": {
    "name":"Meditate"
  },
  "97": {
    "name":"Agility"
  },
  "98": {
    "name":"Quick Attack"
  },
  "99": {
    "name":"Rage"
  },
  "100": {
    "name":"Teleport"
  },
  "101": {
    "name":"Night Shade"
  },
  "102": {
    "name":"Mimic"
  },
  "103": {
    "name":"Screech"
  },
  "104": {
    "name":"Double Team"
  },
  "105": {
    "name":"Recover"
  },
  "106": {
    "name":"Harden"
  },
  "107": {
    "name":"Minimize"
  },
  "108": {
    "name":"Smokescreen"
  },
  "109": {
    "name":"Confuse Ray"
  },
  "110": {
    "name":"Withdraw"
  },
  "111": {
    "name":"Defense Curl"
  },
  "112": {
    "name":"Barrier"
  },
  "113": {
    "name":"Light Screen"
  },
  "114": {
    "name":"Haze"
  },
  "115": {
    "name":"Reflect"
  },
  "116": {
    "name":"Focus Energy"
  },
  "117": {
    "name":"Bide"
  },
  "118": {
    "name":"Metronome"
  },
  "119": {
    "name":"Mirror Move"
  },
  "120": {
    "name":"Self-Destruct"
  },
  "121": {
    "name":"Egg Bomb"
  },
  "122": {
    "name":"Lick"
  },
  "123": {
    "name":"Smog"
  },
  "124": {
    "name":"Sludge"
  },
  "125": {
    "name":"Bone Club"
  },
  "126": {
    "name":"Fire Blast"
  },
  "127": {
    "name":"Waterfall"
  },
  "128": {
    "name":"Clamp"
  },
  "129": {
    "name":"Swift"
  },
  "130": {
    "name":"Skull Bash"
  },
  "131": {
    "name":"Spike Cannon"
  },
  "132": {
    "name":"Constrict"
  },
  "133": {
    "name":"Amnesia"
  },
  "134": {
    "name":"Kinesis"
  },
  "135": {
    "name":"Soft-Boiled"
  },
  "136": {
    "name":"High Jump Kick"
  },
  "137": {
    "name":"Glare"
  },
  "138": {
    "name":"Dream Eater"
  },
  "139": {
    "name":"Poison Gas"
  },
  "140": {
    "name":"Barrage"
  },
  "141": {
    "name":"Leech Life"
  },
  "142": {
    "name":"Lovely Kiss"
  },
  "143": {
    "name":"Sky Attack"
  },
  "144": {
    "name":"Transform"
  },
  "145": {
    "name":"Bubble"
  },
  "146": {
    "name":"Dizzy Punch"
  },
  "147": {
    "name":"Spore"
  },
  "148": {
    "name":"Flash"
  },
  "149": {
    "name":"Psywave"
  },
  "150": {
    "name":"Splash"
  },
  "151": {
    "name":"Acid Armor"
  },
  "152": {
    "name":"Crabhammer"
  },
  "153": {
    "name":"Explosion"
  },
  "154": {
    "name":"Fury Swipes"
  },
  "155": {
    "name":"Bonemerang"
  },
  "156": {
    "name":"Rest"
  },
  "157": {
    "name":"Rock Slide"
  },
  "158": {
    "name":"Hyper Fang"
  },
  "159": {
    "name":"Sharpen"
  },
  "160": {
    "name":"Conversion"
  },
  "161": {
    "name":"Tri Attack"
  },
  "162": {
    "name":"Super Fang"
  },
  "163": {
    "name":"Slash"
  },
  "164": {
    "name":"Substitute"
  },
  "165": {
    "name":"Struggle"
  },
}

const data = Object.assign({}, moves, descriptions, meta, stats, names);

class Move extends Object {}

export default {
  Move,
  moves: Object.keys(data).map((id) => {
    const model = new Move();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
