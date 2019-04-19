import * as d3pie from "d3pie"

export function drawPie(){
	var pie = new d3pie("chart1", {
  "header": {
    "title": {
      "text": "GENDER",
      "fontSize": 16
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "courier"
    },
    "location": "pie-center",
    "titleSubtitlePadding": 10
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasHeight": 350,
    "canvasWidth": 350,
    "pieInnerRadius": "69%",
    "pieOuterRadius": "48%"
  },
  "data": {
    "sortOrder": "label-desc",
    "content": [
      {
        "label": "male",
        "value": 50,
        "color": "#EB5757"
      },
      {
        "label": "female",
        "value": 44,
        "color": "#2F80ED"
      },
      {
        "label": "nonbinary/genderqueer",
        "value": 4,
        "color": "#D8269B"
      },
      {
        "label": "agender",
        "value": 2,
        "color": "#9B51E0"
      }
    ]
  },
  "labels": {
    "outer": {
      "format": "label-value1",
      "pieDistance": 20
    },
    "inner": {
      "format": "none"
    },
    "mainLabel": {
      "fontSize": 11
    },
    "percentage": {
      "color": "#999999",
      "fontSize": 11,
      "decimalPlaces": 0
    },
    "value": {
      "color": "#37859a",
      "fontSize": 11
    },
    "lines": {
      "enabled": true,
      "style": "straight",
      "color": "#1d1d1d"
    },
    "truncation": {
      "enabled": true
    }
  },
  "tooltips": {
    "enabled": true,
    "type": "placeholder",
    "string": "{label}: {value}, {percentage}%",
    "styles": {
      "backgroundColor": "#363636",
      "padding": 6
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "back",
      "speed": 400,
      "size": 8
    }
  }
});

  var pie = new d3pie("chart2", {
  "header": {
    "title": {
      "text": "SEXUALITY",
      "fontSize": 16
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "courier"
    },
    "location": "pie-center",
    "titleSubtitlePadding": 10
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasHeight": 350,
    "canvasWidth": 350,
    // "pieInnerRadius": "89%",
    // "pieOuterRadius": "68%"
    "pieInnerRadius": "69%",
    "pieOuterRadius": "48%"
  },
  "data": {
    "sortOrder": "label-desc",
    "content": [
      {
        "label": "straight",
        "value": 60,
        "color": "#2F80ED"
      },
      {
        "label": "bisexual",
        "value": 18,
        "color": "#219653"
      },
      {
        "label": "pansexual",
        "value": 9,
        "color": "#EB5757"
      },
      {
        "label": "asexual",
        "value": 6,
        "color": "#42aebc"
      },
      {
        "label": "gay",
        "value": 4,
        "color": "#F2C94C"
      },
      {
        "label": "questioning",
        "value": 2,
        "color": "#9B51E0"
      },
      {
        "label": "lesbian",
        "value": 0.5,
        "color": "#F2994A"
      },
      {
        "label": "queer",
        "value": 0.5,
        "color": "#D8269B"
      }
    ]
  },
  "labels": {
    "outer": {
      "format": "label-value1",
      "pieDistance": 20
    },
    "inner": {
      "format": "none"
    },
    "mainLabel": {
      "fontSize": 11
    },
    "percentage": {
      "color": "#999999",
      "fontSize": 11,
      "decimalPlaces": 0
    },
    "value": {
      "color": "#37859a",
      "fontSize": 11
    },
    "lines": {
      "enabled": true,
      "style": "straight",
      "color": "#1d1d1d"
    },
    "truncation": {
      "enabled": true
    }
  },
  "tooltips": {
    "enabled": true,
    "type": "placeholder",
    "string": "{label}: {value}, {percentage}%",
    "styles": {
      "backgroundColor": "#363636",
      "padding": 6
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "back",
      "speed": 400,
      "size": 8
    }
  }
});

  var pie = new d3pie("chart3", {
  "header": {
    "title": {
      "text": "RACE",
      "fontSize": 16
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "courier"
    },
    "location": "pie-center",
    "titleSubtitlePadding": 10
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasHeight": 350,
    "canvasWidth": 350,
    "pieInnerRadius": "69%",
    "pieOuterRadius": "48%"
  },
  "data": {
    "sortOrder": "label-desc",
    "content": [
      {
        "label": "white",
        "value": 74,
        "color": "#EB5757"
      },
      {
        "label": "asian",
        "value": 10,
        "color": "#D8269B"
      },
      {
        "label": "hispanic/latinx",
        "value": 5,
        "color": "#2F80ED"
      },
      {
        "label": "black",
        "value": 5,
        "color": "#9B51E0"
      },
      {
        "label": "multiracial",
        "value": 4,
        "color": "#42aebc"
      },
      {
        "label": "pacific islander",
        "value": 1.5,
        "color": "#F2C94C"
      },
      {
        "label": "native american",
        "value": 0.5,
        "color": "#219653"
      }
    ]
  },
  "labels": {
    "outer": {
      "format": "label-value1",
      "pieDistance": 20
    },
    "inner": {
      "format": "none"
    },
    "mainLabel": {
      "fontSize": 11
    },
    "percentage": {
      "color": "#999999",
      "fontSize": 11,
      "decimalPlaces": 0
    },
    "value": {
      "color": "#37859a",
      "fontSize": 11
    },
    "lines": {
      "enabled": true,
      "style": "straight",
      "color": "#1d1d1d"
    },
    "truncation": {
      "enabled": true
    }
  },
  "tooltips": {
    "enabled": true,
    "type": "placeholder",
    "string": "{label}: {value}, {percentage}%",
    "styles": {
      "backgroundColor": "#363636",
      "padding": 6
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "back",
      "speed": 400,
      "size": 8
    }
  }
});
}