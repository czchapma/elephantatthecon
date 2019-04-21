
import * as d3pie from "d3pie"

export function createPieCharts() {

	var colors = ["#E1A79A", "#DB7B65", "#AD616B", "#397579", "#516F96", "#6F9CAB", "#85B3A9", "#639578" ];


	let jayson = {
                'gender': [
                    ['male', 55, "#E23636"],
                    ['female', 43, "#2F80ED"],
                    ['nonbinary/genderqueer', 7, "#9B51E0"],
                    ['agender', 4, "#D8269B"],
                ],

                'i_feel_safe': [
                    ['always', 75, "#39626A"],
                    ['usually', 38, "#37859A"],
                    ['sometimes', 8, "#67AEC1"],
                    ['rarely', 0, "#9AD2DF"],
                    ['never', 0, "#DFF9FF"]
                ],

                'race': [
                    ['asian', 7, "#E23636"],
                    ['biracial/multiracial', 9, "#9B51E0"],
                    ['black', 3, "#2F80ED"],
                    ['hispanic/latinx', 0, "#1bad9c"],
                    ['middle eastern', 0, "#219653"],
                    ['native american', 0, "#F2C94C"],
                    ['pacific islander', 0, "#F2994A"],
                    ['white', 79, "#D8269B"]
                ],

                'sexuality': [
                    ['asexual', 7, "#9B51E0"],
                    ['bisexual', 23, "#2F80ED"],
                    ['gay', 4, "#219653"],
                    ['lesbian', 2, "#D8269B"],
                    ['pansexual', 9, "#F2C94C"],
                    ['queer', 7, "#F2994A"],
                    ['questioning', 5, "#1bad9c"],
                    ['straight', 44, "#E23636"]
                ]
            };


createChart('gender', 'genderPieChart', colors, jayson);
createChart('race', 'racePieChart', colors, jayson);
createChart('sexuality', 'sexualityPieChart', colors, jayson);

}


function createChart (title, pieChart, colors, jayson){

var content = [];

for (var cat in jayson){
	if (cat === title) {
		for (var data in jayson[cat]){
			console.log(jayson[cat][data][0]);
			content[data] = {
				"label": jayson[cat][data][0],
				"value": jayson[cat][data][1],
				"color": colors[data]
			}
		}
	}
}
	return new d3pie(pieChart, {
	"header": {
		"title": {
			"text": title.toUpperCase(),
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
