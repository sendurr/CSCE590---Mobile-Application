

var buttonOnSite = document.getElementById("productTitle"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("GiftAid");  

button.appendChild(text);

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "http://www.parsecdn.com/js/parse-1.4.0.min.js";
s.onload = function(){
        console.log("remote script has loaded");
    };
document.head.appendChild(s);

button.addEventListener ("click", function() {
 
 		var mainimageurl , img_urls, title , price , elements, description, url, index , details , iFrameBody, imageurls=[] , indexlast , indexfirst;

 	// get the main product images
		elements  = document.getElementsByClassName("a-dynamic-image  a-stretch-vertical");
		if (typeof elements[0] === 'undefined'){
			elements = document.getElementsByClassName("a-dynamic-image  a-stretch-horizontal");
		}

		//var images = document.getElementById("a-autoid-10-announce").src; data-a-dynamic-image
		mainimageurl  = elements[0].getAttribute("src");
		images  = elements[0].getAttribute("data-a-dynamic-image");

	// get the additional product images
		elements=document.getElementsByClassName("a-spacing-small item");
		//var elements2 =elements.getElementsByClassName("a-button-text");
		//console.log("There are " + elements[0].innerHTML + " pictures");
		for (i=0;i<elements.length;i++){

			indexlast=elements[i].innerHTML.lastIndexOf("\"");
			indexfirst = elements[i].innerHTML.lastIndexOf("src");
			temp=elements[i].innerHTML.substring(indexfirst+5 , indexlast)
			imageurls.push(temp);		
		}
		elements=document.getElementsByClassName("imgTagWrapper");
		console.log("There are " + elements.length + " pictures");

		for (i=0;i<imageurls.length;i++){
			console.log("Image url " + (i+1) + " " + imageurls[i] );
		}


		
		

		//img_urls=elements[0].getAttribute("src");
		img_urls=images;
		img_urls=img_urls.trim();

	// get the product descriptions

		getFrameContents();
		description=iFrameBody.innerText;
		description=description.trim();
		console.log(description);

		function getFrameContents(){
		   var iFrame =  document.getElementById('product-description-iframe');
		   
		   if ( iFrame.contentDocument ) 
		   { // FF
		     iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
		   }
		   else if ( iFrame.contentWindow ) 
		   { // IE
		     iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
		   }
		 }

	// get the product details

		elements = document.getElementById("detail-bullets_feature_div");

		if (elements){
			details=elements.innerText;
			details=details.trim();
			console.log(details);
		}

	// get the url of the page

		url = document.location.href;
		index=url.indexOf("ref");
		if (index >=0){
			url=url.substring(0,index);
		}

		console.log(url);

	// get the product title

		elements = document.getElementsByClassName("a-size-large");
		title=elements[0].textContent;
		title=title.trim();
		title = title.replace(',',' ');

	// get the product price

		elements = document.getElementsByClassName("a-size-medium a-color-price");
		price=elements[0].textContent;
		price=price.trim();

		/*console.log("The picture is " + img_urls);
		img_urls = img_urls.replace("{","");
		var spli1=img_urls.split(",");
		var split2=[], temp, indexlast;
		for (i=0;i<spli1.length;i+=2){
			indexlast=spli1[i].lastIndexOf(":");
			temp=spli1[i].substring(1,indexlast-1);
			imageurls.push(temp);
		}*/

		//console.log("The on of pictures is  " + spli1.length);
		
		/*console.log("The title is " + title);
		console.log("The price is " + price);*/

	// this peice of code export to the datasbase

	//	document.write('<script src="//www.parsecdn.com/js/parse-1.4.0.min.js"></script>');

		function loadDB(){
		
			Parse.initialize("zqEF2wS6DZxsiDmoNenO2a40FzejoPBvHrEuADbt",
	        "jwSZzqh4YGNu1ddY91dG4rvgqm2SrxWNX3xIqVFp");

	        importProduct();

	        function importProduct(){
	            var Item = Parse.Object.extend("Item");
	            var item =  new Item();
	            item.set("title",title);
	            item.set("description",description);
	            item.set("price",parseFloat(price));
	            item.set("url",url)
	            domain="amazon.com";

	            if(domain=="amazon.com"){
	            	store={
	                "__type": "Pointer",
	                "className": "Store",
	                "objectId": "41zVpmfXpW"
	            	}	
	            }

	            item.set("store",store);
	            poster={
	                "__type": "Pointer",
	                "className": "_User",
	                "objectId": "N1WltdmWUF"   
	            };
	            item.set("poster",poster);
	           // mainimageurl="http://ecx.images-amazon.com/images/I/91rrlAEJybL._SX522_.jpg";
	            item.set("mainimageurl",mainimageurl);
	           // imageurls=[];
	           // imageurls.push("http://ecx.images-amazon.com/images/I/91rrlAEJybL._SX522_.jpg");
	            item.set("imageurls",imageurls);
	            item.save(null,{
	                success:function(obj){
	                    console.log("product imported successfully: "+obj.id);
	                },
	                error:function(obj,error){
	                    console.log(error.message);
	                }

	            })
	        }
		}
		loadDB();


/*		<script src="js/parse-1.4.0.min.js"></script>


 <script type="text/javascript">
Parse.initialize("zqEF2wS6DZxsiDmoNenO2a40FzejoPBvHrEuADbt",
        "jwSZzqh4YGNu1ddY91dG4rvgqm2SrxWNX3xIqVFp"); */


	//  This piece of code exports to excel------

/*		var A = [['Picture URL','Title','Price']];
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
		a.click();*/
		
});

if (next) parent.insertBefore(button, next);
else parent.appendChild(button);
