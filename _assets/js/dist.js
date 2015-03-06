//d3.select("p").text("hello world!"); Change the text


// PUT JSON IN DATA
/*d3.json("js/data.json",function(data) {

var bars = canvas.selectAll("rect")
			.data(dataArray)
			.enter()
				.append("rect")
				.attr("width", 0)
				.attr("height",50)
				.attr("fill",function(d) { return color(d) })
				.attr("y", function(g,i) {

					return i *100
				})
			Canvas.selectAll("text")
			.data(dataArray)
			.enter()
				.append("text")
				.attr("width", 0)
				.attr("height",50)
				.attr("fill",white)
				.attr("y", function(d,i) {

					return i *100;
				})
				.text(function(d) {return d.name; })



//}) code below normally insinde */
var dataArray = [20,40,50,60,50,40];
var width = 800;
var height = 800;
var widthScale = d3.scale.linear()
				 .domain([0,60])
				 .range([0,width +50]);

var color = d3.scale.linear()
			.domain([0,60])
			.range(["red","lightblue"]);

var axis = d3.svg.axis()
			.scale(widthScale)
			.ticks(5);


var  canvas = d3.select("body")
/*	.text("hello ")
	.style("color","red")
	.append("p")
		.text("hello guy"); Change Propreties of text or a DOM element
		*/ 

		.append("svg")
			.attr("width",width)
			.attr("height",height)
		.append("g")
			.attr("transform","translate(20,0)")
		

var bars = canvas.selectAll("rect")
			.data(dataArray)
			.enter()
				.append("rect")
				.attr("width", 0)
				.attr("height",25)
				.attr("fill",function(d) { return color(d) })
				.attr("y", function(g,i) {

					return i *25
				})

bars.transition()
	.duration(1500)
	.attr("width",function(d) {return widthScale(d) +50;});

canvas.append("g")
	.attr("transform","translate(0,100)")
	.call(axis)
	.attr("fill","#fff");

/*		CREER DES SVG DANS D3

	var circle = canvas.append("circle")
				 .attr("cx",250)
				 .attr("cy",250)
				 .attr("r",50)
				 .attr("fill","red");

	var rect = canvas.append("rect")
				 .attr("width",100)
				 .attr("height",50)
				 .attr("fill","red");

	var line = canvas.append("line")
				.attr("x1",0)
				.attr("y1",100)
				.attr("x2",400)
				.attr("y2",400)
				.attr("stroke","green")
				.attr("stroke-width",10);*/