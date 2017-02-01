
function bouncingBall() {
	var drop = 1;
	$(".ball").css({left:'550px'});
	var i=0;
	for (i;i<3;i++){
		if (drop == 1)
		{
			//$(".ball").css({top:'550px'});
			$(".ball").removeClass('rise');
			$(".ball").addClass('drop');
			drop = 0;
		}
		else
		{
			$(".ball").removeClass('drop');
			$(".ball").addClass('rise');
			drop = 1;
		}
	}
	requestAnimationFrame(bouncingBall);
}

requestAnimationFrame(bouncingBall);