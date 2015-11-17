/*Author: ronald8192*/
var blindhelper = setInterval(function(){
	$("#box").find("span").each(function(i,e){
		if($(e).data("type")=="a"){$(this).click();return false;}
	});
},1);

