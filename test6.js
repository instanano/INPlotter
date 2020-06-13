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
