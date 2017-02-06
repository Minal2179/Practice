
var i=0,j=0;
function bouncingBall() {

			$(".ball").offset({left	:i=i+3,top:j=j+2});
	requestAnimationFrame(bouncingBall);
}

requestAnimationFrame(bouncingBall);
