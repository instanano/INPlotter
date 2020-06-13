var lastIndex = -1;
function mousemove(){
 let x = d3.mouse(this)[0];
 let closest = data.reduce((best, value, i) => {
  let absx = Math.abs(xScale(value.x) - x + 60) 
  if(absx < best.value) {
   return {index: i, value:absx};
  }
  else{
   return best;
  }
  }, {index:0, value:Number.MAX_SAFE_INTEGER});  
  d3.selectAll('.annot').remove();
  lastIndex = closest.index;
  mousehover(data[closest.index]);
};

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
