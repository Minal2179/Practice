
function bouncingBall() {
	var drop = 1;
	$(".ball").css({left:'550px'});
	var i=0;
	for (i;i<3;i++){
		if (drop == 1)
		{
			$(".ball").css({top:'550px'});
			drop = 0;
		}
		else
		{
			$(".ball").css({top:'0px'});
			drop = 1;
		}
	}
	requestAnimationFrame(bouncingBall);
}

requestAnimationFrame(bouncingBall);
