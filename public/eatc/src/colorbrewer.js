
			
var data = [10, 5, 40, 25, 20];
var levels = ["always", "usually", "sometimes", "rarely", "never"];
var label = "I felt safe"

var width = "100%";
var height = 70;
var acc = 0;

var total = d3.sum(data);

var chart = d3.select("#chart")
	.attr("width", width)
	.attr("height", height);
	
// var color = d3.scale.category20c();
var color = ["#DFF9FF", "#9AD2DF", "#67AEC1", "#37859A", "#39626A"];

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
	.attr("fill",  function(d) { return (color[data.indexOf(d)]) } );

acc = 0;
bar.append("text")
	.attr("x", function(d) {
		var prev = acc;
		var curr = 100*(d/total);
		acc = acc + curr;
		return prev + "%";
	})
	//.attr("y", 11)
	.attr("dy", "35px")
	.text(function(d) { return levels[data.indexOf(d)] + " (" + d + "%)"; });

chart.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 0)
    .attr("y", 60)
    .text(label);
		
d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("#chart").style("width"));
}
