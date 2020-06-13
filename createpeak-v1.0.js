var i = 1;
var m = 1;
var o = 1;
function createpeak(d) {
    var grp = svg.append("g").on("click",function(){if (d3.event.shiftKey) {this.remove()}}); 
      grp.append('foreignObject')
      .call(d3.drag().on("start", dragstarted).on("drag", dragged))
      .attr('id','peak'+i++)
      .attr('x', xScale(d.x) - 35)
      .attr('y', yScale(d.y) - 50)
      .attr("width", "200px")
      .attr("height", "36px")
      .style("cursor", "move")
      .append('xhtml:div')
      .attr('id','dpeak'+o++)
      .attr("contentEditable", true)
      .style("cursor", "move")
      .html(d3.format(",.2f")(d.x)+', '+d3.format(",.2f")(d.y))
      .style('font-size','30px')
      .style('display','inline-block')
      .style("background", "#fff")
      .style("text-align", "center")
      .on("contextmenu", function(data,index){d3.event.preventDefault()})   
     grp.append('line')
      .style("stroke", "black")
      .attr('id','line'+m++)
      .attr('stroke-width','3')
      .attr("x1", xScale(d.x))
      .attr("y1", yScale(d.y))
      .attr("x2", xScale(d.x))
      .attr("y2", yScale(d.y) - 17)
     };
