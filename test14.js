document.getElementById('dinput').addEventListener('paste', function (e) {
document.getElementById('dinput').addEventListener('input', function () {
d3.selectAll('svg').remove();
drawChart(getData());
});});


function drawChart(data) {
var coreheight = 720
var corewidth = 1280
var margin = {top: 10, right: 30, bottom: 120, left: 60}
, width = corewidth - margin.left - margin.right
, height = coreheight - margin.top - margin.bottom;

var xExtent = d3.extent(data, function(d) { return d.x; }),
xRange = xExtent[1] - xExtent[0],
yExtent = d3.extent(data, function(d) { return d.y; }).reverse(),
yRange = yExtent[1] - yExtent[0];

var xScale = d3.scaleLinear().range([50, width]).domain([xExtent[0] - (xRange * .05), xExtent[1] + (xRange * .05)]);;
var yScale = d3.scaleLinear().range([0, height]).domain([yExtent[0] - (yRange * .1), yExtent[1] + (yRange * .05)]);;

var line = d3.line()
 .x(function(d, x) { return xScale(d.x); })
 .y(function(d, y) { return yScale(d.y); })
 .curve(d3.curveMonotoneX);

d3.select('#chartdiv')
 .append('svg')
 .attr('class','graph')
 .style('background-color','#fff')
 .attr("viewBox", "0 0 "+ corewidth +" "+ coreheight +"")
 .on('dblclick', function(){if(lastIndex > -1) { createpeak(data[lastIndex]); } })
 .on("mousemove", mousemove);

var svg = d3.select(".graph")
 .append("g")
 .attr("class", "dchart")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
 .attr("class", "y axis")
 .call(d3.axisLeft(yScale).ticks(7))
 .attr("transform", "translate(50, 0)")
 .attr('font-size','25px');

svg.append("g")
 .attr("class", "x axis")
 .attr("transform", "translate(0," + height + ")")
 .call(d3.axisBottom(xScale).ticks(7))
 .attr('font-size','25px');

svg.append("path")
 .datum(data)
 .attr("class", "line")
 .attr("d", line);

d3.select('.dchart')
 .append('foreignObject')
 .call(d3.drag().on("start", dragstarted).on("drag", dragged))
 .attr('class','tyaxis')
 .attr('x', - width*0.04)
 .attr('y', height*0.35)
 .attr("width", "20%")
 .attr("height", "100%")
 .append('xhtml:div')
 .attr('id','dtyaxis')
 .style("cursor", "move")
 .attr("contentEditable", true)
 .html('Intensity (a.u.)')
 .style('font-size','30px')
 .style("transform", "rotate(-90deg) translateX(-100%) translateY(40%)")
 .style('transform-origin','left')
 .style('width','fit-content')
 .on("contextmenu", function(data,index){d3.event.preventDefault()});
 
d3.select('.dchart')
 .append('foreignObject')
 .call(d3.drag().on("start", dragstarted).on("drag", dragged))
 .attr('id','txaxis')
 .attr('x', width*0.4)
 .attr('y', height+(height*0.07))
 .attr("width", "201px")
 .attr("height", "36px")
 .append('xhtml:div')
 .attr('id','dtxaxis')
 .style("cursor", "move")
 .attr("contentEditable", true)
 .html('Wavelength(nm)')
 .style('font-size','30px')
 .style('width','fit-content')
 .on("contextmenu", function(data,index){d3.event.preventDefault()});

var gtitle = d3.select('.dchart').append("g")
 gtitle.append('foreignObject')
 .call(d3.drag().on("start", dragstarted).on("drag", dragged))
 .attr('id','gtitle')
 .attr('x', width - 200)
 .attr('y', 15)
 .attr("width", "141px")
 .attr("height", "37px")
 .append('xhtml:div')
 .attr('id','dgtitle')
 .attr("contentEditable", true)
 .style("cursor", "move")
 .html("<a style='color:darkblue'>♦</a> Raw Plot")
 .style('font-size','30px')
 .style('width','fit-content')
 .on("contextmenu", function(data,index){d3.event.preventDefault()});

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

d3.selectAll('.line')
 .style("fill", "none")
 .style('stroke','darkblue')
 .style('stroke-width','6');
 
}drawChart(getData());
