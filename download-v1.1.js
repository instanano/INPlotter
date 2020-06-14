d3.select("#download")
.on('click', function(){
d3.selectAll('.annot').remove()
d3.select('.cantext').remove();
d3.select('.canimg').remove();
d3.select('.downloadimg').append('text').attr('class','cantext').text('Preview: Right Click to Save or Copy Image').style('font-size','50px').style('color','darkred')
var doctype = '<?xml version="1.0" standalone="no"?>'
  + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
var source = (new XMLSerializer()).serializeToString(d3.select('.graph').node());
var blob = new Blob([ doctype + source], { type: 'image/svg+xml;charset=utf-8' });
var url = window.URL.createObjectURL(blob);
var img = d3.select('body').append('img')
 .attr('width', 0)
 .attr('height', 0)
 .node();
img.onload = function(){
  var canvas = d3.select('.downloadimg').append('canvas').attr('class','canimg').node();
  canvas.width = 1280;
  canvas.height = 720;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
}
img.src = url;
})
