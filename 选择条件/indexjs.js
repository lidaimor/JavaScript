var oUl=document.getElementsByTagName('ul')[0];
var aLi=document.getElementsByTagName('li');
var oD=document.getElementById('p1');
for(var i=0;i<aLi.length;i++){
	add(i);
}
function add(i){
	var aP=aLi[i].getElementsByTagName('p');
	var oSpan=document.createElement('span');
	for(var j=0;j<aP.length;j++){
		aP[j].onclick=function(){
			oSpan.innerHTML=this.innerHTML;
			oD.appendChild(oSpan);
			var list=document.getElementsByTagName('span');
			for(var i=0;i<list.length;i++){
				list[i].onclick=function(){
					oD.removeChild(this);
				}
			}
		}
	}
}
// for(var i=0;i<aLi.length;i++){
// 	var aP=aLi[i].getElementsByTagName('p');
// 	var oSpan=document.createElement('span');
// 	for(var j=0;j<aP.length;j++){
// 		aP[j].onclick=function(){
// 			//给p里面添加一个标签
// 			oSpan.innerHTML=this.innerHTML;
// 			oD.appendChild(oSpan);			
// 			//删除p里面的一个标签
// 			var list=document.getElementsByTagName('span');
// 			for(var i=0;i<list.length;i++){
// 				list[i].onclick=function(){
// 					oD.removeChild(this);
// 				}
// 			}
// 		}
// 	}
// }