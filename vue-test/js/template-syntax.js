// 全局注册
var data = {
  count: 100
}
Vue.component('my-component', {
  template: '<div @click="count+=1;" class="foo bar">A custom component!<span>{{count}}</span></div>',
  data: function(){
    return data;
  }
})
//
// 局部注册
var Child = {
  template: '<div @click="count+=1;">A custom component!<span>{{count}}</span></div>'
}

var vm = new Vue({
      el: '#ele',
      data: {
        msg: '你好',
        rawhtml:'<p>我是rawhtml</p>',
        redDIV: 'red',
        fullName: 'foo bar',
        firstName: 'foo',
        lastName: 'bar',
        isButtonDisabled: false,
        number: 0,
        ok: false,
        isActive: true,
        activeColor: '#ccc',
        fontSize: 20,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        },
        items:[{
          name:'john',
          fruit: 'apple',
          id: '_001'
        },{
          name:'lirm',
          fruit: 'banana',
          id: '_002'
        },{
          name: 'jane',
          fruit: 'watermelon',
          id: '_003'
        }],
        itemObjs:{
          name: 'lirm',
          age: 23,
          sex: 'female'
        }
      },
      components: {
        // 'my-component': Child,
        'my-row': {
          template: '<span style="color:red">我是一个表格里的span</span>'
        }
      },
      computed: {
        reversedMsg: function() {
          return this.msg.split('').reverse().join('')
        }
      },
      methods: {
        counter() {
          this.number++;
        }
      },
      watch: {
        firstName: function(val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
          this.fullName = this.firstName + ' ' + val
        }
      }
    })
