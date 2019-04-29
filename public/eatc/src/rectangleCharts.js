
import * as d3 from "d3"

export function createRectangleCharts() {



var data1 = [3, 44, 18, 25, 6];
var label1 = "I felt safe"

var data2 = [19, 18, 22, 12, 10];
var label2 = "I felt safe sharing my gender identity"

var data3 = [22, 10, 10, 16, 13];
var label3 = "I felt safe sharing my sexuality"

createRectChart(data1, label1, "rectangle-chart-1");
createRectChart(data2, label2, "rectangle-chart-2");
createRectChart(data3, label3, "rectangle-chart-3");

}


function createRectChart(data, label, id){

var colors = ["#DFF9FF", "#9AD2DF", "#67AEC1", "#37859A", "#39626A"];
var levels = ["always", "usually", "sometimes", "rarely", "never"];

var acc = 0;

var total = d3.sum(data);

var chart = d3.select("#" + id)
	.attr("width", "100%")
	.attr("height", 86);
	
// var color = d3.scale.category20c();

var tooltip = d3.select("body").append("div").attr("class", "tooltip");

var bar = chart.selectAll("g")
	.data(data)
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
	.attr("fill",  function(d) { return (colors[data.indexOf(d)]) } )
	.on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY - 30 + "px")
              .style("display", "block")
              .html(levels[data.indexOf(d)] + ": " + d + ", " + (d/total*100).toFixed() + "%");
        })
   .on("mouseout", function(d){ tooltip.style("display", "none");});

acc = 0;

chart.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 40)
    .text(label);
}

