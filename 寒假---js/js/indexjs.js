var oUl=document.getElementsByTagName("ul")[0];
var oLi=document.getElementsByTagName("li")[1];
var oUl2=document.getElementsByTagName("ul")[1];
oLi.onmouseover=function(){
	oUl2.style.display="block";
}
oLi.onmouseout=function(){
	oUl2.style.display="none";
}
var oDiv=document.getElementsByClassName("hov")[0];
var oP=document.getElementById("p1");
oDiv.onmouseover=function(){
	// oDiv.style.backgroundImage="url(../img/foot.jpg)";
	oP.style.display="block";
}
oDiv.onmouseout=function(){
	// oDiv.style.backgroundImage="url(../img/bg.jpg)";
	oP.style.display="none";
}