<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>小前端一枚</p>
    <ul>
      <li><a href="https://github.com/lirumeng" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
      <li><a><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
      <li><a href="http://weibo.com/3006380537/fans?topnav=1&wvr=6&mod=message&need_filter=1" target="_blank"><i class="fa fa-weibo" aria-hidden="true"></i></a></li>
      <li><a><i class="fa fa-weixin" aria-hidden="true"></i></a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Zinky'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  font-size: 30px;
}
</style>
