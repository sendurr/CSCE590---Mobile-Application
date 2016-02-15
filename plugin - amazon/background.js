
/*chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    console.log(tabURL);
});*/

/*function click(){
	chrome.tabs.executeScript(null,{
		code: "console.log('It worked')"
	});
}*/

function click(){
	chrome.tabs.query({active: true , currentWindow:true}, function(tabs){
		console.log("background.js : \n");
		var tab = tabs[0];
		var url = tab.url;
		console.log("The URL is" + url);
		//document.getElementById("add-to-cart-button").click();
		var title = document.title;
		console.log("The URL title is " + title);
	});
}



chrome.browserAction.onClicked.addListener(click);