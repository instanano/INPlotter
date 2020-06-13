function dragstarted(d,e){
d3.select(this).raise().classed("active", true);
var current = d3.select(this);
deltaX = current.attr("x") - d3.event.x;
deltaY = current.attr("y") - d3.event.y;
};
    
function dragged(d,e){
d3.select(this).attr("x",d3.event.x + deltaX)
d3.select(this).attr("y",d3.event.y + deltaY)
for (var i=1; i <= 50; i++){
var peakx = -35;
var peaky = -33;
d3.select('#line'+i).attr("x2", function (d) {
return d3.select('#peak'+i).attr("x") - peakx
});
d3.select('#line'+i).attr("y2", function (d) {
return d3.select('#peak'+i).attr("y") - peaky
})}
};
