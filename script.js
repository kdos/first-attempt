function loadPage(event){
			var xmlhttp;
				if (window.XMLHttpRequest)
	  			{// code for IE7+, Firefox, Chrome, Opera, Safari
	  				xmlhttp=new XMLHttpRequest();
	  			}
				else
	 			{// code for IE6, IE5
	  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  			}
  			xmlhttp.onreadystatechange = function() {
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
   				{
    				document.getElementById("page").innerHTML=xmlhttp.responseText;
    			}
  			}

  			var count;
  			count = event.target.innerHTML;
  			count = count.toString();

  			xmlhttp.open("GET",count + ".htm",true);
			xmlhttp.send();

}

function onLoad(){
 			var xmlhttp;
				if (window.XMLHttpRequest)
	  			{// code for IE7+, Firefox, Chrome, Opera, Safari
	  				xmlhttp=new XMLHttpRequest();
	  			}
				else
	 			{// code for IE6, IE5
	  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  			}
  			xmlhttp.onreadystatechange = function() {
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
   				{
    				document.getElementById("page").innerHTML=xmlhttp.responseText;
    			}
  			}

  			xmlhttp.open("GET","introduction.htm",true);
			xmlhttp.send();
}


