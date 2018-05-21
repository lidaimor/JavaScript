var jRe={
	0 : /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/,
	1 : /^[1][3,4,5,7,8][0-9]{9}$/,
	2 : /\w[^_]{6,10}/
}
var oF=document.getElementsByTagName('form')[0];
var aInput=oF.getElementsByTagName("input");
var aDiv=document.getElementsByClassName("warn");
var oImg=document.getElementById("ch");
function judje(i){
	aInput[i].onblur=function(){
		var str=this.value;
		if(str!=""){
			if(!jRe[i].test(str)){
				aDiv[i].innerHTML="格式不正确，请重新输入！";
			}else{
				aDiv[i].innerHTML="";
			}
		}
	}
}
for(i=0;i<aInput.length-1;i++){
	judje(i);
}
aInput[3].onblur=function(){
	var str=aInput[2].value;
	if(jRe[2].test(str)){
		if(str==aInput[3].value){
			aDiv[3].innerHTML="";
		}else{
			aDiv[3].innerHTML="密码不一致";
		}
	}
}
var bOn=true;
oImg.onclick=function(){
	if(bOn){
		oImg.src="../img/img_login/sure.jpg";
	}else{
		oImg.src="../img/img_login/sure_bd.jpg";
	}
	bOn=!bOn;
}


