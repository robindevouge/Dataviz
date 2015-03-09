d3.csv("data.csv", function (data) {

	var map = data.map(function(i) { return parseInt(i.age) })


	var histogram = d3.layout.histogram()
	.bins(5)
	(map)

	var canvas = d3.select("body").append("svg")
				 .attr('width',500)
				 .attr('height',500);

	var bars = canvas.selectAll(".bar")
				.data(histogram)
				.enter()
				.append('g')
 
	bars.append('rect')
		.attr("x",function(d) { return d.x })
		.attr("y",0)
		.attr("width", function(d) { return d.dx  })
		.attr("height", function(d) { return d.y  })
		.attr("fill","steelblue");


})