var  canvas = d3.select("body")
			
				.append("svg")
					.attr("width",100)
					.attr("height",100)


var data = [

11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11

];

var color = d3.scale.ordinal()
				
				.range(["red","blue","orange","green"])

var group = canvas.append("g")
					.attr("transform","translate(300,300)");



var pie = d3.layout.pie()
			.value(function(d) {return d * 2;}) ;



var inner = 80;

var outer = 110;




			/*.startAngle(0)
			.endAngle(p - 1)*/
var arcs = group.selectAll(".arc")
			.data(pie(data))
			.enter()
				.append('g')
				.attr('class',"arc")

var arc = d3.svg.arc()
			.innerRadius(inner)
			.outerRadius(outer)

arcs.append("path")
	.attr("d",arc)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")


var arc1 = d3.svg.arc()
			.innerRadius(inner+ 30)
			.outerRadius(outer+ 30)

arcs.append("path")
	.attr("d",arc1)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")



var arc2 = d3.svg.arc()
			.innerRadius(inner + 60)
			.outerRadius(outer + 60)

arcs.append("path")
	.attr("d",arc2)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")




var arc3 = d3.svg.arc()
			.innerRadius(inner + 90)
			.outerRadius(outer + 90)



arcs.append("path")
	.attr("d",arc3)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")


var arc5 = d3.svg.arc()
			.innerRadius(inner + 120)
			.outerRadius(outer + 120)



arcs.append("path")
	.attr("d",arc5)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")


var arc5 = d3.svg.arc()
			.innerRadius(inner + 150)
			.outerRadius(outer + 150)



arcs.append("path")
	.attr("d",arc5)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")


var arc6 = d3.svg.arc()
			.innerRadius(inner + 180)
			.outerRadius(outer + 180)



arcs.append("path")
	.attr("d",arc6)
	.attr("fill",function(d) { return color(d.data);	})
	.attr("stroke","#fff")
	.attr("stroke-width","1px")













// arcs.append("text")
// 	.attr("transform", function(d) {return "translate("+arc.centroid(d)+")";})//set the text in middle of the arc
// 	.attr("color","#fff")
// 	.text(function(d) {return d.data})//put the data


