/*Author: ronald8192*/
var blindhelper = setInterval(function(){
	var general = $($.makeArray($("#box > span")[0])).attr("style");
	var ans = -1, hitCount = 0, boxCount = $("#box > span").length;
	for (var i = 1; i < boxCount; i++) {
		if(general !== $($.makeArray($("#box > span")[i])).attr("style")) {
			ans = i;
			if(++hitCount > 1) {
				ans = 0;
				break;
			}
		}
		if(ans != -1 && i > 2) break;
	};
	$($.makeArray($("#box > span")[ans])).trigger("click");
},1);