var arr1 = ["../img/1.png","../img/2.png","../img/3.png","../img/4.png"];
var arr2 = ["乌鸦","精灵","妖精","超人"];
var oDiv=document.getElementById("div1");
var oBtn=oDiv.getElementsByTagName("button");
var oImg=document.getElementsByTagName("img")[0];
var oP1=document.getElementById("p1");
var oP2=document.getElementById("p2");
oP1.innerHTML='1/4';
oP2.innerHTML=arr2[0];
var i=0;
oBtn[0].onclick=function(){
	i--;
	if(i<0){
		i=3;
	}
	oImg.src=arr1[i];
	oP1.innerHTML=i+1+'/'+arr1.length;
	oP2.innerHTML=arr2[i];
}
oBtn[1].onclick=function(){
	i++;
	if(i>3){
		i=0;
	}
	oImg.src=arr1[i];
	oP1.innerHTML=i+1+'/'+arr1.length;
	oP2.innerHTML=arr2[i];
}
