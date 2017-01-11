var downMouse = false;
var outerDiv = document.getElementById("outerDiv");
var innerDiv = document.getElementById("innerDiv");
console.log(innerDiv.offsetLeft);
console.log(innerDiv.offsetTop);
console.log(outerDiv.offsetLeft);
console.log(outerDiv.offsetTop);

document.addEventListener('mousedown',mouseOnDown,false);
document.addEventListener('mouseup',mouseOnUp,false);
document.addEventListener('mousemove',mouseOnMove,false);

function mouseOnDown(e){
	console.log(e.target.id);                                                     // check if direct e.target obj can be compared
	if (e.target.id === "innerDiv")
	downMouse = true;
	console.log('downmouse : '+downMouse);
}


function mouseOnMove(e){
	
	e.preventDefault();
	console.log('mousemove');
	console.log('innerDiv.style.left : '+innerDiv.style.left);
	console.log('innerDiv.style.top : '+innerDiv.style.top);
	console.log('e.pageX : '+e.pageX);
	console.log('e.pageY : '+e.pageY);
	var setLeft = e.pageX + 'px';
	var setTop = e.pageY + 'px';
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
			console.log('after set left : '+innerDiv.style.left);
			console.log('after set top : '+innerDiv.style.top);
		}

}

function mouseOnUp(e){
	e.preventDefault();
downMouse = false;
}
