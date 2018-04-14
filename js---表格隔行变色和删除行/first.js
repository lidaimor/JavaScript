var oTable=document.getElementsByTagName('table')[0];
var data = [
// {'id':'编号','username':'姓名','sex':'性别','del':'操作'},
{'id':1,'username':'小一','sex':'男','del':'删除'},
{'id':2,'username':'哈哈','sex':'女','del':'删除'},
{'id':3,'username':'小三','sex':'男','del':'删除'},
{'id':4,'username':'小四','sex':'女','del':'删除'}];
function createTab(){
	for(var i=0;i<data.length;i++){
		var oTr=document.createElement('tr');
		oTable.children[0].appendChild(oTr);
		for(var j in data[i]){
			var oTd=document.createElement('td');
			oTd.innerHTML=data[i][j];
			oTable.children[0].rows[i].appendChild(oTd);
		}
	}
}
function changeColor(){
	for(var i=0;i<data.length;i++){
		if(i%2){
			oTable.children[0].rows[i].style.backgroundColor='#fff';
		}else{
			oTable.children[0].rows[i].style.backgroundColor='#e6e6e6';
		}
	}
}
createTab();
changeColor();
for(var k=0;k<data.length;k++){
	oTable.children[0].rows[k].cells[3].onclick=function(){
		oTable.children[0].removeChild(this.parentNode);
		changeColor();
	}
}