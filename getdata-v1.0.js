function mainData(){
var data = document.getElementById('dinput').value.trim().split('\n').map(line => {
let tokens = line.trim().split(/\s+/).map(str => Number(str, 10));
return { x: tokens[0], y: tokens[1] }
});return data;};

function getData(){ 
data1 = mainData();
return data1};
