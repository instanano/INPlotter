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
var yScale = d3.scaleLinear().range([0, height]).domain([yExtent[0] - (yRange * .1), yExtent[1] + (yRange * .05)]);
