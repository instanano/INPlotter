document.getElementById('dinput').addEventListener('paste', function (e) {
document.getElementById('dinput').addEventListener('input', function () {
d3.selectAll('svg').remove();
drawChart(getData());
});});
