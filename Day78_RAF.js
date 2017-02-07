
var i=0,j=0;
function bouncingBall() {
	if (j<560){
			j++;
			//i = j*j/(4*(-5))
			//j = $('.ball').offset().left;
			$(".ball").offset({left	:(Math.sqrt(j*j/(4*(5)))),top:j});
			//$(".ball").offset({left:i,top:j});
	}
	//if(i>=150 & i<300 & j>0){
			
		//	j--;
			//$(".ball").offset({left	:i,top:(Math.sqrt(14*i*j))});
			//$(".ball").offset({left:Math.sqrt(14*i*j),top:j});
			//i++;
	//}
	//$(".ball").offset({left:i++});
	
	//$(".ball").offset({top:j++});
	requestAnimationFrame(bouncingBall);
}

requestAnimationFrame(bouncingBall);