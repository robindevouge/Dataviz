$(document).ready(function(){
	
	var width = ($(window).width()/10*7);
	var	height = 750;

	var  canvas = d3.select(".mainGraph")
			
				.append("svg")
					.attr("width",width)
					.attr("height",height)

	//["annees", "13-14", "12-13", "11-12", "10-11", "09-10"],
	var myJsonData = [
	

		{"sections" : "3D","sexe":"hommes","mention":"admis", "a1314" : 56.25, "a1213" : 56.64, "a1112": 35.76, "a1011":59.48, "a0910":53.85},
		{"sections" : "3D","sexe":"hommes","mention":"credit", "a1314" : 8.59, "a1213" : 7.69, "a1112":5.3, "a1011":5.23, "a0910":10.65},
		{"sections" : "3D","sexe":"hommes","mention":"refus", "a1314" : 35.16, "a1213" : 35.66, "a1112":58.94, "a1011":35.29, "a0910":35.5},
		{"sections" : "3D","sexe":"femmes","mention":"admis", "a1314" : 45.45, "a1213" : 60.53, "a1112":35, "a1011":60, "a0910":48.15},
		{"sections" : "3D","sexe":"femmes","mention":"credit", "a1314" : 4.55, "a1213" : 7.89, "a1112":10, "a1011":8, "a0910":3.7},
		{"sections" : "3D","sexe":"femmes","mention":"refus", "a1314" : 50, "a1213" : 31.58, "a1112":55, "a1011":32, "a0910":48.15},
		{"sections" : "annees", "a1314" : "13-14", "a1213" : "12-13", "a1112" : "11-12", "a1011" : "10-11", "a0910" : "09-10"},
		{"sections" : "anim","sexe":"hommes","mention":"admis", "a1314" : 58.46, "a1213" : 72.13, "a1112":50, "a1011":48.28, "a0910":68},
		{"sections" : "anim","sexe":"hommes","mention":"credit", "a1314" : 18.46, "a1213" : 4.92, "a1112":22.86, "a1011":10.34, "a0910":8},
		{"sections" : "anim","sexe":"hommes","mention":"refus", "a1314" : 23.08, "a1213" : 22.95, "a1112":27.14, "a1011":41.38, "a0910":24},
		{"sections" : "anim","sexe":"femmes","mention":"admis", "a1314" : 60, "a1213" : 74, "a1112":60, "a1011":70, "a0910":70.83},
		{"sections" : "anim","sexe":"femmes","mention":"credit", "a1314" : 13.33, "a1213" : 4, "a1112":4.44, "a1011":7.5, "a0910":12.5},
		{"sections" : "anim","sexe":"femmes","mention":"refus", "a1314" : 26.67, "a1213" : 22, "a1112":35.56, "a1011":22.5, "a0910":16.67},
		{"sections" : "jv","sexe":"hommes","mention":"admis", "a1314" : 30.66, "a1213" : 37.96, "a1112":36.13, "a1011":38.24, "a0910":28.95},
		{"sections" : "jv","sexe":"hommes","mention":"credit", "a1314" : 7.3, "a1213" : 10.19, "a1112":9.24, "a1011":7.84, "a0910":6.58},
		{"sections" : "jv","sexe":"hommes","mention":"refus", "a1314" : 62.04, "a1213" : 51.85, "a1112":54.62, "a1011":53.92, "a0910":64.47},
		{"sections" : "jv","sexe":"femmes","mention":"admis", "a1314" : 23.33, "a1213" : 25, "a1112":33.33, "a1011":30.77, "a0910":21.43},
		{"sections" : "jv","sexe":"femmes","mention":"credit", "a1314" : 10, "a1213" : 10, "a1112":20, "a1011":30.77, "a0910":7.14},
		{"sections" : "jv","sexe":"femmes","mention":"refus", "a1314" : 66.67, "a1213" : 65, "a1112":46.67, "a1011":38.46, "a0910":71.43},
		{"sections" : "pp","sexe":"hommes","mention":"admis", "a1314" : 55.17, "a1213" : 61.19, "a1112":65, "a1011":53.85, "a0910":66.32},
		{"sections" : "pp","sexe":"hommes","mention":"credit", "a1314" : 13.79, "a1213" : 2.99, "a1112":1.67, "a1011":8.97, "a0910":5.26},
		{"sections" : "pp","sexe":"hommes","mention":"refus", "a1314" : 31.03, "a1213" : 35.82, "a1112":33.33, "a1011":37.18, "a0910":28.42},
		{"sections" : "pp","sexe":"femmes","mention":"admis", "a1314" : 70, "a1213" : 62.5, "a1112":57.89, "a1011":58.46, "a0910":72.58},
		{"sections" : "pp","sexe":"femmes","mention":"credit", "a1314" : 5.56, "a1213" : 3.41, "a1112":7.89, "a1011":3.08, "a0910":11.29},
		{"sections" : "pp","sexe":"femmes","mention":"refus", "a1314" : 24.44,"a1213" :  34.09, "a1112":34.21, "a1011":38.46, "a0910":16.13},
		{"sections" : "dwm","sexe":"hommes","mention":"admis", "a1314" : 53.54, "a1213" : 59.38, "a1112":53.17, "a1011":64.37, "a0910":70.77},
		{"sections" : "dwm","sexe":"hommes","mention":"credit", "a1314" : 9.45, "a1213" : 7.81, "a1112":7.94, "a1011":6.9, "a0910":4.62},
		{"sections" : "dwm","sexe":"hommes","mention":"refus", "a1314" : 37.01, "a1213" : 32.81, "a1112":38.89, "a1011":28.74, "a0910":24.62},
		{"sections" : "dwm","sexe":"femmes","mention":"admis", "a1314" : 60.47, "a1213" : 68.42, "a1112":63.33, "a1011":73.68, "a0910":66.67},
		{"sections" : "dwm","sexe":"femmes","mention":"credit", "a1314" : 9.3, "a1213" : 2.63, "a1112":0,"a1011": 5.26, "a0910":0},
		{"sections" : "dwm","sexe":"femmes","mention":"refus", "a1314":30.23, "a1213" : 28.95, "a1112":36.67, "a1011":21.05, "a0910":33.3}

	]


	var possibleColors={"d":["#FBE2E0","#F3AFB1","#ED7E89"],"p":["#DCEDE8","#BFE0D6","#95CDBE"],"j":["#ECEED7","#DEE1B3","#CAD187"],
						"3" : ["#FDECD2","#FDDEAB","#FACE7E"], "a" : ["#C7D0E7","#9AACD5","#6287BF"]
							};
	var yearIndex=0;
	function incrementYearIndex(where){
		yearIndex+=1;
	}
	var yearIDs=["a0910","a1011","a1112","a1213","a1314"]
	var color = function(data){

		var goodColor = "none";
		if (data.sections=="annees")
			return goodColor;
		possibleColor=possibleColors[data.sections.substring(0,1)];
		var value=data[yearIDs[yearIndex]];
		if (value<33.00)
			return possibleColor[0];

		if (value < 66.00)
			return possibleColor[1];

		return possibleColor[2];

	}


	var group = canvas.append("g")
						.attr("transform","translate("+width / 2+","+height / 2+")");

	var pie = d3.layout.pie().value(function(){return 150;}).sort(null);


	var inner = 130;

	var outer = 160;

	var groupeCircle = canvas.append("g").attr("class", "caca");

	// var middleCircle = groupeCircle.append("circle").attr({
	// 	"class": ".circle",
	// 	"r": 130,
	// 	"transform": "translate("+width / 2+","+height / 2+")",
	// 	"fill": "blue"
	// });

	groupeCircle.append("image").attr({
		"xlink:href" : "./_assets/img/svg-interieur.svg",
		"width": 260,
		"height": 260,
		"transform": "translate("+ ( (width / 2) - (260 / 2) )  +","+ ( (height / 2) - (260 / 2) ) +")",


	})
							// 	.attr("class","rect")
							   // .attr("r", 130 )
							   // .attr("fill", "red");


	var arcs = group.selectAll(".arc")
				.data(pie(myJsonData))
				.enter()
					.append('g')
					.attr('class',"arc")


	var arc = d3.svg.arc()
				.innerRadius(inner)
				.outerRadius(outer)


	arcs.append("path")
		.attr("d",arc)
		.attr("dataX",function(d){return d.data.sections;})
		.attr("dataY",function(d){return d.data.sections;})
		.attr("stroke","#fff")
		.attr("stroke-width",".5px")
		.attr("dataY",function(d){return d.data.a0910;})
		.attr("whichYear",function(){return "a0910";})
		.attr("fill",function(d, k) { 
			var thisColor=color(d.data);
			if (k==30)
				incrementYearIndex("path0910");
			return thisColor;	
		})

				.on("mouseover", function(d, k){  


					$("svg").find("path").each(function(){
						$(this).css("opacity", .5)
					})
					this.style.opacity = 1;

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2009-2010, il y a eu "+d.data.a0910 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})

		  .on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){

				$("svg").find("path").each(function(){
					$(this).css("opacity", 1)
				})

				return tooltip.style("visibility", "hidden");
			});

		 arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc.centroid(d)+")rotate("+ angle(d)+")";})//set the text in middle of the arc 
		.text(function(d){ if (d.data.sections==="annees") 

			{return '09-10'}


		})
		.attr("fill","#fff")
		.attr("text-anchor", "middle")

	var arc1 = d3.svg.arc()
				.innerRadius(inner+30)
				.outerRadius(outer+30)

	arcs.append("path")
		.attr("d",arc1)
		.attr("dataX",function(d){return d.data.sections;})
		.attr("stroke","#fff")
		.attr("stroke-width",".5px")
		.attr("whichYear",function(){return "a1011";})
		.attr("fill",function(d, k) { 	
										var thisColor=color(d.data);
										if (k==30)
											incrementYearIndex("path1011");
										return thisColor;
										})

			.on("mouseover", function(d){  

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2010-2011, il y a eu "+d.data.a1011 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})





					.on("mouseover", function(d, k){  


					$("svg").find("path").each(function(){
						$(this).css("opacity", .5)
					})
					this.style.opacity = 1;

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2010-2011, il y a eu "+d.data.a1011 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})

		  .on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){

				$("svg").find("path").each(function(){
					$(this).css("opacity", 1)
				})

				return tooltip.style("visibility", "hidden");
			});

		 arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc1.centroid(d)+")rotate("+ angle(d)+")";})//set the text in middle of the arc 
		.text(function(d){ if (d.data.sections==="annees") 

			{return '10-11'}


		})
		.attr("fill","#fff")
		.attr("text-anchor", "middle")



	var arc2 = d3.svg.arc()
				.innerRadius(inner+60)
				.outerRadius(outer+60)

	arcs.append("path")
		.attr("d",arc2)
		.attr("dataX",function(d){return d.data.sections;})
		.attr("stroke","#fff")
		.attr("stroke-width",".5px")
		.attr("whichYear",function(){return "a1112";})
		.attr("fill",function(d, k) { 
			var thisColor=color(d.data);
			if (k==30)
				incrementYearIndex("path1112");
			return thisColor;	
		})

							.on("mouseover", function(d, k){  


					$("svg").find("path").each(function(){
						$(this).css("opacity", .5)
					})
					this.style.opacity = 1;

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2011-2012, il y a eu "+d.data.a1112 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})

		  .on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){

				$("svg").find("path").each(function(){
					$(this).css("opacity", 1)
				})

				return tooltip.style("visibility", "hidden");
			});

		 arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc2.centroid(d)+")rotate("+ angle(d)+")";})//set the text in middle of the arc 
		.text(function(d){ if (d.data.sections==="annees") 

			{return '11-12'}


		})
		.attr("fill","#fff")
		.attr("text-anchor", "middle")

	var arc3 = d3.svg.arc()
				.innerRadius(inner+90)
				.outerRadius(outer+90)

	arcs.append("path")
		.attr("d",arc3)
		.attr("dataX",function(d){return d.data.sections;})
		.attr("whichYear",function(){return "a1213";})
		.attr("stroke","#fff")
		.attr("stroke-width",".5px")
		.attr("fill",function(d, k) { 
			var thisColor=color(d.data);
			if (k==30)
				incrementYearIndex("path1213");
			return thisColor;	
		})

	.on("mouseover", function(d, k){  


					$("svg").find("path").each(function(){
						$(this).css("opacity", .5)
					})
					this.style.opacity = 1;

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2012-2013, il y a eu "+d.data.a1213 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})

		  .on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){

				$("svg").find("path").each(function(){
					$(this).css("opacity", 1)
				})

				return tooltip.style("visibility", "hidden");
			});

		 arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc3.centroid(d)+")rotate("+ angle(d)+")";})//set the text in middle of the arc 
		.text(function(d){ if (d.data.sections==="annees") 

			{return '12-13'}


		})
		.attr("fill","#fff")
		.attr("text-anchor", "middle")

	var arc4 = d3.svg.arc()
				.innerRadius(inner+120)
				.outerRadius(outer+120)

	arcs.append("path")
		.attr("d",arc4)
		.attr("dataX",function(d){return d.data.sections;})
		.attr("stroke","#fff")
		.attr("stroke-width",".5px")
		.attr("whichYear",function(){return "a1314";})
		.attr("fill",function(d, k) { 
			var thisColor=color(d.data);
			if (k==30)
				incrementYearIndex("path1314");
			return thisColor;	
		})

		.on("mouseover", function(d, k){  


					$("svg").find("path").each(function(){
						$(this).css("opacity", .5)
					})
					this.style.opacity = 1;

				 var ToolDiv = tooltip[0][0];

			  ToolDiv.style.color = 'white';
			  ToolDiv.style.border = '1px #fff solid';
			  ToolDiv.style.backgroundColor = 'rgb(51,51,51)';
			  ToolDiv.style.padding = "20px 20px 20px 20px";
			  ToolDiv.style.borderRadius = "10px";
			  ToolDiv.innerHTML = "En 2013-2014, il y a eu "+d.data.a1314 +"% de " +d.data.mention+ " en "+ d.data.sections+" chez les "+d.data.sexe;


			  return tooltip.style("visibility", "visible");
			})

		  .on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){

				$("svg").find("path").each(function(){
					$(this).css("opacity", 1)
				})

				return tooltip.style("visibility", "hidden");
			});

		 arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc4.centroid(d)+")rotate("+ angle(d)+")";})//set the text in middle of the arc 
		.text(function(d){ if (d.data.sections==="annees") 

			{return '13-14'}


		})
		.attr("fill","#fff")
		.attr("text-anchor", "middle")


	 var tooltip = d3.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("visibility", "hidden")


	var arc5 = d3.svg.arc()
				.innerRadius(inner+150)
				.outerRadius(outer+150)

		arcs.append("path")
		.attr("d",arc5)
		.attr("stroke","#fff")
		.attr("stroke-width","1px")
		.attr("fill","none")

	arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc5.centroid(d)+")rotate("+ angle(d) +")";})//set the text in middle of the arc 
		.text(function(d) {return d.data.mention})//put the data
		.attr("fill","#fff")
		.attr("text-anchor", "middle")

	/*
	arcs.append("text")
		.attr("transform", function(d) {return "translate("+arc5.centroid(d)+")";})//set the text in middle of the arc 
		.text(function(d) {return d.data})//put the data
		.attr("fill","#fff")*/





	var arc6 = d3.svg.arc()
				.innerRadius(inner+180)
				.outerRadius(outer+180)

		arcs.append("path")
		.attr("d",arc6)
		.attr("stroke","#fff")
		.attr("stroke-width","0px")
		.attr("fill","none")
		.attr("rotate","11deg")

	arcs.append("text")
		.attr("transform", function(d) {
		return "translate("+arc6.centroid(d)+")rotate("+ angle(d) +")"
		;})//set the text in middle of the arc 
		.text(function(d){ if (d.data.mention==="credit") 

			{return d.data.sexe}


		})//put the data
		.attr("fill","#fff")
		.attr("text-anchor", "middle")






	function angle(d) {
		  var a = (d.startAngle + d.endAngle) * 90 / Math.PI;
		  return a;
	}

});