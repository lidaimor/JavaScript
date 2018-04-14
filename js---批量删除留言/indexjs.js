var aInput=document.getElementsByTagName('input');
var oUl=document.getElementsByTagName('ul')[0];
var num=0;
// var IsOn=true;
aInput[1].onclick=function(){
	if(!aInput[0].value){
		alert('输入内容为空！');
	}else{
		var oLi=document.createElement('li');
		oLi.innerHTML=aInput[0].value;
		if(num>=5){
			oUl.removeChild(oUl.lastChild);
		}
		oUl.children[0]?oUl.insertBefore(oLi,oUl.children[0]):oUl.appendChild(oLi);
		num++;
		aInput[0].value='';
		for(var i=0;i<oUl.children.length;i++){
			oUl.children[i].IsOn=true;
			oUl.children[i].onclick=function(){
				if(this.IsOn){
					this.style.backgroundColor='yellow';
				}else{
					this.style.backgroundColor='#fff';
				}
				this.IsOn=!this.IsOn;
			}
		}
		aInput[2].onclick=function(){
			for(var j=0;j<oUl.children.length;j++){
				if(oUl.children[j].style.backgroundColor=='yellow'){
					oUl.removeChild(oUl.children[j]);
					j--;
					num--;
				}
			}
		}
	}
}

