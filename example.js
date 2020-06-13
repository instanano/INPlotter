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

function dragstarted(d,e){
d3.select(this).raise().classed("active", true);
var current = d3.select(this);
deltaX = current.attr("x") - d3.event.x;
deltaY = current.attr("y") - d3.event.y;} 
function dragged(d,e){
d3.select(this).attr("x",d3.event.x + deltaX)
d3.select(this).attr("y",d3.event.y + deltaY)}
})

d3.select(window).on("input", function(e) { 
document.getElementById("gtitle").setAttribute("width", document.getElementById("dgtitle").scrollWidth + 20);
document.getElementById("gtitle").setAttribute("height", document.getElementById("dgtitle").scrollHeight);

document.getElementById("txaxis").setAttribute("width", document.getElementById("dtxaxis").scrollWidth + 20);
document.getElementById("txaxis").setAttribute("height", document.getElementById("dtxaxis").scrollHeight);

for (var i=1; i <= 50; i++){
document.getElementById("peak"+i).setAttribute("width", document.getElementById("dpeak"+i).scrollWidth + 20);
document.getElementById("peak"+i).setAttribute("height", document.getElementById("dpeak"+i).scrollHeight);
}
})

d3.select("#xrd").on('click', function(){
d3.select('#dtxaxis').html('2 Theta')
})
</script>