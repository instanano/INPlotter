d3.select("#addtext").on('click', function(){
d3.select('.dchart').append("g").on("click",function(){
    			$('foreignObject').on('click', function() {
          $('foreignObject').removeClass("dhe");
 				  $(this).addClass('dhe')
   				})})
 .append('foreignObject')
 .call(d3.drag().on("start", dragstarted).on("drag", dragged))
 .attr('class','frobj')
 .attr('x', 600)
 .attr('y', 200)
 .attr("width", "75px")
 .attr("height", "55px")
 .append('xhtml:div')
 .attr('class','frdiv')
 .attr("contentEditable", true)
 .style("cursor", "move")
 .html("Text")
 .style('font-size','30px')
 .style('display','inline-block')
 .style('transform','translateY(7px)')
 .on("contextmenu", function(data,index){d3.event.preventDefault()})
})
