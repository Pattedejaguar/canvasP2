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

// torse
ctx.beginPath();
ctx.fillStyle= "#784302";
ctx.fillRect(180,200,80,150);

// jambe gauche
ctx.beginPath();
ctx.fillStyle= "#784302";
ctx.fillRect(180,300,30,100);

// jambe droite
ctx.beginPath();
ctx.fillStyle= "#784302";
ctx.fillRect(230,300,30,100);

// bras gauche
ctx.beginPath();
ctx.fillRect(120,200,60,30);

// bras droit
ctx.beginPath();
ctx.fillRect(260,200,60,30);

// tête
ctx.beginPath();
ctx.arc(220,180,40,0, Math.PI * 2, true);
ctx.fill();

// entrejambe

ctx.beginPath();
ctx.fillStyle="white"
ctx.moveTo(210,350);
ctx.quadraticCurveTo(220,320,230,350);
ctx.fill();

// main gauche

ctx.beginPath();
ctx.fillStyle="lightgrey"
ctx.moveTo(120,200);
ctx.quadraticCurveTo(97,212,120,230);
ctx.fill();
ctx.stroke();

// main droite

ctx.beginPath();
ctx.moveTo(320,200);
ctx.quadraticCurveTo(345,212,320,230);
ctx.fill();
ctx.stroke();

// pied gauche

ctx.beginPath();
ctx.moveTo(180,400);
ctx.quadraticCurveTo(195,420,210,400);
ctx.fill();
ctx.stroke();

// pied droit
ctx.beginPath();
ctx.moveTo(230,400);
ctx.quadraticCurveTo(245,420,260,400);
ctx.fill();
ctx.stroke();

// sourire
ctx.beginPath();
ctx.fillStyle = "red"
ctx.moveTo(190,170);
ctx.quadraticCurveTo(215,230,250,170);
ctx.fill();
ctx.stroke();

// sourire
ctx.beginPath();
ctx.fillStyle= "#784302";
ctx.moveTo(190,170);
ctx.quadraticCurveTo(215,215,250,170);
ctx.fill();
ctx.stroke();

// oeil
ctx.beginPath();
ctx.fillStyle= "white"
ctx.arc(220,160,10,0, Math.PI * 2, true);
ctx.fill();


ctx.beginPath();
ctx.fillStyle= "black"
ctx.arc(220,160,5,0, Math.PI * 2, true);
ctx.fill();

// dent

ctx.beginPath();
ctx.fillStyle="white"
ctx.fillRect(215,192,3,4)

// boutons

ctx.beginPath();
ctx.fillStyle= "#D617A5"
ctx.arc(220,240,7,0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#D617A5"
ctx.arc(220,270,10,0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle= "#D617A5"
ctx.arc(220,300,12,0, Math.PI * 2, true);
ctx.fill();
