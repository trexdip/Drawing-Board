var canvas= document.createElement('canvas');
canvas.setAttribute('id','canvas');
document.body.appendChild(canvas);
canvas.height= 600;
canvas.width= 800;
canvas.style.border= "1px solid";
var c= canvas.getContext('2d');

function Saturn(x,y,l,b,e)
{
	c.fillStyle=e;
	c.fillRect(x,y,l,b);
}


Saturn(10,20,100,100,"#783729");
Saturn(110,120,50,50,"#E32F09");
Saturn(160,170,30,30,"#D3C0BB");
Saturn(190,200,20,20,"#573129");
Saturn(210,220,10,10,"#642619");
Saturn(220,230,5,5,"#9C5581");
Saturn(225,235,4,200,"#BF3518");
Saturn(250,235,4,200,"#BF3518");

function Axis(h,i,j,k)
{
	setInterval(function()
	{	
		c.fillRect(h,i,j,k)
		h=h+1;
		prototype(350,275,235,25,200,"maroon")
		prototype(500,400,235,75,200,"crimson")
		prototype(600,500,235,120,200,"#BF3526")
		prototype(800,700,235,135,200,"#BF3529")

		function prototype(g,o,p,q,r,e)
		{
				if(h>g)
			{	
				c.fillStyle=e;
				c.fillRect(o,p,q,r);
				c.beginPath();
				c.moveTo(225,235);
				c.lineTo(10,20);
				c.stroke();
			}	
		}
		
	},1)

}

Axis(250,235,4,4)
Axis(250,435,4,4)
Axis(225,235,4,4)
Axis(225,435,4,4)

