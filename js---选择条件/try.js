var oUl=document.getElementsByTagName('ul')[0];
var aLi=document.getElementsByTagName('li');
var oD=document.getElementById('p1');
var arr=[];
var num=0;
for(var i=0;i<aLi.length;i++){
	var aP=aLi[i].getElementsByTagName('p');
	for(var j=0;j<aP.length;j++){
		aP[j].onclick=function(){
			var p=j;
			if(num>0){
				for(var k=0;k<arr.length;k++){
					var m=k;
					if(arr[m].parentNode==aP[p].parentNode){
						arr.pop(this);
					}
				}
			}else{
				arr.push(this.innerHTML);
			}	
			oD.innerHTML=arr.join('  ');
		}
	}
}
