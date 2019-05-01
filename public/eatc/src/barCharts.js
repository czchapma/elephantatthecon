import * as d3 from "d3"

export function createBarCharts(data){

	createBarChart("bar-chart-1", data, "Someone verbally/harassed me");
	createBarChart("bar-chart-2", data, "Someone touched me/without my consent");
	createBarChart("bar-chart-3", data, "Someone sexually/harassed or assaulted me");
}

function createBarChart(id, data, label){

	var w = 160;
	var h = 280;
	var colors = ["#ED917D", "#C24119"];

	var dataset = [];
	var options = [];

	for (var item in data[label]){
		options[item] = data[label][item][0];
		dataset[item] = data[label][item][1];
	}

			var res = label.split("/")

			var label1 = res[0];
			var label2 = res[1];
			
			

			var total = 0;
			for (var data in dataset){
				total += dataset[data];
			}

			var tooltip = d3.select("body").append("div").attr("class", "tooltip");
			
			var chart = d3.select("#" + id)
				.attr("width", w)
				.attr("height", h);

			chart.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		if (i === 0){
			   			return (w/2) - 25;
			   		} else {
			   			return (w/2) + 5;
			   		}
			   })
			   .attr("y", function(d) {
			   		return h - ((d/total) * 240) - 40;
			   })
			   .attr("width", 20)
			   .attr("height", function(d) {
			   		return (d/total) * 240;
			   })
			   .attr("fill", function(d, i) {
					return colors[i];
			   })
			   .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY - 30 + "px")
              .style("display", "block")
              .html(options[dataset.indexOf(d)] + ": " + d + ", " + (d/total*100).toFixed() + "%");
        	})
        	.on("mouseout", function(d){ tooltip.style("display", "none");});

			chart
			.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 80)
    .attr("y", 260)
    .text(label1);
    chart
			.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 80)
    .attr("y", 270)
    .text(label2);

}