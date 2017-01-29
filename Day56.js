$(document).ready(function()
{
	$.get('Day56.xml', function(result){
		
		var mainElements = result.documentElement.children;
		for (i=0;i<mainElements.length;i++){
			if (mainElements[i].tagName === 'panel')
			{
				//drawDiv(mainElements[i]);
			}
			else
			{
				createElement(mainElements[i]);
			}
		}
		
		
		
		
			$(result).find('ui').each(function(){
				$(this).children().each(function(){
					switch(this.tagName) {
						case "panel":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							//createElementUI(uniqueID,rectAttr,'','', this.tagName,'body');
							$(this).children().each(function(){
								var rectAttr = this.getAttribute('rect');
								var uniqueID = this.getAttribute('uniquid');
								//alert("uniqueID, tagName : "+uniqueID+", "+this.tagName);
								//createElementUI(uniqueID,rectAttr,'','',this.tagName,'panel');
							});
							break;
						case "button":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							var textVal = this.childNodes[0].nodeValue;
							//createElementUI(uniqueID,rectAttr,textVal,'',this.tagName,'body');
							   break;
						case "image":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							var imgSrc = this.getAttribute('imgSrc');
							var textVal = this.childNodes[0].nodeValue;
							//createElementUI(uniqueID,rectAttr,textVal,imgSrc,this.tagName,'body');
							break;
						default:
							break;
					}
				});
			});	
	});
});

	function createElement(elementObject){
		console.log(elementObject.tagName);
		switch(elementObject.tagName){
			case "button":
				ele = "button";
				break;
			case "image":
				ele = "img";
				break;
		}
			var uniqueID = elementObject.attributes["uniquid"].value;
			var coordinates = elementObject.attributes["rect"].value.split(",");
			var uiElement = document.createElement(ele);
			uiElement.setAttribute("id",uniqueID);
			$(uiElement).css({'left':coordinates[0]+'px','top':coordinates[1]+'px','width':coordinates[2]+'px',"height":coordinates[3]});
			$(uiElement).text(elementObject.textContent);
			$("body").append(uiElement);

	}