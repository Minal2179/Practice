var mouseDownX,mouseMoveX,MoveUpX;
var bar = document.getElementById("bar");
var control = document.getElementById("control");
bar.addEventListener('click',onBarClick,false);

//touch events - yet to come
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

//When user clicks on the bar, the controls moves left or right
function onBarClick(e){
barx = e.clientX;
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

// When user drags the control, it moves left or right
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
	var prevX = -1;
    ev.preventDefault();
	var controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));	
	console.log("controlx in drop : "+controlx);
	console.log(ev.pageX);
	if ((ev.pageX) > controlx)
	{
	control.style.left = (controlx + 1) + 'px';
	}
	else if ((ev.pageX) < controlx)
	{
	control.style.left = (controlx - 1) + 'px';
	}
}