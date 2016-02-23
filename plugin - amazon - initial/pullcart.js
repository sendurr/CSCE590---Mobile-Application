function get_data(){
	alert("button clicked");

chrome.runtime.sendMessage({"action" : "getTxns"}, function(txns) {
  alert(txns + "");
});

}

