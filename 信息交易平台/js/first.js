var oUl=document.getElementById('picture');
var aLi=oUl.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
	aLi[i].onmouseover=function(){
		for(var j=0;j<aLi.length;j++){
			aLi[j].style.opacity='0.6';
		}
		this.style.opacity='1';
	}
	aLi[i].onmouseout=function(){
		for(var j=0;j<aLi.length;j++){
			aLi[j].style.opacity='1';
		}
	}
}
