var vm = new Vue({
  el: '#app',
  data: {
    totalMoney: 0,
    productList: []
  },
  filters: function() {

  },
  mounted: function() {
    this.cartView();
  },
  methods: {
    cartView: function() {
      var _this = this;
      _this.$http.get("src/data/cartData.json", {
        id: 123
      }).then(function(res) {
        var data = res.data;
        _this.productList = data.result.list;
        _this.totalMoney = data.totalMoney;
      })
    }
  }
});
