var oDiv=document.getElementsByTagName('div')[0];
var timer=null;
var oL,oT,timestamp2,disX,disY;
oDiv.onmousedown=function(ev){
	ev=ev||event;
	disX=ev.clientX-this.offsetLeft;
	disY=ev.clientY-this.offsetTop;
	var oldT=new Date().getTime();
	var oldX=ev.clientX;
	var oldY=ev.clientY;
	var timeC=0;
	var xC=0;
	var yC=0;
	var timer=null;
	oDiv.style.backgroundImage="url(../bg.png)";
	document.onmousemove=function(ev){
		ev=ev||event;
		oL=ev.clientX-disX;
		oT=ev.clientY-disY;
		var iW=document.documentElement.clientWidth;
		var iH=document.documentElement.clientHeight;
		var newT=new Date().getTime();
		timeC=newT-oldT;
		oldT=newT;
		var newX=ev.clientX;
		var newY=ev.clientY;
		xC=newX-oldX;
		yC=newY-oldY;
		oldX=newX;
		oldY=newY;
		if(oL<0){ oL=0; }
		if(oL>iW-oDiv.offsetWidth){ oL=iW-oDiv.offsetWidth; }
		if(oT<0){ oT=0; }
		if(oT>iH-oDiv.offsetHeight){ oT=iH-oDiv.offsetHeight; }
		oDiv.style.left=oL+'px';
		oDiv.style.top=oT+'px';
	}
	document.onmouseup=function(){
		document.onmousemove=document.onmouseup=null;
		oDiv.style.backgroundImage="url(../bg_h.png)";
		timer=setInterval(function(){
			var nextX=oDiv.offsetLeft+xC*3;
			var nextY=oDiv.offsetTop+yC*3;
			if(nextX<=0){
				nextX=0;
				xC=-xC;
			}else if(nextX>=document.documentElement.clientWidth-oDiv.offsetWidth){
				nextX=document.documentElement.clientWidth-oDiv.offsetWidth;
				xC=-xC;
			}
			if(nextY<=0){
				nextY=0;
				yC=-yC;
			}else if(nextY>=document.documentElement.clientHeight-oDiv.offsetHeight){
				nextY=document.documentElement.clientHeight-oDiv.offsetHeight;
				yC=-yC;
			}
			oDiv.style.left=oDiv.offsetLeft + xC*3 + "px";
			oDiv.style.top=oDiv.offsetTop + yC*3 + "px";
		},timeC*3)
	}
	return false;
}