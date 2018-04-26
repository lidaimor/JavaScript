var oUl=document.getElementsByTagName("ul")[0];
var str="";
for(var i=0;i<100;i++){
	str+="<li></li>";
}
oUl.innerHTML=str;
var oli=document.getElementsByTagName("li");
var oP=document.getElementsByTagName("p")[0];
for(var i=0;i<oli.length;i++){
	oli[i].style.left=(i%10)*51+"px";
	oli[i].style.top=parseInt(i/10)*51+"px";
	oli[i].style.backgroundPosition=
	-(i%10)*51+"px " + (-parseInt(i/10)*51) + "px";
	oli[i].onmouseover=function(){
		this.style.backgroundImage="url(../img/pic.jpg)";
		oP.style.display="none";
	}
}