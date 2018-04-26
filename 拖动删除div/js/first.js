var oDiv=document.getElementById("gab");
var oUl=document.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
for(var i=0;i<aLi.length;i++){
	del(i);
}
function del(i){
		aLi[i].onmousedown=function(ev){
		ev=ev||event;
		var disX=ev.clientX-this.offsetLeft;
		var disY=ev.clientY-this.offsetTop;
		document.onmousemove=function(ev){
			ev=ev||event;
			aLi[i].style.left=ev.clientX-disX+"px";
			aLi[i].style.top=ev.clientY-disY+"px";
			aLi[i].style.zIndex="2";
		}
		document.onmouseup=function(ev){
			ev=ev||event;
			if(ev.clientX+aLi[i].offsetWidth>oDiv.offsetLeft){
				aLi[i].style.display='none';
			}
			this.onmousedown=this.onmousemove=null;
		}
		return false;
	}
}
