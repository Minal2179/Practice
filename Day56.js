$(document).ready(function()
{
	$.get('Day56.xml', function(result){
			$(result).find('ui').each(function(){
				$(this).children().each(function(){
					switch(this.tagName) {
						case "panel":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							createElementUI(uniqueID,rectAttr,'','',this.tagName,'body');
							$(this).children().each(function(){
								var rectAttr = this.getAttribute('rect');
								var uniqueID = this.getAttribute('uniquid');
								alert("uniqueID, tagName : "+uniqueID+", "+this.tagName);
								createElementUI(uniqueID,rectAttr,'','',this.tagName,'panel');
							});
							break;
						case "button":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							var textVal = this.childNodes[0].nodeValue;
							createElementUI(uniqueID,rectAttr,textVal,'',this.tagName,'body');
							   break;
						case "image":
							var rectAttr = this.getAttribute('rect');
							var uniqueID = this.getAttribute('uniquid');
							var imgSrc = this.getAttribute('imgSrc');
							var textVal = this.childNodes[0].nodeValue;
							createElementUI(uniqueID,rectAttr,textVal,imgSrc,this.tagName,'body');
							break;
						default:
							break;
					}
				});
			});	
	});
});

function createElementUI(uniqueID,rectAttr,textVal,imgSrc,elementName,parentElement){
		switch(elementName){
			case "panel":
				createEle = "div";
				break;
			case "button":
				createEle = "button";
				break;
			case "label":
				createEle = "label";
				break;
			case "image":
				createEle = "img";
				break;
		}
		var coordinates = rectAttr.split(',');
		var uiElement = document.createElement(createEle);
		uiElement.setAttribute("id", uniqueID);
		if(imgSrc != ''){
			uiElement.setAttribute("src",imgSrc);
		}
		$(parentElement).append(uiElement);
		$('#'+uniqueID).css({'left':coordinates[0]+'px','top':coordinates[1]+'px','width':coordinates[2]+'px',"height":coordinates[3]});
		$('#'+uniqueID).text(textVal);
}