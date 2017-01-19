$(document).ready(function()
{
	$.get('Day56.xml', function(result){
		//$(result).find('ui').each(function(){
		//$(result).each(function(){
			//var xmlElement = $(this).find('panel').text();
			//var xmlElement = $(this).nodeName;
			//alert(xmlElement);
			//alert($(result)[0].childNodes[0].nodeName);
			//alert($(result)[0].childNodes[0].childNodes[0].nodeValue);
			alert($(result)[0].childNodes[0].children[0].children[0]);
			//alert($(result)[0].childNodes[0].children.length);
		//});
		
	});
})

/*

xml.find('ui').each(function(){
    $(this).children().each(function(){
        var tagName=this.tagName; // This will give Panel, button, image and Panel
        $(this).children().each(function(){
			var innerTagName = this.tagName; 
		})
		//var val=$(this).text();
        //if(val==1){
        //    $('input:checkbox[name='+tagName+']').attr('checked',true);
        //}
        //else if(val==0){
        //    $('input:checkbox[name='+tagName+']').removeAttr('checked');
        //}
    })
}); 

*********************************

http://anasthecoder.blogspot.in/2012/02/looping-through-xml-with-jquery.html 

xml.find('result').find('permissionDetails').each(function(){
    $(this).children().each(function(){
        var tagName=this.tagName;
        var val=$(this).text();
        if(val==1){
            $('input:checkbox[name='+tagName+']').attr('checked',true);
        }
        else if(val==0){
            $('input:checkbox[name='+tagName+']').removeAttr('checked');
        }
    })
}); 

*/
