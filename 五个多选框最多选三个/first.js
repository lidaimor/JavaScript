var oF=document.getElementsByTagName('form')[0];
var num=0;
oF.onclick=function(ev){
	var ev=ev||event;
	var target=ev.target||ev.srcElement;;
	if(target.type=='checkbox'){
		if(target.checked){
			num++;
		}else{
			num--;
		}
	}
	if(num>3){
		target.checked=false;
		num--;
	}
}
