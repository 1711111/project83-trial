mouseEvent="empty";
canvas=document.getElementById("theCanvas");
ctx=canvas.getContext("2d");
radius=10;
width_of_line=3;
color="red";



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("radius").value;
    color=document.getElementsById("thecolo").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseUP);
function my_mouseUP(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;

    console.log("X=" + currentx + ", "+"Y=" + currenty);

if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(currentx,currenty,radius,0,2*Math.PI);
    ctx.stroke();
}

}
