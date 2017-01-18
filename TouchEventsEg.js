var downMouse = false;
var touc = false;
var clickX,clickY,innerDivX,innerDivY,touchX,touchY;
var finger1X,finger1Y,finger2X,finger2Y,dist1,dist2;
var outerDiv = document.getElementById("outerDiv");
var innerDiv = document.getElementById("innerDiv");
var mylatesttap;
var doubleTap = false;
var prev = 0;
var timeout;

document.addEventListener('mousedown',mouseOnDown,false);
document.addEventListener('mouseup',mouseOnUp,false);
document.addEventListener('mousemove',mouseOnMove,false);

document.addEventListener('touchstart',onDivTouchStart,false);
document.addEventListener('touchmove',onDivTouchMove,false);
document.addEventListener('touchend',onDivTouchEnd,false);


function onDivTouchStart(e)
{
	e.preventDefault();
	touchDiv = true;
	var startTime = new Date().getTime();
	var interval = startTime - prev;
	console.log("startTime : "+startTime);
	console.log("prev : "+prev);
	console.log("interval : "+interval);
	if (interval > 0 && interval < 500)
	{
		doubleTap = true;
		console.log("doubleTap : "+doubleTap);
		clearTimeout(timeout);
		centerX = '300px';
		centerY = '300px';
		if (e.target.id === "innerDiv")
		{
			innerDiv.style.left = parseInt(300 - (innerDiv.offsetWidth)/2) + 'px';
			innerDiv.style.top = parseInt(300 - (innerDiv.offsetHeight)/2) + 'px';
		}
	}
	else
	{
	doubleTap = false;
	prev = startTime;
	console.log("prev after setting : "+prev)

	console.log("inside single tap");
	timeout = setTimeout(function(){
console.log("inside single tap timeout");
	if (e.target.id === "innerDiv")
	{
		var numTouches = e.touches.length;
		if (numTouches == 1)
		{
			var touchInnerDiv = e.touches[0];
			touchX = parseInt(touchInnerDiv.clientX);
			touchY = parseInt(touchInnerDiv.clientY);
			innerDivX = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("left"));
			innerDivY = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("top"));
		}

		if(numTouches == 2)
		{
			finger1X = e.touches[0].clientX;
			finger1Y = e.touches[0].clientY;
			finger2X = e.touches[1].clientX;
			finger2Y = e.touches[1].clientY;
			dist1 = Math.sqrt(((finger2X - finger1X)*(finger2X - finger1X)) + ((finger2Y - finger1Y)*(finger2Y - finger1Y)));
		}
	}
 },500);
}

}

function onDivTouchMove(e){

	e.preventDefault();
console.log("doubleTap inside onDivTouchMove : "+doubleTap);
	//if (doubleTap == 'false'){
	var restrict = false;
	if (e.target.id === "innerDiv"){
	var numTouches = e.touches.length;

	if(numTouches == 2)
	{
		finger1X = e.touches[0].clientX;
		finger1Y = e.touches[0].clientY;
		finger2X = e.touches[1].clientX;
		finger2Y = e.touches[1].clientY;
		dist2 = Math.sqrt(((finger2X - finger1X)*(finger2X - finger1X)) + ((finger2Y - finger1Y)*(finger2Y - finger1Y)));
		console.log(dist2);
		if (dist2 > dist1)
		{
			if (innerDiv.offsetLeft + innerDiv.offsetWidth >= 600 || innerDiv.offsetTop + innerDiv.offsetHeight >= 600)
			{
				restrict = true;
			}
			if (restrict)
			{
				innerDiv.style.left = (600 - parseInt(innerDiv.offsetWidth)) + 'px';
				innerDiv.style.top = (600 - parseInt(innerDiv.offsetHeight)) + 'px';
			}
			else
			{
				innerDiv.style.width = (parseInt(innerDiv.offsetWidth) + (dist2 - dist1)*0.2) + 'px';
				innerDiv.style.height = (parseInt(innerDiv.offsetHeight) + (dist2 - dist1)*0.2) + 'px';
			}
		}
		else
		{
			if (innerDiv.offsetWidth > 200 || innerDiv.offsetWidth > 200)
			{
			innerDiv.style.width = (parseInt(innerDiv.offsetWidth) - (dist1 - dist2)*0.2) + 'px';
			innerDiv.style.height = (parseInt(innerDiv.offsetHeight) - (dist1 - dist2)*0.2) + 'px';
			}
		}
	}

		if(numTouches == 1)
		{
			var touch = e.touches[0];

			var setLeft = parseInt(touch.pageX - (touchX - innerDivX))  + 'px';
			var setTop = parseInt(touch.pageY - (touchY - innerDivY)) + 'px';

			if (touch.pageX > 400)
				setLeft = (600 - parseInt(innerDiv.offsetWidth)) + 'px';
			if ((touch.pageX - (touchX - innerDivX)) < 0)
				setLeft = "0px";
			if (touch.pageY > 400)
				setTop = (600 - parseInt(innerDiv.offsetHeight)) + 'px';
			if ((touch.pageY - (touchY - innerDivY)) < 0)
				setTop = "0px";

			if (touchDiv)
			{
				innerDiv.style.left = setLeft;
				innerDiv.style.top = setTop;
			}
		}
	}
//}
// else {
// 	centerX = '300px';
// 	centerY = '300px';
// 	if (e.target.id === "innerDiv")
// 	{
// 		innerDiv.style.left = parseInt(300 - (innerDiv.offsetWidth)/2) + 'px';
// 		innerDiv.style.top = parseInt(300 - (innerDiv.offsetHeight)/2) + 'px';
// 	}
//
// }
}

function onDivTouchEnd(e)
{
	e.preventDefault();
	touchDiv = false;
}

function mouseOnDown(e)
{
	if (e.target.id === "innerDiv")
	downMouse = true;
	innerDivX = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("left"));
	innerDivY = parseInt(window.getComputedStyle(innerDiv,null).getPropertyValue("top"));
	clickX = parseInt(e.clientX);
	clickY = parseInt(e.clientY);
}

function mouseOnMove(e)
{
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

function mouseOnUp(e)
{
	e.preventDefault();
	downMouse = false;
}
