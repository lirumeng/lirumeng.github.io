var example1 = new Vue({
  el: '#ele3',
  data: {
    counter: 0
  },
  methods: {
    say: function(msg){
      alert(msg);
    },
    keyEnter: function(){
      alert("key enter");
    }
  }
})
