new Vue({
  el: '#app',
  data: {
    totalMoney: 0,
    productList: []
  },
  filters:{
    formatMoney: function(value){
      return '￥'+ value.toFixed(2);
    }
  },
  mounted: function() {
    this.$nextTick(function(){
      this.cartView();   //入口方法
    });
  },
  methods: {
    cartView: function() {
      // var _this = this;
      let  _this = this;
      this.$http.get("src/data/cartData.json", {
        id: 123
      }).then(res=>{
        var data = res.data;
        this.productList = data.result.list;
        this.totalMoney = data.totalMoney;
      })
    }
  }
});
Vue.filter("money", function(value, type){   //全局过滤器
  return "￥" + value.toFixed(2) + type;
})
