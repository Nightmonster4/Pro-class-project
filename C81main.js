canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 5; 
ctx.arc(250, 210, 40 ,0 , 360); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.linewidth = 5;
ctx.arc(450, 210, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 260, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 260, 40, 0, 360);
ctx.stroke();