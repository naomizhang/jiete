// JavaScript Document

function tab(n){
	var obj=document.getElementById("tabs").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}

	