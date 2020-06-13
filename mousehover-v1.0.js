function mousehover(d) { 
   svg.append("text")
    .attr('class','annot')
    .attr('x', xScale(d.x) - 55)
    .attr('y', height+(height*0.19))
    .text(d3.format(",.3f")(d.x)+', '+d3.format(",.3f")(d.y))
    .style('font-size','30px')
    .style("fill", "red")
   svg.append('line')
    .attr('class','annot')
    .style("stroke", "red")
    .attr('stroke-width','3')
    .attr("x1", xScale(d.x))
   .attr("y1", yScale(d.y))
    .attr("x2", xScale(d.x))
    .attr("y2", height);
    };
