var downMouse = false;
var touc = false;
var clickX,clickY,innerDivX,innerDivY,touchX,touchY;
var fingerX = [],fingerY = [];
var outerDiv = document.getElementById("outerDiv");
var innerDiv = document.getElementById("innerDiv");

document.addEventListener('mousedown',mouseOnDown,false);
document.addEventListener('mouseup',mouseOnUp,false);
document.addEventListener('mousemove',mouseOnMove,false);

document.addEventListener('touchstart',onDivTouchStart,false);
document.addEventListener('touchmove',onDivTouchMove,false);
document.addEventListener('touchend',onDivTouchEnd,false);


function onDivTouchStart(e){
	if (e.target.id === "innerDiv")
	touchDiv = true;

	var touchInnerDiv = e.touches[0];
	touchX = parseInt(touchInnerDiv.clientX);
	touchY = parseInt(touchInnerDiv.clientY);
	innerDivX = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("left"));
	innerDivY = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("top"));
	
	var numTouches = touchInnerDiv.length;
	for (var i=0; i<e.touches[0].length; i++){ // loop through all touch points currently in contact with surface
        //do something with each Touch object (point)
		fingerX[i] = e.touches[i].clientX;
		fingerY[i] = e.touches[i].clientY;
		console.log('fingerX['+i+']'+fingerX[i]);
		console.log('fingerY['+i+']'+fingerY[i]);
	}

}

function onDivTouchMove(e){
	e.preventDefault();
	var touch = e.touches[0];
	
	var setLeft = parseInt(touch.pageX - (touchX - innerDivX))  + 'px';
	var setTop = parseInt(touch.pageY - (touchY - innerDivY)) + 'px';

	
	if (touch.pageX > 400)
        setLeft = "400px";
    if ((touch.pageX - (touchX - innerDivX)) < 0)
        setLeft = "0px";
    if (touch.pageY > 400)
        setTop = "400px";
    if ((touch.pageY - (touchY - innerDivY)) < 0)
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
}

function mouseOnMove(e){
	
	e.preventDefault();
	var setLeft = parseInt(e.pageX - (clickX - innerDivX))  + 'px';
	var setTop = parseInt(e.pageY - (clickY - innerDivY)) + 'px';
	
	if (e.pageX > 400)
        setLeft = "400px";
    if ((e.pageX - (clickX - innerDivX)) < 0)
        setLeft = "0px";
    if (e.pageY > 400)
        setTop = "400px";
    if ((e.pageY - (clickY - innerDivY)) < 0)
        setTop = "0px";
		if (downMouse)
		{
			innerDiv.style.left = setLeft;
			innerDiv.style.top = setTop;
			
		}

}

function mouseOnUp(e){
	e.preventDefault();
downMouse = false;
}
