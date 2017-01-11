var downMouse = false;
var clickX,clickY,innerDivX,innerDivY;
var outerDiv = document.getElementById("outerDiv");
var innerDiv = document.getElementById("innerDiv");
// console.log(innerDiv.offsetLeft);
// console.log(innerDiv.offsetTop);
// console.log(outerDiv.offsetLeft);
// console.log(outerDiv.offsetTop);

document.addEventListener('mousedown',mouseOnDown,false);
document.addEventListener('mouseup',mouseOnUp,false);
document.addEventListener('mousemove',mouseOnMove,false);

document.addEventListener('touchstart',onDivTouchStart,false);
document.addEventListener('touchmove',onDivTouchMove,false);
document.addEventListener('touchend',onDivTouchEnd,false);


function onDivTouchStart(e){
	if (e.target.id === "innerDiv")
	touchDiv = true;
	console.log('downmouse : '+downMouse);
}

function onDivTouchMove(e){
	e.preventDefault();
	var touch = e.changedTouches[0];
	var setLeft = touch.pageX + 'px';
	var setTop = touch.pageY + 'px';
	
	if (touch.pageX > 400)
		setLeft = "400px";
	if (touch.pageX < 0)
		setLeft = "0px";
	if (touch.pageY > 400)
		setTop = "400px";
	if (touch.pageY < 0)
		setTop = "0px";

	
	if (touchDiv)
	{
		innerDiv.style.left = setLeft;
		innerDiv.style.top = setTop;
	}
}

function onDivTouchEnd(e){
	touchDiv = false;
}

function mouseOnDown(e){
	if (e.target.id === "innerDiv")
	downMouse = true;
	innerDivX = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("left"));
	innerDivY = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("top"));
	clickX = parseInt(e.clientX);
	clickY = parseInt(e.clientY);
	console.log('clickX :' + clickX);
	console.log('clickY :' + clickY);
	console.log('innerDivX :' + innerDivX);
	console.log('innerDivY :' + innerDivY);
	console.log('clickX - innerDivX : '+(clickX - innerDivX));
	console.log('clickY - innerDivY : '+(clickY - innerDivY));
	console.log('downmouse : '+downMouse);
}

function mouseOnMove(e){
	
	e.preventDefault();
	// console.log('mousemove');
	// console.log('innerDiv.style.left : '+innerDiv.style.left);
	// console.log('innerDiv.style.top : '+innerDiv.style.top);
	// console.log('e.pageX : '+e.pageX);
	// console.log('e.pageY : '+e.pageY);
	var setLeft = parseInt(e.pageX + (clickX - innerDivX))  + 'px';
	var setTop = parseInt(e.pageY + (clickY - innerDivY)) + 'px';
	
	//Made 400 to control the inner Div
	if (e.pageX > 400)
		setLeft = "400px";
	if (e.pageX < 0)
		setLeft = "0px";
	if (e.pageY > 400)
		setTop = "400px";
	if (e.pageY < 0)
		setTop = "0px";
		if (downMouse)
		{
			innerDiv.style.left = setLeft;
			innerDiv.style.top = setTop;
			// console.log('after set left : '+innerDiv.style.left);
			// console.log('after set top : '+innerDiv.style.top);
		}

}

function mouseOnUp(e){
	e.preventDefault();
downMouse = false;
}
