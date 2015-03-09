d3.json('inscriptions.json', function(data) {
    var width = 1200;
    var height = 500;
    var total = 0;
	
    var color = ["#FACE7E", "#CAD187", "#95CDBE", "#ED7E89","#6287BF"];

    var canvas = d3.select("body")
	               .append("svg")
			       .attr("width",width)
			       .attr("height",height)
				   .attr("transform","translate(100," + height/2 + ")");
	
	var groupe = canvas.append("g");

    var circle = groupe.selectAll("circle")
			           .data(data)
			           .enter()
				       .append("circle")
				       .attr("r", function(d) { return d.value/10; })
				       .attr("fill", function(d, i) { return color[i]; })
				       .attr("cx", function(d) { return total += 3*d.value/10; });
					   
    groupe.append("text")
	      .text(function() { return "Hello,"; })
          .attr("font-size","1.5em")
          .attr("fill","#fff");

    groupe.append("text")
	      .text(function() { return d.children ? "" : d.name; })
          .attr("font-size","1.5em")
          .attr("fill","#fff");
});