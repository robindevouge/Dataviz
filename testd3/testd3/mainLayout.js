var  canvas = d3.select("body")
			
				.append("svg")
					.attr("width",1000)
					.attr("height",1000)

						.append("g")
							.attr("transform","translate(50,50)")


var tree = d3.layout.tree()
			.size([400,400])

d3.json('data.json',function (data) {

	var nodes = tree.nodes(data);
	var links = tree.links(nodes);

	var node = canvas.selectAll(".nodes")
				.data(nodes)
				.enter()
				.append('g')
					.attr('class',"node")
					.attr("transform",function(d){ return "translate("+d.y+","+d.x+")"; })

		node.append('circle')
			.attr("r",5)
			.attr("fill","steelblue");

		node.append('text')

			.text(function(d){ return d.name})

		var diagonal = d3.svg.diagonal()
						.projection(function(d) { return [d.y,d.x]; });

		canvas.selectAll('.links')
			.data(links)
			.enter()
			.append("path")
				.attr("class","link")
				.attr("fill","none")
				.attr("stroke","#ADADAD")
				.attr("d",diagonal);

})

