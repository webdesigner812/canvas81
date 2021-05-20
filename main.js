canvas=document.getElementById("my-canvas");
ctx=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.rect(100,143,430,300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=6;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=6;
ctx.arc(250,230,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=6;
ctx.arc(350,230,40,0,2*Math.PI);
ctx.stroke();