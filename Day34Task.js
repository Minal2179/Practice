var mouseDownX,mouseMoveX,MoveUpX;
var bar = document.getElementById("bar");
var control = document.getElementById("control");
/*control.addEventListener("click",setPosition,false);
function setPosition(e){
var leftPos = control.offsetLeft;
control.style.left = (leftPos+10) + "px";*/
bar.addEventListener('click',onBarClick,false);
//bar.addEventListener('touchstart',onBarTouch,false);
// control.addEventListener('mousedown',mouseOnDown,false);
// control.addEventListener('mouseup',mouseOnUp,false);
// control.addEventListener('mousemove',mouseOnMove,false);
function onBarTouch(e){
var rect = control.getBoundingClientRect();
var controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));
if (parseInt(barx) > parseInt(controlx))
{
	console.log("in if : barx :" + barx + " " + "controlx :" + controlx);
	if (controlx < 100)
	control.style.left = (controlx + 1) + 'px';
}
else if (parseInt(barx) < parseInt(controlx))
{
	console.log("in else barx :" + barx + " " + "controlx :" + controlx);
	if (controlx > 0)
	control.style.left = (controlx - 1) + 'px';
} 
document.getElementById("inputtext").value = control.style.left;
}
function onBarClick(e){
barx = e.clientX;

//controlx = control.offsetLeft;
//controly = control.offsetRight;
var rect = control.getBoundingClientRect();
//var controlx = rect.left;
var controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));
//alert(controlx);


if (parseInt(barx) > parseInt(controlx))
{
	console.log("in if : barx :" + barx + " " + "controlx :" + controlx);
	if (controlx < 100)
	control.style.left = (controlx + 1) + 'px';
}
else if (parseInt(barx) < parseInt(controlx))
{
	console.log("in else barx :" + barx + " " + "controlx :" + controlx);
	if (controlx > 0)
	control.style.left = (controlx - 1) + 'px';
} 
document.getElementById("inputtext").value = control.style.left;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	//var controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));
	//console.log("controlx in drag : "+controlx);
    //ev.dataTransfer.setData("controlx", controlx);
}

function drop(ev) {
	var prevX = -1;
    ev.preventDefault();
    //var controlx = ev.dataTransfer.getData("controlx");
	var controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));	
	console.log("controlx in drop : "+controlx);
	console.log(ev.pageX);
    //ev.target.appendChild(document.getElementById(data));
	if ((ev.pageX) > controlx)
	{
	control.style.left = (controlx + 1) + 'px';
	}
	else if ((ev.pageX) < controlx)
	{
	control.style.left = (controlx - 1) + 'px';
	}
}

// function mouseOnDown(e){
	// mouseDownX = e.clientX;
	// console.log("mouseDownX : "+mouseDownX);
// }

// function mouseOnMove(e){
	// mouseMoveX = e.clientX;
	// if (mouseDownX < mouseMoveX)
	// {
		// console.log("mouseDownX < mouseMoveX");
		// console.log("mouseMoveX : "+mouseMoveX);
	// }
	// else
	// {
		// console.log("mouseDownX > mouseMoveX");
		// console.log("mouseMoveX : " +mouseMoveX);
	// }
// }

// function mouseOnUp(e){
	// control.style.left = (mouseMoveX + 1) + 'px';
// }