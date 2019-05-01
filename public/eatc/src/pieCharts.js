
import * as d3pie from "d3pie"

export function createPieCharts(data) {

createChart("gender", 'genderPieChart', data);
createChart("race", 'racePieChart', data);
createChart("sexuality", 'sexualityPieChart', data);

}

function createChart (label, id, data){

var colors = ["#E1A79A", "#DB7B65", "#AD616B", "#397579", "#516F96", "#6F9CAB", "#85B3A9", "#639578" ];

var content = [];
for (var item in data[label]){
	content[item] = {
		"label": data[label][item][0],
		"value": data[label][item][1],
		"color": colors[item]
	}
}

	return new d3pie(id, {
	"header": {
		"title": {
			"text": label.toUpperCase(),
			"fontSize": 12
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
		"canvasHeight": 175,
		"canvasWidth": 400,
		"pieInnerRadius": "65%",
		"pieOuterRadius": "100%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": content
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
			"fontSize": 11,
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
