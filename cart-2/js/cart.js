
const vm = new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag: false
    },
    // 局部过滤器，只能在当前实例中调用
    filters: {
        formatMoney: function (value) {
            return '￥' + value.toFixed(2);
        }
    },
    mounted: function () {
        this.cartView();
    },
    methods: {
        cartView: function () {
            let _this = this;
            this.$http.get('data/cartData.json', { 'id': 123 })
                .then(res => {
                    this.productList = res.data.result.list;
                    this.totalMoney = res.data.result.totalMoney;
                });
        },
        changeMoney: function (product, way) {
            if (way > 0) {
                product.productQuantity++;
            } else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
        },
        selectedProduct: function (item) {
            let _this = this;
            if (typeof item.checked == 'undefined') {
                // 全局注册变量
                // Vue.set(item, 'checked', true);
                // 局部注册变量
                this.$set(item, 'checked', true);
            } else {
                item.checked = !item.checked;
            }
            this.productList.forEach(function(item, index){
                if(item.checked){
                    _this.checkAllFlag = true;
                }else{
                    _this.checkAllFlag = false;
                }
            })
        },
        checkAll: function (flag) {
            let _this = this;
            this.checkAllFlag = flag;
            this.productList.forEach(function (item, index) {
                if (typeof item.checked == 'undefined') {
                    _this.$set(item, 'checked', _this.checkAllFlag)
                } else {
                    item.checked = _this.checkAllFlag;
                }
            })
        }
    }
});

// 全局过滤器，可以在任何一个页面调用。
Vue.filter('money', function (value, type) {
    return '￥' + value.toFixed(2) + type;
});