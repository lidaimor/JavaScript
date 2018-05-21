var oH=document.getElementById("mq");
var oP=document.getElementById("dis");
var bOn=true;
oH.onclick=function(){
	if(bOn){
		oP.style.display="block";
	}else{
		oP.style.display="none";
	}
	bOn=!bOn;
	return false;
}