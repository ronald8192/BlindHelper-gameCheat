/*Author: ronald8192*/
var blindhelper = setInterval(function(){
	var general = $("#box > span").first().attr("style");
	var ans = -1, hitCount = 0, boxCount = $("#box > span").length;
	for (var i = 1; i < boxCount; i++) {
		if(general !== $("#box > span").eq(i).attr("style")) {
			ans = i;
			if(++hitCount > 1) {
				ans = 0;
				break;
			}
		}
		if(ans != -1 && i > 2) break;
	};
	$("#box > span").eq(ans).trigger("click");
},1);