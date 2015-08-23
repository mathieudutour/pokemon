const moves = {
  "1": {
    "identifier":"pound",
    "type_id":1,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null,
    "flavor_text":"Pounds with fore­ legs or tail."
  },
  "2": {
    "identifier":"karate-chop",
    "type_id":2,
    "power":50,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":44,
    "effect_chance":null,
    "flavor_text":"Has a high criti­ cal hit ratio."
  },
  "3": {
    "identifier":"double-slap",
    "type_id":1,
    "power":15,
    "pp":10,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null,
    "flavor_text":"Repeatedly slaps 2-5 times."
  },
  "4": {
    "identifier":"comet-punch",
    "type_id":1,
    "power":18,
    "pp":15,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null,
    "flavor_text":"Repeatedly punches 2-5 times."
  },
  "5": {
    "identifier":"mega-punch",
    "type_id":1,
    "power":80,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "6": {
    "identifier":"pay-day",
    "type_id":1,
    "power":40,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":35,
    "effect_chance":null
  },
  "7": {
    "identifier":"fire-punch",
    "type_id":10,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":5,
    "effect_chance":10
  },
  "8": {
    "identifier":"ice-punch",
    "type_id":15,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":6,
    "effect_chance":10
  },
  "9": {
    "identifier":"thunder-punch",
    "type_id":13,
    "power":75,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":7,
    "effect_chance":10
  },
  "10": {
    "identifier":"scratch",
    "type_id":1,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "11": {
    "identifier":"vice-grip",
    "type_id":1,
    "power":55,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "12": {
    "identifier":"guillotine",
    "type_id":1,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":39,
    "effect_chance":null
  },
  "13": {
    "identifier":"razor-wind",
    "type_id":1,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":3,
    "effect_id":40,
    "effect_chance":null
  },
  "14": {
    "identifier":"swords-dance",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":51,
    "effect_chance":null
  },
  "15": {
    "identifier":"cut",
    "type_id":1,
    "power":50,
    "pp":30,
    "accuracy":95,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "16": {
    "identifier":"gust",
    "type_id":3,
    "power":40,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":150,
    "effect_chance":null
  },
  "17": {
    "identifier":"wing-attack",
    "type_id":3,
    "power":60,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "18": {
    "identifier":"whirlwind",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":-6,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":29,
    "effect_chance":null
  },
  "19": {
    "identifier":"fly",
    "type_id":3,
    "power":90,
    "pp":15,
    "accuracy":95,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":156,
    "effect_chance":null
  },
  "20": {
    "identifier":"bind",
    "type_id":1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":43,
    "effect_chance":100
  },
  "21": {
    "identifier":"slam",
    "type_id":1,
    "power":80,
    "pp":20,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "22": {
    "identifier":"vine-whip",
    "type_id":12,
    "power":45,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "23": {
    "identifier":"stomp",
    "type_id":1,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":151,
    "effect_chance":30
  },
  "24": {
    "identifier":"double-kick",
    "type_id":2,
    "power":30,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":45,
    "effect_chance":null
  },
  "25": {
    "identifier":"mega-kick",
    "type_id":1,
    "power":120,
    "pp":5,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "26": {
    "identifier":"jump-kick",
    "type_id":2,
    "power":100,
    "pp":10,
    "accuracy":95,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":46,
    "effect_chance":null
  },
  "27": {
    "identifier":"rolling-kick",
    "type_id":2,
    "power":60,
    "pp":15,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":30
  },
  "28": {
    "identifier":"sand-attack",
    "type_id":5,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":24,
    "effect_chance":null
  },
  "29": {
    "identifier":"headbutt",
    "type_id":1,
    "power":70,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":30
  },
  "30": {
    "identifier":"horn-attack",
    "type_id":1,
    "power":65,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "31": {
    "identifier":"fury-attack",
    "type_id":1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null
  },
  "32": {
    "identifier":"horn-drill",
    "type_id":1,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":39,
    "effect_chance":null
  },
  "33": {
    "identifier":"tackle",
    "type_id":1,
    "power":50,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "34": {
    "identifier":"body-slam",
    "type_id":1,
    "power":85,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":7,
    "effect_chance":30
  },
  "35": {
    "identifier":"wrap",
    "type_id":1,
    "power":15,
    "pp":20,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":43,
    "effect_chance":100
  },
  "36": {
    "identifier":"take-down",
    "type_id":1,
    "power":90,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":49,
    "effect_chance":null
  },
  "37": {
    "identifier":"thrash",
    "type_id":1,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":8,
    "damage_class_id":2,
    "effect_id":28,
    "effect_chance":null
  },
  "38": {
    "identifier":"double-edge",
    "type_id":1,
    "power":120,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":199,
    "effect_chance":null
  },
  "39": {
    "identifier":"tail-whip",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":1,
    "effect_id":20,
    "effect_chance":null
  },
  "40": {
    "identifier":"poison-sting",
    "type_id":4,
    "power":15,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":3,
    "effect_chance":30
  },
  "41": {
    "identifier":"twineedle",
    "type_id":7,
    "power":25,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":78,
    "effect_chance":20
  },
  "42": {
    "identifier":"pin-missile",
    "type_id":7,
    "power":25,
    "pp":20,
    "accuracy":95,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null
  },
  "43": {
    "identifier":"leer",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":1,
    "effect_id":20,
    "effect_chance":100
  },
  "44": {
    "identifier":"bite",
    "type_id":17,
    "power":60,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":30
  },
  "45": {
    "identifier":"growl",
    "type_id":1,
    "power":null,
    "pp":40,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":1,
    "effect_id":19,
    "effect_chance":null
  },
  "46": {
    "identifier":"roar",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":-6,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":29,
    "effect_chance":null
  },
  "47": {
    "identifier":"sing",
    "type_id":1,
    "power":null,
    "pp":15,
    "accuracy":55,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":2,
    "effect_chance":null
  },
  "48": {
    "identifier":"supersonic",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":55,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":50,
    "effect_chance":null
  },
  "49": {
    "identifier":"sonic-boom",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":131,
    "effect_chance":null
  },
  "50": {
    "identifier":"disable",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":87,
    "effect_chance":null
  },
  "51": {
    "identifier":"acid",
    "type_id":4,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":3,
    "effect_id":73,
    "effect_chance":10
  },
  "52": {
    "identifier":"ember",
    "type_id":10,
    "power":40,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":5,
    "effect_chance":10
  },
  "53": {
    "identifier":"flamethrower",
    "type_id":10,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":5,
    "effect_chance":10
  },
  "54": {
    "identifier":"mist",
    "type_id":15,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":4,
    "damage_class_id":1,
    "effect_id":47,
    "effect_chance":null
  },
  "55": {
    "identifier":"water-gun",
    "type_id":11,
    "power":40,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":1,
    "effect_chance":null
  },
  "56": {
    "identifier":"hydro-pump",
    "type_id":11,
    "power":110,
    "pp":5,
    "accuracy":80,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":1,
    "effect_chance":null
  },
  "57": {
    "identifier":"surf",
    "type_id":11,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":9,
    "damage_class_id":3,
    "effect_id":258,
    "effect_chance":null
  },
  "58": {
    "identifier":"ice-beam",
    "type_id":15,
    "power":90,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":6,
    "effect_chance":10
  },
  "59": {
    "identifier":"blizzard",
    "type_id":15,
    "power":110,
    "pp":5,
    "accuracy":70,
    "priority":0,
    "target_id":11,
    "damage_class_id":3,
    "effect_id":261,
    "effect_chance":10
  },
  "60": {
    "identifier":"psybeam",
    "type_id":14,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":77,
    "effect_chance":10
  },
  "61": {
    "identifier":"bubble-beam",
    "type_id":11,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":71,
    "effect_chance":10
  },
  "62": {
    "identifier":"aurora-beam",
    "type_id":15,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":69,
    "effect_chance":10
  },
  "63": {
    "identifier":"hyper-beam",
    "type_id":1,
    "power":150,
    "pp":5,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":81,
    "effect_chance":null
  },
  "64": {
    "identifier":"peck",
    "type_id":3,
    "power":35,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "65": {
    "identifier":"drill-peck",
    "type_id":3,
    "power":80,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "66": {
    "identifier":"submission",
    "type_id":2,
    "power":80,
    "pp":20,
    "accuracy":80,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":49,
    "effect_chance":null
  },
  "67": {
    "identifier":"low-kick",
    "type_id":2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":197,
    "effect_chance":null
  },
  "68": {
    "identifier":"counter",
    "type_id":2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":-5,
    "target_id":1,
    "damage_class_id":2,
    "effect_id":90,
    "effect_chance":null
  },
  "69": {
    "identifier":"seismic-toss",
    "type_id":2,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":88,
    "effect_chance":null
  },
  "70": {
    "identifier":"strength",
    "type_id":1,
    "power":80,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "71": {
    "identifier":"absorb",
    "type_id":12,
    "power":20,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":4,
    "effect_chance":null
  },
  "72": {
    "identifier":"mega-drain",
    "type_id":12,
    "power":40,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":4,
    "effect_chance":null
  },
  "73": {
    "identifier":"leech-seed",
    "type_id":12,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":85,
    "effect_chance":null
  },
  "74": {
    "identifier":"growth",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":317,
    "effect_chance":null
  },
  "75": {
    "identifier":"razor-leaf",
    "type_id":12,
    "power":55,
    "pp":25,
    "accuracy":95,
    "priority":0,
    "target_id":11,
    "damage_class_id":2,
    "effect_id":44,
    "effect_chance":null
  },
  "76": {
    "identifier":"solar-beam",
    "type_id":12,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":152,
    "effect_chance":null
  },
  "77": {
    "identifier":"poison-powder",
    "type_id":4,
    "power":null,
    "pp":35,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":67,
    "effect_chance":null
  },
  "78": {
    "identifier":"stun-spore",
    "type_id":12,
    "power":null,
    "pp":30,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":68,
    "effect_chance":null
  },
  "79": {
    "identifier":"sleep-powder",
    "type_id":12,
    "power":null,
    "pp":15,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":2,
    "effect_chance":null
  },
  "80": {
    "identifier":"petal-dance",
    "type_id":12,
    "power":120,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":8,
    "damage_class_id":3,
    "effect_id":28,
    "effect_chance":null
  },
  "81": {
    "identifier":"string-shot",
    "type_id":7,
    "power":null,
    "pp":40,
    "accuracy":95,
    "priority":0,
    "target_id":11,
    "damage_class_id":1,
    "effect_id":21,
    "effect_chance":null
  },
  "82": {
    "identifier":"dragon-rage",
    "type_id":16,
    "power":null,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":42,
    "effect_chance":null
  },
  "83": {
    "identifier":"fire-spin",
    "type_id":10,
    "power":35,
    "pp":15,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":43,
    "effect_chance":100
  },
  "84": {
    "identifier":"thunder-shock",
    "type_id":13,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":7,
    "effect_chance":10
  },
  "85": {
    "identifier":"thunderbolt",
    "type_id":13,
    "power":90,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":7,
    "effect_chance":10
  },
  "86": {
    "identifier":"thunder-wave",
    "type_id":13,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":68,
    "effect_chance":null
  },
  "87": {
    "identifier":"thunder",
    "type_id":13,
    "power":110,
    "pp":10,
    "accuracy":70,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":153,
    "effect_chance":30
  },
  "88": {
    "identifier":"rock-throw",
    "type_id":6,
    "power":50,
    "pp":15,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "89": {
    "identifier":"earthquake",
    "type_id":5,
    "power":100,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":9,
    "damage_class_id":2,
    "effect_id":148,
    "effect_chance":null
  },
  "90": {
    "identifier":"fissure",
    "type_id":5,
    "power":null,
    "pp":5,
    "accuracy":30,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":39,
    "effect_chance":null
  },
  "91": {
    "identifier":"dig",
    "type_id":5,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":257,
    "effect_chance":null
  },
  "92": {
    "identifier":"toxic",
    "type_id":4,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":34,
    "effect_chance":null
  },
  "93": {
    "identifier":"confusion",
    "type_id":14,
    "power":50,
    "pp":25,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":77,
    "effect_chance":10
  },
  "94": {
    "identifier":"psychic",
    "type_id":14,
    "power":90,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":73,
    "effect_chance":10
  },
  "95": {
    "identifier":"hypnosis",
    "type_id":14,
    "power":null,
    "pp":20,
    "accuracy":60,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":2,
    "effect_chance":null
  },
  "96": {
    "identifier":"meditate",
    "type_id":14,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":11,
    "effect_chance":null
  },
  "97": {
    "identifier":"agility",
    "type_id":14,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":53,
    "effect_chance":null
  },
  "98": {
    "identifier":"quick-attack",
    "type_id":1,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":1,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":104,
    "effect_chance":null
  },
  "99": {
    "identifier":"rage",
    "type_id":1,
    "power":20,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":82,
    "effect_chance":null
  },
  "100": {
    "identifier":"teleport",
    "type_id":14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":154,
    "effect_chance":null
  },
  "101": {
    "identifier":"night-shade",
    "type_id":8,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":88,
    "effect_chance":null
  },
  "102": {
    "identifier":"mimic",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":83,
    "effect_chance":null
  },
  "103": {
    "identifier":"screech",
    "type_id":1,
    "power":null,
    "pp":40,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":60,
    "effect_chance":null
  },
  "104": {
    "identifier":"double-team",
    "type_id":1,
    "power":null,
    "pp":15,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":17,
    "effect_chance":null
  },
  "105": {
    "identifier":"recover",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":33,
    "effect_chance":null
  },
  "106": {
    "identifier":"harden",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":12,
    "effect_chance":null
  },
  "107": {
    "identifier":"minimize",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":109,
    "effect_chance":null
  },
  "108": {
    "identifier":"smokescreen",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":24,
    "effect_chance":null
  },
  "109": {
    "identifier":"confuse-ray",
    "type_id":8,
    "power":null,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":50,
    "effect_chance":null
  },
  "110": {
    "identifier":"withdraw",
    "type_id":11,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":12,
    "effect_chance":null
  },
  "111": {
    "identifier":"defense-curl",
    "type_id":1,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":157,
    "effect_chance":null
  },
  "112": {
    "identifier":"barrier",
    "type_id":14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":52,
    "effect_chance":null
  },
  "113": {
    "identifier":"light-screen",
    "type_id":14,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":4,
    "damage_class_id":1,
    "effect_id":36,
    "effect_chance":null
  },
  "114": {
    "identifier":"haze",
    "type_id":15,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":12,
    "damage_class_id":1,
    "effect_id":26,
    "effect_chance":null
  },
  "115": {
    "identifier":"reflect",
    "type_id":14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":4,
    "damage_class_id":1,
    "effect_id":66,
    "effect_chance":null
  },
  "116": {
    "identifier":"focus-energy",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":48,
    "effect_chance":null
  },
  "117": {
    "identifier":"bide",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":1,
    "target_id":7,
    "damage_class_id":2,
    "effect_id":27,
    "effect_chance":null
  },
  "118": {
    "identifier":"metronome",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":84,
    "effect_chance":null
  },
  "119": {
    "identifier":"mirror-move",
    "type_id":3,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":10,
    "effect_chance":null
  },
  "120": {
    "identifier":"self-destruct",
    "type_id":1,
    "power":200,
    "pp":5,
    "accuracy":100,
    "priority":0,
    "target_id":9,
    "damage_class_id":2,
    "effect_id":8,
    "effect_chance":null
  },
  "121": {
    "identifier":"egg-bomb",
    "type_id":1,
    "power":100,
    "pp":10,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":1,
    "effect_chance":null
  },
  "122": {
    "identifier":"lick",
    "type_id":8,
    "power":30,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":7,
    "effect_chance":30
  },
  "123": {
    "identifier":"smog",
    "type_id":4,
    "power":30,
    "pp":20,
    "accuracy":70,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":3,
    "effect_chance":40
  },
  "124": {
    "identifier":"sludge",
    "type_id":4,
    "power":65,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":3,
    "effect_chance":30
  },
  "125": {
    "identifier":"bone-club",
    "type_id":5,
    "power":65,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":10
  },
  "126": {
    "identifier":"fire-blast",
    "type_id":10,
    "power":110,
    "pp":5,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":5,
    "effect_chance":10
  },
  "127": {
    "identifier":"waterfall",
    "type_id":11,
    "power":80,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":20
  },
  "128": {
    "identifier":"clamp",
    "type_id":11,
    "power":35,
    "pp":15,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":43,
    "effect_chance":100
  },
  "129": {
    "identifier":"swift",
    "type_id":1,
    "power":60,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":11,
    "damage_class_id":3,
    "effect_id":18,
    "effect_chance":null
  },
  "130": {
    "identifier":"skull-bash",
    "type_id":1,
    "power":130,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":146,
    "effect_chance":100
  },
  "131": {
    "identifier":"spike-cannon",
    "type_id":1,
    "power":20,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null
  },
  "132": {
    "identifier":"constrict",
    "type_id":1,
    "power":10,
    "pp":35,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":71,
    "effect_chance":10
  },
  "133": {
    "identifier":"amnesia",
    "type_id":14,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":55,
    "effect_chance":null
  },
  "134": {
    "identifier":"kinesis",
    "type_id":14,
    "power":null,
    "pp":15,
    "accuracy":80,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":24,
    "effect_chance":null
  },
  "135": {
    "identifier":"soft-boiled",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":33,
    "effect_chance":null
  },
  "136": {
    "identifier":"high-jump-kick",
    "type_id":2,
    "power":130,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":46,
    "effect_chance":null
  },
  "137": {
    "identifier":"glare",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":68,
    "effect_chance":null
  },
  "138": {
    "identifier":"dream-eater",
    "type_id":14,
    "power":100,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":9,
    "effect_chance":null
  },
  "139": {
    "identifier":"poison-gas",
    "type_id":4,
    "power":null,
    "pp":40,
    "accuracy":90,
    "priority":0,
    "target_id":11,
    "damage_class_id":1,
    "effect_id":67,
    "effect_chance":null
  },
  "140": {
    "identifier":"barrage",
    "type_id":1,
    "power":15,
    "pp":20,
    "accuracy":85,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null
  },
  "141": {
    "identifier":"leech-life",
    "type_id":7,
    "power":20,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":4,
    "effect_chance":null
  },
  "142": {
    "identifier":"lovely-kiss",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":75,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":2,
    "effect_chance":null
  },
  "143": {
    "identifier":"sky-attack",
    "type_id":3,
    "power":140,
    "pp":5,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":76,
    "effect_chance":30
  },
  "144": {
    "identifier":"transform",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":58,
    "effect_chance":null
  },
  "145": {
    "identifier":"bubble",
    "type_id":11,
    "power":40,
    "pp":30,
    "accuracy":100,
    "priority":0,
    "target_id":11,
    "damage_class_id":3,
    "effect_id":71,
    "effect_chance":10
  },
  "146": {
    "identifier":"dizzy-punch",
    "type_id":1,
    "power":70,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":77,
    "effect_chance":20
  },
  "147": {
    "identifier":"spore",
    "type_id":12,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":2,
    "effect_chance":null
  },
  "148": {
    "identifier":"flash",
    "type_id":1,
    "power":null,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":1,
    "effect_id":24,
    "effect_chance":null
  },
  "149": {
    "identifier":"psywave",
    "type_id":14,
    "power":null,
    "pp":15,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":89,
    "effect_chance":null
  },
  "150": {
    "identifier":"splash",
    "type_id":1,
    "power":null,
    "pp":40,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":86,
    "effect_chance":null
  },
  "151": {
    "identifier":"acid-armor",
    "type_id":4,
    "power":null,
    "pp":20,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":52,
    "effect_chance":null
  },
  "152": {
    "identifier":"crabhammer",
    "type_id":11,
    "power":100,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":44,
    "effect_chance":null
  },
  "153": {
    "identifier":"explosion",
    "type_id":1,
    "power":250,
    "pp":5,
    "accuracy":100,
    "priority":0,
    "target_id":9,
    "damage_class_id":2,
    "effect_id":8,
    "effect_chance":null
  },
  "154": {
    "identifier":"fury-swipes",
    "type_id":1,
    "power":18,
    "pp":15,
    "accuracy":80,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":30,
    "effect_chance":null
  },
  "155": {
    "identifier":"bonemerang",
    "type_id":5,
    "power":50,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":45,
    "effect_chance":null
  },
  "156": {
    "identifier":"rest",
    "type_id":14,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":38,
    "effect_chance":null
  },
  "157": {
    "identifier":"rock-slide",
    "type_id":6,
    "power":75,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":11,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":30
  },
  "158": {
    "identifier":"hyper-fang",
    "type_id":1,
    "power":80,
    "pp":15,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":32,
    "effect_chance":10
  },
  "159": {
    "identifier":"sharpen",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":11,
    "effect_chance":null
  },
  "160": {
    "identifier":"conversion",
    "type_id":1,
    "power":null,
    "pp":30,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":31,
    "effect_chance":null
  },
  "161": {
    "identifier":"tri-attack",
    "type_id":1,
    "power":80,
    "pp":10,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":3,
    "effect_id":37,
    "effect_chance":20
  },
  "162": {
    "identifier":"super-fang",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":90,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":41,
    "effect_chance":null
  },
  "163": {
    "identifier":"slash",
    "type_id":1,
    "power":70,
    "pp":20,
    "accuracy":100,
    "priority":0,
    "target_id":10,
    "damage_class_id":2,
    "effect_id":44,
    "effect_chance":null
  },
  "164": {
    "identifier":"substitute",
    "type_id":1,
    "power":null,
    "pp":10,
    "accuracy":null,
    "priority":0,
    "target_id":7,
    "damage_class_id":1,
    "effect_id":80,
    "effect_chance":null
  },
  "165": {
    "identifier":"struggle",
    "type_id":1,
    "power":50,
    "pp":null,
    "accuracy":null,
    "priority":0,
    "target_id":8,
    "damage_class_id":2,
    "effect_id":255,
    "effect_chance":null
  },
};
const names = {
  "5": {
    "flavor_text":"A powerful punch thrown very hard."
  },
  "6": {
    "flavor_text":"Throws coins. Gets them back later."
  },
  "7": {
    "flavor_text":"A fiery punch. May cause a burn."
  },
  "8": {
    "flavor_text":"An icy punch. May cause freezing."
  },
  "9": {
    "flavor_text":"An electric punch. It may paralyze."
  },
  "10": {
    "flavor_text":"Scratches with sharp claws."
  },
  "11": {
    "flavor_text":"Grips with power­ ful pincers."
  },
  "12": {
    "flavor_text":"A one-hit KO, pincer attack."
  },
  "13": {
    "flavor_text":"1st turn: Prepare 2nd turn: Attack"
  },
  "14": {
    "flavor_text":"A dance that in­ creases ATTACK."
  },
  "15": {
    "flavor_text":"Cuts using claws, scythes, etc."
  },
  "16": {
    "flavor_text":"Whips up a strong gust of wind."
  },
  "17": {
    "flavor_text":"Strikes the target with wings."
  },
  "18": {
    "flavor_text":"Blows away the foe & ends battle."
  },
  "19": {
    "flavor_text":"1st turn: Fly 2nd turn: Attack"
  },
  "20": {
    "flavor_text":"Binds the target for 2-5 turns."
  },
  "21": {
    "flavor_text":"Slams the foe with a tail, vine, etc."
  },
  "22": {
    "flavor_text":"Whips the foe with slender vines."
  },
  "23": {
    "flavor_text":"An attack that may cause flinching."
  },
  "24": {
    "flavor_text":"A double kicking attack."
  },
  "25": {
    "flavor_text":"A powerful kicking attack."
  },
  "26": {
    "flavor_text":"May miss, damaging the user."
  },
  "27": {
    "flavor_text":"A fast, spinning kick."
  },
  "28": {
    "flavor_text":"Reduces accuracy by throwing sand."
  },
  "29": {
    "flavor_text":"An attack that may make foe flinch."
  },
  "30": {
    "flavor_text":"An attack using a horn to jab."
  },
  "31": {
    "flavor_text":"Jabs the target 2-5 times."
  },
  "32": {
    "flavor_text":"A one-hit KO, drill attack."
  },
  "33": {
    "flavor_text":"A full-body charge attack."
  },
  "34": {
    "flavor_text":"An attack that may cause paralysis."
  },
  "35": {
    "flavor_text":"Squeezes the foe for 2-5 turns."
  },
  "36": {
    "flavor_text":"A tackle that also hurts the user."
  },
  "37": {
    "flavor_text":"Works 2-3 turns and confuses user."
  },
  "38": {
    "flavor_text":"A tackle that also hurts the user."
  },
  "39": {
    "flavor_text":"Lowers the foe's DEFENSE."
  },
  "40": {
    "flavor_text":"An attack that may poison the target."
  },
  "41": {
    "flavor_text":"Jabs the foe twice using stingers."
  },
  "42": {
    "flavor_text":"Fires pins that strike 2-5 times."
  },
  "43": {
    "flavor_text":"Reduces the foe's DEFENSE."
  },
  "44": {
    "flavor_text":"An attack that may cause flinching."
  },
  "45": {
    "flavor_text":"Reduces the foe's ATTACK."
  },
  "46": {
    "flavor_text":"Scares wild foes to end battle."
  },
  "47": {
    "flavor_text":"May cause the foe to fall asleep."
  },
  "48": {
    "flavor_text":"Sound waves that cause confusion."
  },
  "49": {
    "flavor_text":"Always inflicts 20HP damage."
  },
  "50": {
    "flavor_text":"Disables the foe's most recent move."
  },
  "51": {
    "flavor_text":"An attack that may lower DEFENSE."
  },
  "52": {
    "flavor_text":"An attack that may inflict a burn."
  },
  "53": {
    "flavor_text":"An attack that may inflict a burn."
  },
  "54": {
    "flavor_text":"Prevents stat reduction."
  },
  "55": {
    "flavor_text":"Squirts water to attack."
  },
  "56": {
    "flavor_text":"A powerful water- type attack."
  },
  "57": {
    "flavor_text":"A strong water- type attack."
  },
  "58": {
    "flavor_text":"An attack that may freeze the foe."
  },
  "59": {
    "flavor_text":"An attack that may freeze the foe."
  },
  "60": {
    "flavor_text":"An attack that may confuse the foe."
  },
  "61": {
    "flavor_text":"An attack that may lower SPEED."
  },
  "62": {
    "flavor_text":"An attack that may lower ATTACK."
  },
  "63": {
    "flavor_text":"1st turn: Attack 2nd turn: Rest"
  },
  "64": {
    "flavor_text":"Jabs the foe with a beak, etc."
  },
  "65": {
    "flavor_text":"A strong, spin­ ning-peck attack."
  },
  "66": {
    "flavor_text":"An attack that al­ so hurts the user."
  },
  "67": {
    "flavor_text":"An attack that may cause flinching."
  },
  "68": {
    "flavor_text":"Returns a physical blow double."
  },
  "69": {
    "flavor_text":"The user's level equals damage HP."
  },
  "70": {
    "flavor_text":"A powerful physi­ cal attack."
  },
  "71": {
    "flavor_text":"Steals 1/2 of the damage inflicted."
  },
  "72": {
    "flavor_text":"Steals 1/2 of the damage inflicted."
  },
  "73": {
    "flavor_text":"Steals HP from the foe on every turn."
  },
  "74": {
    "flavor_text":"Raises the SPCL. ATK rating."
  },
  "75": {
    "flavor_text":"Has a high criti­ cal hit ratio."
  },
  "76": {
    "flavor_text":"1st turn: Prepare 2nd turn: Attack"
  },
  "77": {
    "flavor_text":"A move that may poison the foe."
  },
  "78": {
    "flavor_text":"A move that may paralyze the foe."
  },
  "79": {
    "flavor_text":"May cause the foe to fall asleep."
  },
  "80": {
    "flavor_text":"Works 2-3 turns and confuses user."
  },
  "81": {
    "flavor_text":"A move that lowers the foe's SPEED."
  },
  "82": {
    "flavor_text":"Always inflicts 40HP damage."
  },
  "83": {
    "flavor_text":"Traps foe in fire for 2-5 turns."
  },
  "84": {
    "flavor_text":"An attack that may cause paralysis."
  },
  "85": {
    "flavor_text":"An attack that may cause paralysis."
  },
  "86": {
    "flavor_text":"A move that may cause paralysis."
  },
  "87": {
    "flavor_text":"An attack that may cause paralysis."
  },
  "88": {
    "flavor_text":"Drops rocks on the enemy."
  },
  "89": {
    "flavor_text":"Tough but useless vs. flying foes."
  },
  "90": {
    "flavor_text":"A ground-type, one-hit KO attack."
  },
  "91": {
    "flavor_text":"1st turn: Burrow 2nd turn: Attack"
  },
  "92": {
    "flavor_text":"A poison move with increasing damage."
  },
  "93": {
    "flavor_text":"An attack that may cause confusion."
  },
  "94": {
    "flavor_text":"An attack that may lower SPCL.DEF."
  },
  "95": {
    "flavor_text":"May put the foe to sleep."
  },
  "96": {
    "flavor_text":"Raises the user's ATTACK."
  },
  "97": {
    "flavor_text":"Sharply increases the user's SPEED."
  },
  "98": {
    "flavor_text":"Lets the user get in the first hit."
  },
  "99": {
    "flavor_text":"Raises ATTACK if the user is hit."
  },
  "100": {
    "flavor_text":"A move for fleeing from battle."
  },
  "101": {
    "flavor_text":"The user's level equals damage HP."
  },
  "102": {
    "flavor_text":"Copies a move used by the foe."
  },
  "103": {
    "flavor_text":"Sharply reduces the foe's DEFENSE."
  },
  "104": {
    "flavor_text":"Heightens evasive­ ness."
  },
  "105": {
    "flavor_text":"Restores HP by 1/2 the max HP."
  },
  "106": {
    "flavor_text":"Raises the user's DEFENSE."
  },
  "107": {
    "flavor_text":"Heightens evasive­ ness."
  },
  "108": {
    "flavor_text":"Lowers the foe's accuracy."
  },
  "109": {
    "flavor_text":"A move that causes confusion."
  },
  "110": {
    "flavor_text":"Heightens the user's DEFENSE."
  },
  "111": {
    "flavor_text":"Heightens the user's DEFENSE."
  },
  "112": {
    "flavor_text":"Sharply increases user's DEFENSE."
  },
  "113": {
    "flavor_text":"Ups SPCL.DEF with a wall of light."
  },
  "114": {
    "flavor_text":"Eliminates all stat changes."
  },
  "115": {
    "flavor_text":"Raises DEFENSE with a barrier."
  },
  "116": {
    "flavor_text":"Raises the criti­ cal hit ratio."
  },
  "117": {
    "flavor_text":"Waits 2-3 turns & hits back double."
  },
  "118": {
    "flavor_text":"Randomly uses any POKéMON move."
  },
  "119": {
    "flavor_text":"Counters with the same move."
  },
  "120": {
    "flavor_text":"Powerful but makes the user faint."
  },
  "121": {
    "flavor_text":"Eggs are hurled at the foe."
  },
  "122": {
    "flavor_text":"An attack that may cause paralysis."
  },
  "123": {
    "flavor_text":"An attack that may poison the foe."
  },
  "124": {
    "flavor_text":"An attack that may poison the foe."
  },
  "125": {
    "flavor_text":"An attack that may cause flinching."
  },
  "126": {
    "flavor_text":"An attack that may cause a burn."
  },
  "127": {
    "flavor_text":"An aquatic charge attack."
  },
  "128": {
    "flavor_text":"Traps the foe for 2-5 turns."
  },
  "129": {
    "flavor_text":"An attack that never misses."
  },
  "130": {
    "flavor_text":"1st turn: Prepare 2nd turn: Attack"
  },
  "131": {
    "flavor_text":"Fires spikes to hit 2-5 times."
  },
  "132": {
    "flavor_text":"An attack that may lower SPEED."
  },
  "133": {
    "flavor_text":"Sharply raises the user's SPCL.DEF."
  },
  "134": {
    "flavor_text":"Reduces the foe's accuracy."
  },
  "135": {
    "flavor_text":"Restores HP by 1/2 the user's max HP."
  },
  "136": {
    "flavor_text":"May miss and hurt the user."
  },
  "137": {
    "flavor_text":"A move that may cause paralysis."
  },
  "138": {
    "flavor_text":"Steals HP from a sleeping victim."
  },
  "139": {
    "flavor_text":"A move that may poison the foe."
  },
  "140": {
    "flavor_text":"Throws orbs to hit 2-5 times."
  },
  "141": {
    "flavor_text":"Steals 1/2 of the damage inflicted."
  },
  "142": {
    "flavor_text":"May cause the foe to fall asleep."
  },
  "143": {
    "flavor_text":"1st turn: Prepare 2nd turn: Attack"
  },
  "144": {
    "flavor_text":"The user assumes the foe's guise."
  },
  "145": {
    "flavor_text":"An attack that may reduce SPEED."
  },
  "146": {
    "flavor_text":"An attack that may cause confusion."
  },
  "147": {
    "flavor_text":"A move that induces sleep."
  },
  "148": {
    "flavor_text":"Blinds the foe to reduce accuracy."
  },
  "149": {
    "flavor_text":"An attack with variable power."
  },
  "150": {
    "flavor_text":"Has no effect whatsoever."
  },
  "151": {
    "flavor_text":"Sharply raises the user's DEFENSE."
  },
  "152": {
    "flavor_text":"Has a high criti­ cal hit ratio."
  },
  "153": {
    "flavor_text":"Very powerful but makes user faint."
  },
  "154": {
    "flavor_text":"Quickly scratches 2-5 times."
  },
  "155": {
    "flavor_text":"An attack that strikes twice."
  },
  "156": {
    "flavor_text":"Sleep for 2 turns to fully recover."
  },
  "157": {
    "flavor_text":"An attack that may cause flinching."
  },
  "158": {
    "flavor_text":"An attack that may cause flinching."
  },
  "159": {
    "flavor_text":"A move that raises the user's ATTACK."
  },
  "160": {
    "flavor_text":"Change user's type to a move's type."
  },
  "161": {
    "flavor_text":"Fires three kinds of beams at once."
  },
  "162": {
    "flavor_text":"Cuts the foe's HP by 1/2."
  },
  "163": {
    "flavor_text":"Has a high criti­ cal hit ratio."
  },
  "164": {
    "flavor_text":"Makes a decoy with 1/4 user's max HP."
  },
  "165": {
    "flavor_text":"Used only if all PP are exhausted."
  },
}

const stats =
{
  "14": {
    "stat_id":2,
    "stat_change":2
  },
  "28": {
    "stat_id":7,
    "stat_change":-1
  },
  "39": {
    "stat_id":3,
    "stat_change":-1
  },
  "43": {
    "stat_id":3,
    "stat_change":-1
  },
  "45": {
    "stat_id":2,
    "stat_change":-1
  },
  "51": {
    "stat_id":5,
    "stat_change":-1
  },
  "61": {
    "stat_id":6,
    "stat_change":-1
  },
  "62": {
    "stat_id":2,
    "stat_change":-1
  },
  "74": {
    "stat_id":2,
    "stat_change":1
  },
  "74": {
    "stat_id":4,
    "stat_change":1
  },
  "81": {
    "stat_id":6,
    "stat_change":-2
  },
  "94": {
    "stat_id":5,
    "stat_change":-1
  },
  "96": {
    "stat_id":2,
    "stat_change":1
  },
  "97": {
    "stat_id":6,
    "stat_change":2
  },
  "103": {
    "stat_id":3,
    "stat_change":-2
  },
  "104": {
    "stat_id":8,
    "stat_change":1
  },
  "106": {
    "stat_id":3,
    "stat_change":1
  },
  "107": {
    "stat_id":8,
    "stat_change":2
  },
  "108": {
    "stat_id":7,
    "stat_change":-1
  },
  "110": {
    "stat_id":3,
    "stat_change":1
  },
  "111": {
    "stat_id":3,
    "stat_change":1
  },
  "112": {
    "stat_id":3,
    "stat_change":2
  },
  "132": {
    "stat_id":6,
    "stat_change":-1
  },
  "133": {
    "stat_id":5,
    "stat_change":2
  },
  "134": {
    "stat_id":7,
    "stat_change":-1
  },
  "145": {
    "stat_id":6,
    "stat_change":-1
  },
  "148": {
    "stat_id":7,
    "stat_change":-1
  },
  "151": {
    "stat_id":3,
    "stat_change":2
  },
  "159": {
    "stat_id":2,
    "stat_change":1
  },
}

const meta = {
  "1": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "2": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "3": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "4": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "5": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "6": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "7": {
    "category_id":4,
    "ailment_id":4,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "8": {
    "category_id":4,
    "ailment_id":3,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "9": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "10": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "11": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "12": {
    "category_id":9,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "13": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "14": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "15": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "16": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "17": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "18": {
    "category_id":12,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "19": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "20": {
    "category_id":4,
    "ailment_id":8,
    "min_hits":null,
    "max_hits":null,
    "min_turns":5,
    "max_turns":6,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":100,
    "flinch_chance":0,
    "stat_chance":0
  },
  "21": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "22": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "23": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "24": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":2,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "25": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "26": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "27": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "28": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "29": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "30": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "31": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "32": {
    "category_id":9,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "33": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "34": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":30,
    "flinch_chance":0,
    "stat_chance":0
  },
  "35": {
    "category_id":4,
    "ailment_id":8,
    "min_hits":null,
    "max_hits":null,
    "min_turns":5,
    "max_turns":6,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":100,
    "flinch_chance":0,
    "stat_chance":0
  },
  "36": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":-25,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "37": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "38": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":-33,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "39": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "40": {
    "category_id":4,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":30,
    "flinch_chance":0,
    "stat_chance":0
  },
  "41": {
    "category_id":4,
    "ailment_id":5,
    "min_hits":2,
    "max_hits":2,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":20,
    "flinch_chance":0,
    "stat_chance":0
  },
  "42": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "43": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":100
  },
  "44": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "45": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "46": {
    "category_id":12,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "47": {
    "category_id":1,
    "ailment_id":2,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "48": {
    "category_id":1,
    "ailment_id":6,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":5,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "49": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "50": {
    "category_id":13,
    "ailment_id":13,
    "min_hits":null,
    "max_hits":null,
    "min_turns":4,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "51": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "52": {
    "category_id":4,
    "ailment_id":4,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "53": {
    "category_id":4,
    "ailment_id":4,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "54": {
    "category_id":11,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "55": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "56": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "57": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "58": {
    "category_id":4,
    "ailment_id":3,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "59": {
    "category_id":4,
    "ailment_id":3,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "60": {
    "category_id":4,
    "ailment_id":6,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":5,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "61": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "62": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "63": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "64": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "65": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "66": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":-25,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "67": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "68": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "69": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "70": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "71": {
    "category_id":8,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":50,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "72": {
    "category_id":8,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":50,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "73": {
    "category_id":1,
    "ailment_id":18,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "74": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "75": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "76": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "77": {
    "category_id":1,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "78": {
    "category_id":1,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "79": {
    "category_id":1,
    "ailment_id":2,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "80": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "81": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "82": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "83": {
    "category_id":4,
    "ailment_id":8,
    "min_hits":null,
    "max_hits":null,
    "min_turns":5,
    "max_turns":6,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":100,
    "flinch_chance":0,
    "stat_chance":0
  },
  "84": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "85": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "86": {
    "category_id":1,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "87": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":30,
    "flinch_chance":0,
    "stat_chance":0
  },
  "88": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "89": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "90": {
    "category_id":9,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "91": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "92": {
    "category_id":1,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":15,
    "max_turns":15,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "93": {
    "category_id":4,
    "ailment_id":6,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":5,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "94": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "95": {
    "category_id":1,
    "ailment_id":2,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "96": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "97": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "98": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "99": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "100": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "101": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "102": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "103": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "104": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "105": {
    "category_id":3,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":50,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "106": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "107": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "108": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "109": {
    "category_id":1,
    "ailment_id":6,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":5,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "110": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "111": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "112": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "113": {
    "category_id":11,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "114": {
    "category_id":10,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "115": {
    "category_id":11,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "116": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "117": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "118": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "119": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "120": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "121": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "122": {
    "category_id":4,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":30,
    "flinch_chance":0,
    "stat_chance":0
  },
  "123": {
    "category_id":4,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":40,
    "flinch_chance":0,
    "stat_chance":0
  },
  "124": {
    "category_id":4,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":30,
    "flinch_chance":0,
    "stat_chance":0
  },
  "125": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":10,
    "stat_chance":0
  },
  "126": {
    "category_id":4,
    "ailment_id":4,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":10,
    "flinch_chance":0,
    "stat_chance":0
  },
  "127": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":20,
    "stat_chance":0
  },
  "128": {
    "category_id":4,
    "ailment_id":8,
    "min_hits":null,
    "max_hits":null,
    "min_turns":5,
    "max_turns":6,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":100,
    "flinch_chance":0,
    "stat_chance":0
  },
  "129": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "130": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":100,
    "flinch_chance":0,
    "stat_chance":0
  },
  "131": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "132": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "133": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "134": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "135": {
    "category_id":3,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":50,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "136": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "137": {
    "category_id":1,
    "ailment_id":1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "138": {
    "category_id":8,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":50,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "139": {
    "category_id":1,
    "ailment_id":5,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "140": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "141": {
    "category_id":8,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":50,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "142": {
    "category_id":1,
    "ailment_id":2,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "143": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "144": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "145": {
    "category_id":6,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":10
  },
  "146": {
    "category_id":4,
    "ailment_id":6,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":5,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":20,
    "flinch_chance":0,
    "stat_chance":0
  },
  "147": {
    "category_id":1,
    "ailment_id":2,
    "min_hits":null,
    "max_hits":null,
    "min_turns":2,
    "max_turns":4,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "148": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "149": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "150": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "151": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "152": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "153": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "154": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":5,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "155": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":2,
    "max_hits":2,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "156": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "157": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":30,
    "stat_chance":0
  },
  "158": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":10,
    "stat_chance":0
  },
  "159": {
    "category_id":2,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "160": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "161": {
    "category_id":4,
    "ailment_id":-1,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":20,
    "flinch_chance":0,
    "stat_chance":0
  },
  "162": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "163": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":1,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "164": {
    "category_id":13,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":0,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
  "165": {
    "category_id":0,
    "ailment_id":0,
    "min_hits":null,
    "max_hits":null,
    "min_turns":null,
    "max_turns":null,
    "drain":0,
    "healing":-25,
    "crit_rate":0,
    "ailment_chance":0,
    "flinch_chance":0,
    "stat_chance":0
  },
}

const data = Object.assign({}, moves, names, meta, stats);

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
