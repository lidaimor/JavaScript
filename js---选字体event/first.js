var oDiv=document.getElementsByTagName('div')[0];
var oUl=document.getElementsByTagName('ul')[0];
var aLi=document.getElementsByTagName('li');
oDiv.onclick=function(ev){
	ev=ev||event;
	oUl.style.display='block';
	ev.cancelBubble=true;
}
oUl.onclick=function(ev){
	ev=ev||event;
	oUl.style.display='block';
	ev.cancelBubble=true;
}
document.onclick=function(){
	oUl.style.display='none';
}
for(var i=0;i<aLi.length;i++){
	aLi[i].onclick=function(ev){
		ev=ev||event;
		for(var j=0;j<aLi.length;j++){
			aLi[j].style.backgroundColor='#fff';
		}
		this.style.backgroundColor='orange';
		oDiv.innerHTML=this.innerHTML;
		oUl.style.display='none';
		ev.cancelBubble=true;
	}
	aLi[i].onmouseover=function(){
		this.style.backgroundColor='orange';
	}
	aLi[i].onmouseout=function(){
		if(this.innerHTML==oDiv.innerHTML){
		this.style.backgroundColor='orange';
		}else{
			this.style.backgroundColor='#fff';
		}
	}
}