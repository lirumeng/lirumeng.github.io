new Vue({
  el: ".container",
  data: {
    addressList: [],
    limitNum: 3,
    currentIndex: 0,
    shoppingMethod: 0
  },
  mounted: function() {
    this.$nextTick(function() {
      this.getAddressList();
    });
  },
  methods: {
    getAddressList: function() {
      var _this = this;
      this.$http.get("src/data/address.json").then(response => {
        var res = response.data;
        if (res.status == "0") {
          _this.addressList = res.result;
        }
      });
    },
    loadMore: function(){  //点击 more 的时候
      this.limitNum = this.addressList.length;
    },
    setDefault: function(addressId){
      this.addressList.forEach(function(value, index){
        if(value.addressId==addressId){
          value.isDefault = true;
        }else{
          value.isDefault = false;
        }
      });
    }
  },
  computed: {
    filteredAddress: function() {
      return this.addressList.slice(0, this.limitNum);
    }
  }
});
