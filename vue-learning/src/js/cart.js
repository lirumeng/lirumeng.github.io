new Vue({
  el: '#app',
  data: {
    totalMoney: 0,
    productList: [],
    checkedAllFlag: false,
    delFlag: false,
    curProduce: null
  },
  filters:{
    formatMoney: function(value){
      return '￥'+ value.toFixed(2);
    }
  },
  mounted: function() {
    this.$nextTick(function(){
      this.cartView();   //入口方法;
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
        // this.totalMoney = data.result.totalMoney;

      })
    },
    changeQuantity: function(product, way){
      if(way>0){
        product.productQuantity ++;
      }else{
        product.productQuantity --;
        if(product.productQuantity<1){
          product.productQuantity = 1;
        }
      }
      this.calcTotalPrice();
    },
    selectedProduct: function(item){
      if(typeof item.checked == 'undefined'){
        // Vue.set(item, "checked", true);  //全局注册
        this.$set(item, "checked", true);  //局部注册
      }else{
        item.checked = !item.checked;
      }
      this.calcTotalPrice();
    },
    checkedAll: function(flag){
      this.checkedAllFlag = flag;
      var _this = this;
      this.productList.forEach(function(item, index){
        if(typeof item.checked == 'undefined'){
          // Vue.set(item, "checked", true);  //全局注册
          _this.$set(item, "checked", _this.checkedAllFlag);  //局部注册
        }else{
          item.checked = _this.checkedAllFlag;
        }
      });
      this.calcTotalPrice();
    },
    calcTotalPrice: function(){
      var _this = this;
      this.totalMoney = 0;
      this.productList.forEach(function(item, index){
        if(item.checked){
          _this.totalMoney += (item.productPrice*item.productQuantity);
        }
      });
    },
    delConfirm: function(item){
      this.delFlag = true;
      this.curProduce = item;
    },
    delProduct: function(){
      // this.delProduct.$delete(this.curProduce);  // version1.0
      var index = this.productList.indexOf(this.curProduce);
      this.productList.splice(index, 1);
      this.delFlag = false;
    }
  }
});
Vue.filter("money", function(value, type){   //全局过滤器
  return "￥" + value.toFixed(2) + type;
})
