if(!localStorage.hasOwnProperty("analytics_loadTime")){
	localStorage["analytics_loadTime"]=0;
}
else{
console.log("Chrome :", chrome);
	chrome.webNavigation.onCompleted.addListener(function(data){
		var p = window.performance.timing;
		localStorage.analytics_loadTime=(p.domComplete-p.navigationStart)+parseInt(localStorage.analytics_loadTime);
		MyApp.dataInstance.trigger("LT");
	});
};
