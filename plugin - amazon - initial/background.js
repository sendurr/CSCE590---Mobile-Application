
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

var data=[];
var index=0 , i;

function writeToFile(){
	alert(data[0]);


}


function func_submit(){
	for (i=0;i<data.length;i++){
			alert(data[i]);
	}
	writeToFile(data[0],data[1],data[2]);
}

chrome.browserAction.onClicked.addListener(function (){
	chrome.tabs.create({'url': 'giftcart.html', selected: true});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

});

chrome.runtime.onMessage.addListener(function(response , sender , sendResponse){
	if(response.action == "getTxns") {
		alert("I reached here");
  	  sendResponse("got your request"); 
	}
	data[index]=response.trim();
	index = index+1;
});
//chrome.browserAction.onClicked.addListener(click);