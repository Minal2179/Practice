var localData = "";
$(document).ready(function()
{
	$.get('Day56.xml', function(result){
		
		var mainElements = result.documentElement.children;
		for (i=0;i<mainElements.length;i++){

			if (mainElements[i].tagName === 'panel')
			{
				drawDiv(mainElements[i],"");
			}
			else
			{
				createElement(mainElements[i],"");
			}
		}
		
	});
	
		$('select').on('change', function() {
	if(this.value == "hindi"){
		$.getJSON('Hindi.json',function(result){
			//localData = JSON.parse(result);
			//alert(localData);
			//var localData = jQuery.parseJSON(JSON.stringify(result));
			//console.log(localData);
			localData = result;
			$.each(localData,function(key,value){
				$('#'+key).text(value);
			});
		});
	}
	if(this.value == "english"){
		$.getJSON('English.json',function(result){
			//localData = JSON.parse(result);
			//alert(localData);
			//var localData = jQuery.parseJSON(JSON.stringify(result));
			//console.log(localData);
			localData = result;
			$.each(localData,function(key,value){
				$('#'+key).text(value);
			});
		});
	}
	if(this.value == "spanish"){
		$.getJSON('Spanish.json',function(result){
		//localData = JSON.parse(result);
			//alert(localData);	
			//var localData = jQuery.parseJSON(JSON.stringify(result));
			//console.log(localData);
			localData = result;
			$.each(localData,function(key,value){
				$('#'+key).text(value);
			});
		});
	}
});
	
});



	function drawDiv(elementObject,parentElement){
		createElement(elementObject,parentElement);
		var j = 0;
		var divElements = elementObject.children;
		for(j;j<divElements.length;j++)
		{
			if(divElements[j].tagName == "panel")
			{
				drawDiv(elementObject.children[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
			else
			{
				createElement(divElements[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
		}
	}
	function createElement(elementObject,parentElement){
		imgSrc = "";
		switch(elementObject.tagName){
			case "button":
				ele = "button";
				break;
			case "image":
				ele = "img";
				imgSrc = elementObject.attributes["imgSrc"].value;
				break;
			case "panel":
				ele = "div";
				break;
			case "label":
				ele = "label"
				break;
		}
			var uniqueID = elementObject.attributes["uniquid"].value;
			var coordinates = elementObject.attributes["rect"].value.split(",");
			var uiElement = document.createElement(ele);
			uiElement.setAttribute("id",uniqueID);
			if (imgSrc == "")
			{
			}
			else 
				uiElement.setAttribute("src",imgSrc);
			$(uiElement).css({left: coordinates[0]+'px','top': coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"absolute"});
			if(elementObject.tagName == "panel"){
			}
			else
			{
			$(uiElement).text(elementObject.textContent);
			}
			if(parentElement === "")
				$("body").append(uiElement);
			else
				$('#'+elementObject.parentElement.attributes["uniquid"].value).append(uiElement);

	}