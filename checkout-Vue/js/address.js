var vm = new Vue({
    el: '.container',
    data: {
        addressList: [],

    },
    mounted: function(){
        // this.$nextRick(function(){
        //
        // });
        this.getAddressList();
    },
    methods: {
        getAddressList: function(){
            var that = this;
            $.ajax({
                url: "address.txt"
            }).done(function(res){
                var json = JSON.parse(res);
                that.addressList = json.result;
            })
        }
    }
})