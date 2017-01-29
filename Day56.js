$(document).ready(function()
{
	$.get('Day56.xml', function(result){
		
		var mainElements = result.documentElement.children;
		//console.log("mainElements.length : "+mainElements.length);
		for (i=0;i<mainElements.length;i++){

			if (mainElements[i].tagName === 'panel')
			{
				//console.log("have to draw panel");
				drawDiv(mainElements[i],"");
			}
			else
			{
				createElement(mainElements[i],"");
			}
		}
		
	});
});
	function drawDiv(elementObject,parentElement){
		createElement(elementObject,parentElement);
		var divElements = elementObject.children;
		//console.log("elementObject.tagname : "+elementObject.tagName);
		//console.log("elementObject.children.length : "+elementObject.children.length);
		for(j=0;j<elementObject.children.length;j++){
			//console.log("elementObject.tagName : "+elementObject.children[j].tagName);
			if(elementObject.children[j].tagName == "panel")
			{
				//console.log("no child panel");
				drawDiv(elementObject.children[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
			else
			{
				console.log("panel's children divElements[i].tagName : "+divElements[j].tagName);
				console.log("elementObject.parentElement.attributes[uniquid].value : "+divElements[j].parentElement.attributes["uniquid"].value );
				createElement(divElements[j],divElements[j].parentElement.attributes["uniquid"].value);
			}
		}
	}
	function createElement(elementObject,parentElement){
		imgSrc = "";
		//console.log(elementObject.tagName);
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
			$(uiElement).css({left: coordinates[0]+'px',top: coordinates[1]+'px',width: coordinates[2]+'px',height: coordinates[3],position:"relative"});
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