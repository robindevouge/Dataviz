var  canvas = d3.select("body")
			
				.append("svg")
					.attr("width",1000)
					.attr("height",1000)


var data = [

10,50,80

];

var color = d3.scale.ordinal()
				
				.range(["red","blue","orange"])

var group = canvas.append("g")
					.attr("transform","translate(300,300)");

var r = 300;
var p = Math.PI * 2;

var arc = d3.svg.arc()
			.innerRadius(200)
			.outerRadius(r)
			/*.startAngle(0)
			.endAngle(p - 1)*/


var pie = d3.layout.pie()
			.value(function(d) {return d * 2;}) ;

var arcs = group.selectAll(".arc")
			.data(pie(data))
			.enter()
				.append('g')
				.attr('class',"arc")


arcs.append("path")
	.attr("d",arc)
	.attr("fill",function(d) { return color(d.data);	})

arcs.append("text")
	.attr("transform", function(d) {return "translate("+arc.centroid(d)+")";})//set the text in middle of the arc
	.attr("text-anchor","middle")// like text-align:center
	.attr("font-size","1.5em")
	.text(function(d) {return d.data})//put the data


