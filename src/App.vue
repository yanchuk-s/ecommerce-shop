<template>
  <v-app>
    <div>
      <Header />
    </div>
    <div class="main">
      <div v-if="showHideLoader" class="loader-router">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
      <router-view/>
    </div>
    <notifications
      position="bottom right"
      group="addToCart"
      animation-type="velocity"
    />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  watch:{
    $route(to, from){
      console.log('Router view changing...');
      // this.$store.dispatch('showHideLoader')
    }
  },
  components:{
    Header
  },
  computed: {
    showHideLoader(){
      console.log(this.$store.getters.getLoaderStatus)
      return this.$store.getters.getLoaderStatus
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
.main{
  position: relative;
  height: 100%;
  .loader-router{
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(250,250,250,0.8);
    z-index: 999;
  }
}
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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
