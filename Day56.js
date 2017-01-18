$(document).ready(function(){
    $("button").click(function(){
		alert('hi2');
        $.get('Day56.xml', function(result){
			alert("hi3");
           $("#xmlContent").text(result);
        });
    });
});