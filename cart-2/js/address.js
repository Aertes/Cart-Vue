new Vue({
    el: '.container',
    data: {
        addressList: []
    },
    mounted: function () {
        this.$nextTick(function () {

        });
    },
    methods: {
        getAddressList: function () {
            const _this = this;
            this.$http.get('data/address.json')
            .then(function(response){
                const res = response.data;
                if(res.status == 0){
                    _this.addressList = res.result;
                }
            });
        }
    }
})