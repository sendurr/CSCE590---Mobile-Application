alert("Weclome to GiftAid, Add products on cart!");



var buttonOnSite = document.getElementById("acrCustomerReviewText"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("GiftAid");  

button.appendChild(text);
button.addEventListener ("click", function() {
 
 		var img_urls, title , price , elements;
		elements  = document.getElementsByClassName("a-dynamic-image  a-stretch-vertical");
		if (typeof elements[0] === 'undefined'){
			elements = document.getElementsByClassName("a-dynamic-image  a-stretch-horizontal");
		}


		img_urls=elements[0].getAttribute("src");
		img_urls=img_urls.trim();

		elements = document.getElementsByClassName("a-size-large");
		title=elements[0].textContent;
		title=title.trim();

		elements = document.getElementsByClassName("a-size-medium a-color-price");
		price=elements[0].textContent;
		price=price.trim();


		console.log("The picture is " + img_urls);
		console.log("The title is " + title);
		console.log("The price is " + price);


		var A = [['URL','Picture','Price']];
		A.push([img_urls, title , price])

		var csvRows = [];

		csvRows.push(A[0].join(','));
		csvRows.push(A[1].join(','));

		var csvString = csvRows.join("%0A");
		var a         = document.createElement('a');
		a.href        = 'data:attachment/csv,' + csvString;
		a.target      = '_blank';
		a.download    = 'myFile.csv';

		document.body.appendChild(a);
		a.click();
});

if (next) parent.insertBefore(button, next);
else parent.appendChild(button);


//var elements = document.getElementById("imgTagWrapperId");


/*chrome.runtime.sendMessage(img_urls);
chrome.runtime.sendMessage(title);
chrome.runtime.sendMessage(price);

/*function writeToFile(d1, d2, d3){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("F:\\data.txt", 8, false, 0);
    fh.WriteLine(d1 + ',' + d2 + ',' + d3);
    fh.Close();
}

writeToFile(img_urls,title,price);

   // style = window.getComputedStyle(element),
  //  top = style.getPropertyValue('top');

/*chrome.runtime.sendMessage("Hello Wold!");

for(var i=0; i<elements.length; i++) {
 
	var img_urls=elements[i].getAttribute("src");

	var a = document.createElement('a');
	a.href = img_urls;
	a.download = "img.png";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

}*/







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

