$(document).ready(function(){
	
	
	
	var canvas_width = ($(window).width()/5)*2;
	var canvas_height = canvas_width/1.3;
	
	var possibleColors={
	  "JV":["#CAD383", "#DEE2B1", "#ECEFD6"],
	  "3D":["#FBCF78", "#FEDEA8", "#FEEDD1"],
	  "PP":["#93CEBE", "#BEE0D6", "#DCEEE8"],
	  "DWM":["#EF7D88", "#F5AEB0", "#FBE2E0"],
	  "ANIM":["#6086C1", "#99ABD6", "#C7D0E8"],
	  "TOUS":["#6E6E6E", "#909090", "#A7A7A7"]
	};

	var currentSection;
	function myColor (jsonItem){
	 if (jsonItem.section){
	  currentSection=jsonItem.section;
	  return "black";
	}
	   value=jsonItem["value"];
		if (value >150)
		 return possibleColors[currentSection][0];
		else if (value>3)
		  return possibleColors[currentSection][1];
		else
		  return possibleColors[currentSection][2];
	}

	  $("#left select").on("change", function(){
		var value =  $(this).val();
		$("#left svg").remove()
		buildChart(value, "#left");
	  })

	  $("#right select").on("change", function(){
		var value =  $(this).val();
		$("#right svg").remove()
		buildChart(value, "#right");
	  })

	  buildChart(0, "#left");
	  buildChart(1, "#right");


	function buildChart(treemapSection, position){

	  var canvas = d3.select(position).append("svg")
		  .attr("width", canvas_width)
		  .attr("height", canvas_height)

	  d3.json("./_assets/data/treemap_pays.json", function (data){

		data = data[treemapSection]

		var treemap = d3.layout.treemap()
		  .size([canvas_width, canvas_height])
		  .nodes(data)

		var cells = canvas.selectAll(".cell")
		  .data(treemap)
		  .enter()
		  .append("g")
		  .attr("class", "cell")

		  cells.append("rect")
			.attr("x", function (d) {return d.x; })
			.attr("y", function (d) {return d.y; })
			.attr("width", function (d) {return d.dx; })
			.attr("height", function (d) {return d.dy; })
			.attr("fill", function (d) { return myColor(d); }) ////color(d.parent.name);

			.attr("stroke", "#fff")
			.on("mouseover", function(){  

			  var maybeS;
			  if (this["__data__"]["value"]>1)
				maybeS="s";
			  else
				maybeS="";

			  var myToolTipDiv = tooltip[0][0];

			  myToolTipDiv.style.color = 'white';
			  myToolTipDiv.style.border = '1px #fff solid';
			  myToolTipDiv.style.backgroundColor = 'rgb(51,51,51)';
			  myToolTipDiv.style.padding = "20px 20px 20px 20px";
			  myToolTipDiv.style.borderRadius = "10px";
			  myToolTipDiv.innerHTML = this["__data__"]["name"] +"<br>"+ this["__data__"]["value"] + " personne" + maybeS;


			  return tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

			 var tooltip = d3.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("visibility", "hidden")

	  })
	}
});