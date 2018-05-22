$.ajax({url : "a.txt",success : function(res){
	var arr=[];
	arr=JSON.parse(res);
	var n=Math.ceil(arr.length/4);
	creatList(1,arr);
	for(var i=0;i<n;i++){
		$("<li>").html(i+1).addClass("li1").on("click",function(){
			$(".li1").eq($(this).index()).addClass("on").siblings().removeClass("on");
			creatList($(this).html(),arr);
		}).appendTo($("#btn"));
	}
}});

function creatList(num,arr){
	$("#val").html("");
	for(var i = (num-1)*4 ; i < num*4 && i<arr.length ; i++){
		$("<li>").html("商品编号："+arr[i].id+"<br/>"+"商品名称："
		+arr[i].name+"<br/>"+"商品价格："+arr[i].price).appendTo($("#val"));
	}
}

