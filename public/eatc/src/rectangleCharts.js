
import * as d3 from "d3"

export function createRectangleCharts(data) {

createRectChart(data, "I felt safe", "rectangle-chart-1");
createRectChart(data, "I felt safe sharing my gender identity", "rectangle-chart-2");
createRectChart(data, "I felt safe sharing my sexuality", "rectangle-chart-3");

}


function createRectChart(jayson, label, id){

var content = [];

for (var cat in jayson){
	if (cat === label) {
		for (var data in jayson[cat]){
			content[data] = jayson[cat][data][1];
		}
	}
}

console.log(content);

var colors = ["#DFF9FF", "#9AD2DF", "#67AEC1", "#37859A", "#39626A"];
var levels = ["always", "usually", "sometimes", "rarely", "never"];

var acc = 0;

var total = d3.sum(content);

var chart = d3.select("#" + id)
	.attr("width", "100%")
	.attr("height", 86);
	
// var color = d3.scale.category20c();

var tooltip = d3.select("body").append("div").attr("class", "tooltip");

var bar = chart.selectAll("g")
	.data(content)
	.enter().append("g");
bar.append("rect")
	.attr("width", function(d) { return ((d/total)*100) + "%"; } )
	.attr("x", function(d) {
		var prev = acc;
		var curr = 100*(d/total);
		acc = acc + curr;
		return prev + "%";
	})
	.attr("height", 20)
	.attr("fill",  function(d) { return (colors[content.indexOf(d)]) } )
	.on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY - 30 + "px")
              .style("display", "block")
              .html(levels[content.indexOf(d)] + ": " + d + ", " + (d/total*100).toFixed() + "%");
        })
   .on("mouseout", function(d){ tooltip.style("display", "none");});

acc = 0;

chart.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 40)
    .text(label);
}

