var width = 800;
var height = 800;


var  canvas = d3.select("body")
			
				.append("svg")
					.attr("width",width)
					.attr("height",height)

						.append("g")
							.attr("transform","translate(50,50)")



d3.json('data.json',function (data){

	var  nodes = pack.nodes(data);

	var node = canvas.selectAll(".node")
				.data(nodes)
				.enter()
				.append('g')
					.attr('class',"node")
					.attr("transform",function(d){ return "translate("+(d.x) / 2+ ","+(d.y) / 2+")";})
					



			node.append('circle')
				.attr("r",function(d) { return d.r / 2; })
				.attr('fill',"steelblue")
				.attr('opacity',0.25)
				.attr("strokes","ADADAD")
				.attr("stroke-width","2");

			node.append('text')
				.text(function(d){return d.children ? "" : d.name})
				.attr("text-anchor","middle")

				 

	
});





