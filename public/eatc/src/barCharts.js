import * as d3 from "d3"

export function createBarCharts(){

	createBarChart("bar-chart-1", [84, 16], "Someone verbally", "harassed me");
	createBarChart("bar-chart-2", [90, 10], "Someone touched me", "without my consent");
	createBarChart("bar-chart-3", [89, 11], "Someone sexually", "harassed or assaulted me");
}

function createBarChart(id, dataset, label1, label2){

	//Width and height
			var w = 160;
			var h = 280;
			var colors = ["#ED917D", "#C24119"];
			
			

			var total = 0;
			for (var data in dataset){
				total += dataset[data];
			}
			
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
			   });

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