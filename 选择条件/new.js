var oUl=document.getElementsByTagName('ul')[0];
var aLi=document.getElementsByTagName('li');
var oD=document.getElementById('p1');
var aP=oUl.getElementsByTagName('p');
var arr=[];
var num=0;
for(var i=0;i<aP.length;i++){
	var k=i;
	aP[i].onclick=function(ev){
		ev=ev||event;
		if(this.parentNode==aLi[0]&&num==0){
			arr.push(this.innerHTML);
			num++;
		}else{
			for(var i=0;i<arr.length;i++){
				var j=i;
				if(arr[i].parentNode==aLi[0]){
					alert(j);
					arr.splice(j,1,ev.innerHTML);
				}
			}
		}
		oD.innerHTML=arr;
	}
}