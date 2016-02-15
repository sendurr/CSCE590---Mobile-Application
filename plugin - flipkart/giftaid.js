alert("Weclome to GiftAid, Add products on cart!");


var elements = document.getElementsByClassName("product-image");

for(var i=0; i<elements.length; i++) {
 
	var img_urls=elements[i].getAttribute("src");

	var a = document.createElement('a');
	a.href = img_urls;
	a.download = "img.png";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

}







/*console.log("The first product is " + a);

var a = document.querySelector("[class='product-image']").attr("src", a).attr("download", "img.png").appendTo("body");

a[0].click();


a.remove();

//var title =document.title;

/*chrome.browserAction.onClicked.addListener(click);

function click(){
	//var title = document.title;
	//console.log("The URL title is " + title);
	

}*/

//var a=document.querySelector("[a-link-normal sc-product-link]");
// a[0].click();


//console.log("The URL title is " + a[0].src);

//document.getElementById("sc-buy-box-ptc-button").click();
//document.getElementById("view-cart-form").submit();

