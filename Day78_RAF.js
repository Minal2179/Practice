
var i=0,j=0,a=0;
function bouncingBall() {
	if (parseInt(j)<560 && parseInt(i)<150){
			//i++;
			//i = j*j/(4*(-5))
			//j = Math.sqrt(4*i);
			//$(".ball").offset({left	:(Math.sqrt(j*j/(4*(5)))),top:j});
			//$(".ball").offset({left	:i,top:(Math.sqrt(4*i))});
			//$(".ball").offset({left:i,top:j});
	//}
	//if(i>=150 & i<300 & j>0){
			
		//	j--;
			//$(".ball").offset({left	:i,top:(Math.sqrt(14*i*j))});
			//$(".ball").offset({left:Math.sqrt(14*i*j),top:j});
			//i++;
	//}
	//$(".ball").offset({left:i++});
	
	//$(".ball").offset({top:j++});
	
	a = 10;
	j++;
	console.log('j : '+j);
	console.log('i : '+i);
	i = Math.sqrt(4*10*j);
	$(".ball").offset({left	:i,top:j});
}
if(j >= 560)
{
	console.log('here');
	j--;
	i = 150.00 + Math.sqrt(4*10*j);
	$(".ball").offset({left	:i,top:j});
}
requestAnimationFrame(bouncingBall);
}
requestAnimationFrame(bouncingBall);