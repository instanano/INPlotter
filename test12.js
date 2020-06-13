var line = d3.line()
 .x(function(d, x) { return xScale(d.x); })
 .y(function(d, y) { return yScale(d.y); })
 .curve(d3.curveMonotoneX);

svg.append("path")
 .datum(data)
 .attr("class", "line")
 .attr("d", line)
 .style("fill", "none")
 .style('stroke','darkblue')
 .style('stroke-width','6');
