var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        flag: false,
        delFlag: false,
        curProduct: '',
        imgSrc: 'img/del.png',
    },
    filters: {
        formatMoney: function(value){
            return value.toFixed(2);
        }
    },
    mounted: function(){
        this.viewList();
        // $("#img1").hover(
        //     function(){
        //         $(this).attr("src","img/del_hov.png")
        //     },
        //     function(){
        //         $(this).attr("src","img/del.png")
        //     }
        // )
    },
    methods: {
        viewList: function(){
            var that = this;
            $.ajax({
                url: "cart.txt"
            }).done(function(res){
                var json = JSON.parse(res);
                that.productList = json.result.list;
                // that.totalMoney = json.result.totalMoney;
            })
        },
        changeMoney: function(pro,way){
            if(way<0){
                if(pro.productQuentity>1){
                    pro.productQuentity--;
                }
            }else{
                pro.productQuentity++;
            }
            this.calTotalPrice();
        },
        checkedselect: function(item){
            if(typeof item.checked == 'undefined'){
                this.$set(item,'checked',true);
            }else{
                item.checked = !item.checked;
            }
            this.calTotalPrice();
        },
        checkAll: function(){
            this.flag = !this.flag;
            var that = this;
            this.productList.forEach(function(item,index){
                if(typeof item.checked == 'undefined'){
                    that.$set(item,'checked',that.flag);
                }else{
                    item.checked = that.flag;
                }
            })
            this.calTotalPrice();
        },
        calTotalPrice: function(){
            var that = this;
            this.totalMoney = 0;
            this.productList.forEach(function(item,index){
                if(item.checked == true){
                    that.totalMoney += item.productPrice*item.productQuentity;
                }else{
                    item.checked = that.flag;
                }
            })
        },
        delConfirm: function(item){
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct: function(){
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index,1);
            this.delFlag = false;
        },
        changeImg: function(){
            this.imgSrc = 'img/del_hov.png';
        },
        returnImg: function(){
            this.imgSrc = 'img/del.png';
        }
    }
})


