$(document).ready(function(){

	var margin = {top: 20, right: 20, bottom: 30, left: 40},
    	width = ($(window).width()/10)*7,
    	height = 350 - margin.top - margin.bottom;
 
	var x0 = d3.scale.ordinal()
		.rangeRoundBands([0, width], 0.1);

	var x1 = d3.scale.ordinal();

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x0)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.tickFormat(d3.format(".2s"));

	var colorLegend=d3.scale.ordinal()
		.range(["#FBCF78", "#CAD383", "#93CEBE", "#EF7D88", "#6086C1","#A7A7A7"]);

	var textLegend=d3.scale.ordinal()
		.range(["3D","JV","PP","DWM","ANIM","ECHEC"]);


	var color = d3.scale.ordinal()
	  .range(["#FBCF78", "#FEDEA8", "#FEEDD1","#A7A7A7", "#CAD383", "#DEE2B1", "#ECEFD6","#A7A7A7", "#93CEBE", "#BEE0D6", "#DCEEE8","#A7A7A7", "#EF7D88", "#F5AEB0", "#FBE2E0","#A7A7A7", "#6086C1", "#99ABD6", "#C7D0E8","#A7A7A7"]);

	var svg = d3.select(".barChart").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var yBegin;

	var innerColumns = {
	  "column1" : ["eu une satisfaction en 3D", "eu une distinction en 3D", "eu une grande distinction en 3D","échoué en 3D"],
	  "column2" : ["eu une satisfaction en JV", "eu une distinction en JV", "eu une grande distinction en JV","échoué en JV"],
	  "column3" : ["eu une satisfaction en PP", "eu une distinction en PP", "eu une grande distinction en PP","échoué en PP"],
	  "column4" : ["eu une satisfaction en DWM", "eu une distinction en DWM", "eu une grande distinction en DWM","échoué en DWM"],
	  "column5" : ["eu une satisfaction en ANIM", "eu une distinction en ANIM", "eu une grande distinction en ANIM","échoué en ANIM"]
	}

	d3.csv("./_assets/data/barchart.csv", function(data) {
	  var columnHeaders = d3.keys(data[0]).filter(function(key) { return key !== "State"; });
	  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));
	  data.forEach(function(d) {
		var yColumn = new Array();
		d.columnDetails = columnHeaders.map(function(name) {
		  for (ic in innerColumns) {
			if($.inArray(name, innerColumns[ic]) >= 0){
			  if (!yColumn[ic]){
				yColumn[ic] = 0;
			  }
			  yBegin = yColumn[ic];
			  yColumn[ic] += +d[name];
			  return {name: name, column: ic, yBegin: yBegin, yEnd: +d[name] + yBegin,State:d.State};
			}
		  }
		});
		d.total = d3.max(d.columnDetails, function(d) { 
		  return d.yEnd; 
		});
	  });

	  x0.domain(data.map(function(d) { return d.State; }));
	  x1.domain(d3.keys(innerColumns)).rangeRoundBands([0, x0.rangeBand()]);

	  y.domain([0, d3.max(data, function(d) { 
		return d.total; 
	  })]);

	  svg.append("g")
		  .attr("class", "x axis")
		  .attr("transform", "translate(0," + height + ")")
		  .style("fill","white")
		  .call(xAxis);

		svg.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		  .style("fill","white")
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .style("fill","white")
		  .text("Personnes");

	  var project_stackedbar = svg.selectAll(".project_stackedbar")
		  .data(data)
		.enter().append("g")
		  .attr("class", "g")
		  .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

	  project_stackedbar.selectAll("rect")
		  .data(function(d) { return d.columnDetails; })
		.enter().append("rect")
		  .attr("width", x1.rangeBand())
		  .attr("x", function(d) { 
			return x1(d.column);
			 })
		  .attr("y", function(d) { 
			return y(d.yEnd); 
		  })
		  .attr("height", function(d) { 
			return y(d.yBegin) - y(d.yEnd); 
		  })
		  .style("fill", function(d) { return color(d.name); })
		  .on("mouseover", function(d){

			  var maybeS;
			  if (d.yEnd - d.yBegin == 1)
				maybeS="";
			  else
				maybeS="s";

			  var myToolTipDiv = tooltip[0][0];

			  myToolTipDiv.style.color = 'white';
			  myToolTipDiv.style.backgroundColor = 'rgb(51,51,51)';
			  myToolTipDiv.style.padding = "20px 20px 20px 20px";
			  myToolTipDiv.style.borderRadius = "10px";
			  myToolTipDiv.innerHTML = "En " + d.State + " il y a " + (d.yEnd - d.yBegin) + " étudiant" + maybeS +" qui ont " + d.name + ".";

			  return tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){return tooltip.style("top",
			 (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

			 var tooltip = d3.select("body")
			.append("div")
			.style("border", "1px #ffffff solid")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("visibility", "hidden")

	  var legend = svg.selectAll(".legend")
		  .data(columnHeaders.slice(14).reverse())
		.enter().append("g")
		  .attr("class", "legend")
		  .attr("transform", function(d, i) { return "translate(24," + i * 20 + ")"; });

	  legend.append("rect")
		  .attr("x", width - 18)
		  .attr("width", 18)
		  .attr("height", 18)
		  .style("fill", colorLegend);

	  legend.append("text")
		  .attr("x", width - 24)
		  .attr("y", 9)
		  .attr("dy", ".35em")
		  .style("text-anchor", "end")
		  .style("fill","white")
		  .text(textLegend);

	});

});