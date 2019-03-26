<template>
<header class="header">
  <transition name="fade">
    <div @click="showHide" v-if="mobNav" class="bg-nav"></div>
  </transition>
  <transition name="slide">
    <div
      v-if="mobNav"
      class="mobile-nav-list"
    >
      <div>
        <v-btn 
          @click="showHide"
          flat icon color="pink"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </div>
      <ul>
        <li>
          <a @click="homelink">Home</a>
        </li>
         <li
          v-for="category in categories" v-bind:key="category.title"
        >
          <a @click="catalogLink(category.title)">{{category.title}}</a>
        </li>
        <li
          v-for="lable in lables" v-bind:key="lable.title"
        >
          <a @click="labelLink(lable.title)">{{lable.title}}</a>
        </li>
      </ul>
    </div>
  </transition>
  <div class="container">
    <div class="mobile-nav">
       <v-btn 
        @click="showHide"
        flat icon color="pink"
      >
        <v-icon>notes</v-icon>
      </v-btn>
    </div>
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo-white.svg">
    </div>
    <div class="category-nav">
      <ul>
        <li>
          <a @click="homelink">Home</a>
        </li>
        <li
          v-for="category in categories" v-bind:key="category.title"
        >
          <a @click="catalogLink(category.title)">{{category.title}}</a>
        </li>
        <li
          v-for="lable in lables" v-bind:key="lable.title"
        >
          <a @click="labelLink(lable.title)">{{lable.title}}</a>
        </li>
      </ul>
    </div>
    <div class="cart-icon">
      <v-btn @click="smallCartShowHide" flat icon color="pink">
        <v-icon>shopping_cart</v-icon>
      </v-btn>
      <div v-if="smallCartLenght>0" class="cart-counter">
        <span>
          {{smallCartLenght}}
        </span>
      </div>
      <transition name="fade">
        <div v-if="smallCartShow && smallCartLenght>0" class="small-cart">
          <div class="small-cart-items">
            <SmallCartItem />
          </div>
          <div class="small-cart-footer">
            <button @click="pushCart" class="link-big-cart">
              to order
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div> 
</header>
</template>

<script>
import SmallCartItem from '@/components/SmallCartItem.vue'
export default {
  name: 'Header',
  components: {
    SmallCartItem
  },
  data() {
    return {
      mobNav: false,
      smallCartShow: false
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getAllCategories
    },
    lables() {
      return this.$store.getters.getAllLables
    },
    smallCartLenght() {
      return this.$store.getters.getSmallCartLenght
    }
  },
  mounted() {
     this.$on('showHideSmallCart', this.deleteProdHideShowCart);
  },
  methods: {
    showHide: function () {
      this.mobNav =! this.mobNav
    },
    smallCartShowHide: function () {
      if(this.smallCartLenght > 0){
        this.smallCartShow =! this.smallCartShow
      }
    },
    deleteProdHideShowCart: function () {
      this.smallCartShow =! this.smallCartShow
    },
    closenavLink: function () {
      let _this = this
      if(_this.mobNav == true){
        _this.mobNav = false
      }
    },
    catalogLink: function (category) {
      this.$router.push({ name: 'catalog', params: { category: category } })
      this.closenavLink()
    },
    labelLink: function (label) {
      this.$router.push({ name: 'catalog', params: { category: label } })
      this.closenavLink()
    },
    homelink: function (){
      this.$router.push({ name: 'home'})
      this.closenavLink()
    },
    pushCart: function () {
      this.$router.push({ name: 'cart'})
      this.deleteProdHideShowCart()
    }
  }
}
</script>

<style lang="scss">
.header .container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 82px;
  border-bottom: 1px solid #e1e1e1;
  // position: sticky;
  z-index: 9;
  .mobile-nav{
    display: none;
  }
  .category-nav{
    height: 100%;
    ul{
      height: 100%;
      padding: 0;
      margin: 0;
      li{
        height: 100%;
        a{
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #646464;
          padding: 8px;
          display: flex;
          align-items: center;
          height: 100%;
          min-width: 80px;
          justify-content: center;
          border-bottom: 2px solid #fff;
          cursor: pointer;
          &:hover{
            border-bottom: 2px solid #000;
          }
        }
      }
    }
  }

  .cart-icon{
    position: relative;
    .cart-counter{
      position: absolute;
      top: 0;
      right: 0;
      background: #000;
      color: #fff;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 10px;
        margin-left: -2px;
        margin-top: 1px;
      }
    }
    .small-cart{
      width: 300px;
      position: absolute;
      right: 0;
      z-index: 11;
      background: #f2f2f2;
      border-radius: 4px;
      box-shadow: 0 2px 4px 0 hsla(0,0%,61.2%,.5);
      .small-cart-footer{
        padding: 20px 10px;
        background: #fff;
        border-radius: 8px;
        .link-big-cart{
          background: #ecf0f2;
          color: #6d797e;
          text-transform: uppercase;
          outline: none;
          border: none;
          cursor: pointer;
          width: 100%;
          padding: 15px;
          border-radius: 4px;
          &:hover{
            background: #e0e6ea;
            color: #646e73;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 991px){
  .header{
    .container{
      .mobile-nav{
        display: block;
        z-index: 9998;
      }
      .category-nav{
        display: none;
      }
    }
  }
  .mobile-nav-list{
      position: fixed;
      width: 300px;
      background: #fff;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 9999;
    ul{
      display: flex;
      flex-direction: column;
      padding: 0;
      li{
        a{
          display: flex;
          min-height: 50px;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-left: 20px;
          cursor: pointer;
          text-transform: uppercase;
          color: #000;
        }
      }
    }
  }
}

.slide-leave-active{
  transition: .3s;
}
.slide-enter-active {
  transition: .3s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}



</style>
