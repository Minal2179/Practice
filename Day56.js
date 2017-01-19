$(document).ready(function(){
    $("button").click(function(){
		alert('hi2');
        $.ajax({url:'Day56.xml', success:function(result){
				$(result).find('ui').each(function(){
					//https://code.tutsplus.com/tutorials/quick-tip-use-jquery-to-retrieve-data-from-an-xml-file--net-390
					// https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=jquery+read+xml+examples
					//https://www.xml.com/pub/a/2007/10/10/jquery-and-xml.html
					
				});
			});
        }});
    });
});