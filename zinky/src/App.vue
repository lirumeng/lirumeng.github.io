<template>
  <div id="app">
    <img src="./assets/avatar.jpg" class="img-avatar">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .img-avatar {
  -webkit-transition: .3s;
  transition: .3s;
  border: 4px solid #42b983;
  border-radius: 60px 0;
}

#app .img-avatar:hover {
  border-color: #e13157;
  border-radius: 50%;
}
</style>
