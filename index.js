var canvas= document.createElement('canvas');
canvas.setAttribute('id','canvas');
document.body.appendChild(canvas);
canvas.height= 600;
canvas.width= 800;
canvas.style.border= "1px solid";
var c= canvas.getContext('2d');
c.fillStyle="#bcbbbb";
c.fillRect(10,20,100,100)
c.fillRect(110,120,50,50)
c.fillRect(160,170,30,30)
c.fillRect(190,200,20,20)
c.fillRect(210,220,10,10)
c.fillRect(220,230,5,5)
c.fillRect(225,235,4,19)
