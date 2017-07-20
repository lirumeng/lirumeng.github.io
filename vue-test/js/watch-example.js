var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question.'
  },
  watch: {
    // 当question发生改变，这个函数就会运行
    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Question usually contain a question mark.'
          return
        }
        this.answer = 'Thinking...'
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function(res) {
            vm.answer = _.capitalize(res.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API' + error
          })
      }, 500 //为用户停止输入等待的毫秒数
    )
  }
})
