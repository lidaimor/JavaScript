var oUl=document.getElementsByTagName("ul");
var aLi1=oUl[0].getElementsByTagName("li");
var aLi2=oUl[1].getElementsByTagName("li");
var timer=null;
for(var i=0;i<aLi1.length;i++){
	aLi1[i].index=i;
	aLi1[i].onmouseover=aLi2[i].onmouseover=function(){
		clearTimeout(timer);
		oUl[1].style.display="block";
		if(this.index==0){
			oUl[1].style.left=-50 +"px";
		}else{
			oUl[1].style.left=(this.index)*40 +"px";
		}
	}
	aLi1[i].onmouseout=aLi2[i].onmouseout=function(){
		timer=setTimeout(function(){
			oUl[1].style.display="none";
		},1000);
	}
}