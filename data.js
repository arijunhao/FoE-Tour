var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22331553751311262,
        "pitch": -0.11080860030627093,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.20992984253161495,
          "pitch": -0.06613772762278103,
          "rotation": 6.283185307179586,
          "target": "1-outside-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.17540326997141165,
          "pitch": 0.22877888129796808,
          "title": "Welcome",
          "text": "to the Faculty of Engineering"
        },
        {
          "yaw": -2.7464336990621288,
          "pitch": 0.1396292867820499,
          "title": "UCC and Museums",
          "text": "Nope, this part of the map is still not unlocked :)"
        }
      ]
    },
    {
      "id": "1-outside-engineering-auditorium",
      "name": "Outside Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39801110791856686,
          "pitch": 0.12693519551520538,
          "rotation": 5.497787143782138,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.3680645957738591,
          "pitch": 0.4939515509309249,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3728861122742337,
          "pitch": 0.058614847238292356,
          "title": "Towards SDE",
          "text": "This part of the map is also not unlocked yet :)"
        },
        {
          "yaw": -1.326622791832765,
          "pitch": 0.04398486707812488,
          "title": "Statue",
          "text": "No information yet"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.049832657000856,
          "pitch": 0.1234786001855337,
          "rotation": 0,
          "target": "1-outside-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9060323587475185,
          "pitch": 0.2025697035245031,
          "title": "Study Spaces",
          "text": "Typically filled during exam periods"
        }
      ]
    }
  ],
  "name": "FoE_EA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
