var oBody=document.getElementsByTagName('tbody')[0];
for(var i=1;i<=9;i++){
	var oR=document.createElement('tr');
	oBody.appendChild(oR);
	for(var j=1;j<=i;j++){
		var oD=document.createElement('td');
		oD.innerHTML=j+'*'+i+'='+i*j;
		oR.appendChild(oD);
	}
}