var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// // grille
// ctx.strokeStyle="lightgrey"
// for(var x=10; x<390; x+=10){
//     ctx.moveTo(x,0);
//     ctx.lineTo(x,400);
// }
// for(var y=10; y<390; y+=10){
//     ctx.moveTo(0,y);
//     ctx.lineTo(400,y);
// }
// // ctx.stroke();
ctx.fillStyle = "white";
// function etoiles() {
    for(var i = 0; i < 100; i++) {
    let x = Math.random() * 400;
    let y = Math.random() * 400;
    let s = Math.random() * 3;
    ctx.beginPath();
    ctx.arc(x, y, s, 1, Math.PI * 1);
    ctx.fill();
   }


ctx.beginPath();
ctx.fillStyle= "white";
ctx.moveTo(125,180);
ctx.quadraticCurveTo(160,90,200,180);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "grey";
ctx.moveTo(60,220);
ctx.quadraticCurveTo(160,130,270,220);
ctx.fill();


ctx.beginPath();
ctx.moveTo(60,220);
ctx.quadraticCurveTo(160,270,270,220);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#CFBCBC";
ctx.arc(50, 50,70,0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#382B1C";
ctx.arc(55, 90,20,0, Math.PI * 2, true);
ctx.fill();


ctx.beginPath();
ctx.fillStyle= "#382B1C";
ctx.arc(20, 30,5,0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#382B1C";
ctx.arc(90, 15,10,0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#382B1C";
ctx.arc(64, 35,4,0, Math.PI * 2, true);
ctx.fill();
