

var buttonOnSite = document.getElementById("productTitle"),
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
		title = title.replace(',',' ');

		elements = document.getElementsByClassName("a-size-medium a-color-price");
		price=elements[0].textContent;
		price=price.trim();



		console.log("The picture is " + img_urls);
		console.log("The title is " + title);
		console.log("The price is " + price);


		var A = [['Picture URL','Title','Price']];
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
