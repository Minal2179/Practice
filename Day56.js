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
