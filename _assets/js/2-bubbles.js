$(document).ready(function(){
	d3.json('./_assets/data/inscriptions.json', function(data) {
		var width = $(window).width();
		var height = 200;
		var total = 0;

		var color = ["#FACE7E", "#CAD187", "#95CDBE", "#ED7E89","#6287BF"];

		var canvas = d3.select(".bubbleGraph")
					   .append("svg")
					   .attr("width",width)
					   .attr("height",height)
				

		var groupe = canvas.append("g")
							.attr("transform","translate(0,100)");

	 var circle = groupe.selectAll("circle")
						   .data(data)
						   .enter()
						   .append("circle")

						   .attr("r", function(d) { return d.value/10; })
						   .attr("fill", function(d, i) { return color[i]; })
						   .attr("cx", function(d) { if (d.name==="3D")

								{return total +=  3*d.value/10; }

								else if (d.name==="JV")

								{return total +=  3*d.value/10; }

									else if (d.name==="PP")

								{return total +=  3*d.value/13; }

								else if (d.name==="DWM")

								{return total +=  3*d.value/11.5; }

									else

				       			{return total +=  3*d.value/10; }
												   
							});

	total = 0;

	var text = groupe.selectAll("text")
					.data(data)
					.enter()
					.append("text")
						.text(function(d){
						 return d.name + " : "+d.value;})
						.attr("fill","#fff")
						.attr("x", function(d) {  


							if (d.name==="3D") 

			    				{return total +=(3*d.value/10) - (d.value/40);}

			    			else if (d.name==="JV")

								{return total +=(3*d.value/10) - (d.value/2000);}

			    			else if (d.name==="PP")

			    				{return total +=(3*d.value/13) - (d.value/2000);}

			    			else if (d.name==="DWM")

			    				{return total +=(3*d.value/11) - (d.value/50);}

			    			else 

			    				{return total +=(3*d.value/10) - (d.value/100);}


						 })

						.attr("y","5")

	var text = groupe.selectAll("text")
					.data(data)
					.enter()			    
					.append("text")
						.text(function(d){
						 return d.value;})
						.attr("fill","#fff")
						.attr("x", function(d) { return total +=(3*d.value/10) - (d.value/300); })	
	});
});