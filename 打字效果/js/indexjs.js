var oBtn=document.getElementsByTagName('input')[0];
var timer=null;
oBtn.onclick=function(){
	var aText=document.getElementsByTagName('textarea');
	var str=aText[0].value;
	var arr=[];
	var col=[];
	arr=str.split("");
	var i=0;
	// clearInterval(timer);
	timer=setInterval(function(){
		if(i<arr.length){
			col.push(arr[i]);
			aText[1].value=col.join("");
			aText[0].value=str.substring(i,arr.length);
			i++;
		}else{
			aText[0].value='';
			clearInterval(timer);
		}
	},100);
}