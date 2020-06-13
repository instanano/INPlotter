<script>
var o=1;var p=1;
d3.select("#addtext").on('click', function(){
d3.select('.dchart').append('foreignObject')
 .call(d3.drag().on("start", dragstarted).on("drag", dragged))
 .on("click",function(){if (d3.event.shiftKey) {this.remove()}})
 .attr('id','nfrobj'+o++)
 .attr('x', 600)
 .attr('y', 200)
 .attr("width", "300px")
 .attr("height", "36px")
 .append('xhtml:div')
 .attr('id','ntext'+p++)
 .attr("contentEditable", true)
 .style("cursor", "move")
 .html("Text")
 .style('font-size','30px')
 .style('display','inline-block')
 .on("contextmenu", function(data,index){d3.event.preventDefault()})

</script>
