<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  watch:{
    $route(to, from){
      console.log('Router view changing...');
      // this.GLOBAL.viewRouterLoaded = false;

      // console.log(from, to);
    }
  },
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
