//changes
// negative values, control moves out... restrict 0-100
// keydown par take key value
//bind events to document

var mouseDownX,mouseMoveX,MoveUpX;
var downMouse = false;
var touchControl = false;
var keyValue;
var bar = document.getElementById("bar");
var control = document.getElementById("control");
var inputtext = document.getElementById("inputtext");
var body = document.getElementsByTagName("body")[0]; //wtf is this :P
bar.addEventListener('click',onBarClick,false);
bar.addEventListener('touchstart',onBarTouch,false);
body.addEventListener('mousedown',mouseOnDown,false);
document.addEventListener('mouseup',mouseOnUp,false);
document.addEventListener('mousemove',mouseOnMove,false);
document.addEventListener('touchstart',onControlTouchStart,false);
document.addEventListener('touchmove',onControlTouchMove,false);
document.addEventListener('touchend',onControlTouchEnd,false);
inputtext.addEventListener('keydown',textChangeDown,false);
inputtext.addEventListener('keyup',textChangeUp,false);
//control.addEventListener('DOMCharacterDataModified',textChange,false);

function textChangeDown(e){
	// if (e.target.id = 'inputtext')
	// {
		// console.log("document.getElementById : "+document.getElementById("inputtext").value);
		 //control.style.left = e.key + 'px';
		 keyValue = e.key;
	// }
	//
 //var enteredkey = document.getElementById("inputtext").value;
	// console.log(enteredkey);
	// keyValue = enteredkey;
}
function textChangeUp(e){
	
	console.log("keyValue : "+keyValue);
	console.log("e.key in keyup : "+e.key);
	
	control.style.left = document.getElementById("inputtext").value + 'px';
	
}

function onControlTouchStart(e){
	touchControl = true;
}

function onControlTouchMove(ev){
	var touch = ev.touches[0];
		var controlx;
	if (touchControl)
	{
	controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));	
	console.log("controlx in onControlTouchMove : "+controlx);
	console.log(touch.pageX);
    //ev.target.appendChild(document.getElementById(data));
	if ((touch.pageX) > controlx)
	{
	if (controlx < 100)
	control.style.left = (controlx + 1) + 'px';
	}
	else if ((touch.pageX) < controlx)
	{
	if (controlx > 0)
	control.style.left = (controlx - 1) + 'px';
	}

	}
	document.getElementById("inputtext").innerHTML = parseInt(control.style.left);

}

function onControlTouchEnd(e){
touchControl = false;
}

function onBarTouch(e){
e.preventDefault();
var barx = bar.clientX;
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
document.getElementById("inputtext").value	 = parseInt(control.style.left);
}
function onBarClick(e){
barx = e.clientX;

//controlx = control.offsetLeft;
//controly = control.offsetRight;
var rect = control.getBoundingClientRect();
//var controlx = rect.left;
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
document.getElementById("inputtext").value = parseInt(control.style.left);
}

function mouseOnDown(e){
	//e.preventDefault();
	console.log(e.target.id);                                                     // check if direct e.target obj can be compared
	if (e.target.id === "control")
	downMouse = true;
	//mouseDownX = e.clientX;
	//console.log("mouseDownX : "+mouseDownX);
}

function mouseOnMove(ev){
	ev.preventDefault();
	var controlx;
	//if (ev.target.id === "control")
	//{
		if (downMouse)
		{
			controlx = parseInt(window.getComputedStyle(control,null).getPropertyValue("left"));	
			console.log("controlx in mouseOnMove : "+controlx);
			console.log(ev.pageX);
			//ev.target.appendChild(document.getElementById(data));
			if ((ev.pageX) > controlx)
			{
				if (controlx < 100)
				control.style.left = (controlx + 1) + 'px';
			}
			else if ((ev.pageX) < (controlx+5))
			{
				if (controlx > 0)
				control.style.left = (controlx - 1) + 'px';
			}

			
			document.getElementById("inputtext").value = parseInt(control.style.left);
		}
	//}
}

function mouseOnUp(e){
	
	e.preventDefault();
	downMouse = false;
}
