<template>
 <div class="category">
   <div class="home-posters">
     <div class="poster" @click="pushCategory('shoes')">
       <img src="https://cdn-images-1.medium.com/max/1200/1*fIjMPuu-Rk7Qrox7Kqh1Zg.jpeg" alt="">
       <div class="poster-text">
         shoes
       </div>
     </div>
     <div class="poster" @click="pushCategory('outerwear')">
       <img src="https://pbs.twimg.com/media/C8HHtvqX0AU584s.jpg" alt="">
       <div class="poster-text">
         outerwear
       </div>
     </div>
     <div class="poster" @click="pushCategory('clothing')">
       <img src="http://submarinewear.ru/wa-data/public/shop/products/60/09/960/images/6554/6554.970.jpg" alt="">
       <div class="poster-text">
         clothing
       </div>
     </div>
     <div class="poster" @click="pushCategory('accessories')">
       <img src="https://i.ebayimg.com/images/g/hnEAAOSwLaZZsXZg/s-l300.jpg" alt="">
       <div class="poster-text">
         accessories
       </div>
     </div>
     <div class="poster" @click="pushCategory('new')">
       <img src="https://static.wixstatic.com/media/1a876a_4bc687ebc60041bfac10447c98c73faa~mv2.jpg/v1/fit/w_960,h_714,al_c,q_80/file.png" alt="">
       <div class="poster-text">
         NEW
       </div>
     </div>
     <div class="poster" @click="pushCategory('sale')">
       <img src="https://scontent-lax3-2.cdninstagram.com/vp/6a1da4e1d7708fe29356099b0e06c936/5CF8F0A2/t51.2885-15/e35/c6.0.737.737/s480x480/30948696_160511861308830_7180710317003898880_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com" alt="">
       <div class="poster-text">
         SALE
       </div>
     </div>
   </div>
   <v-container grid-list-md text-xs-center>
     <div class="news carousel-home">
       <div class="carousel-home-header">
          <h2>NEW</h2>
       </div>
       <carousel :items=4 :nav=false :responsive="{0:{items:2,nav:false},600:{items:2,nav:false},900:{items:3,nav:false}, 1024:{items:4,nav:false}}">
         <div v-for="(product, index) in news" :key="index">
          <ItemCarousel
            :item= product
          />
        </div>
        <template slot="prev">
          <span class="prev">
            <i class="material-icons">
              chevron_left
            </i>
          </span>
        </template>
        <template slot="next">
          <span class="next">
            <i class="material-icons">
              chevron_right
            </i>
          </span>
        </template>
        </carousel>
     </div>
  </v-container>
  <v-container grid-list-md text-xs-center>
     <div class="sale carousel-home">
       <div class="carousel-home-header">
          <h2>SALE</h2>
       </div>
       <carousel :items=4 :nav=false :responsive="{0:{items:2,nav:false},600:{items:2,nav:false},900:{items:3,nav:false}, 1024:{items:4,nav:false}}">
         <div v-for="(product, index) in sales" :key="index">
          <ItemCarousel
            @click.native="prodshow"
            :item= product
          />
        </div>
        <template slot="prev">
          <span class="prev">
            <i class="material-icons">
              chevron_left
            </i>
          </span>
        </template>
        <template slot="next">
          <span class="next">
            <i class="material-icons">
              chevron_right
            </i>
          </span>
        </template>
        </carousel>
     </div>
  </v-container>
   <!-- <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in products" :key="index" xs3>
        <Item
          @click.native="prodshow"
          :item= product
        />
      </v-flex>
    </v-layout>
 </v-container> -->
 </div>
</template>

<script>
import Item from '@/components/Item.vue'
import ItemCarousel from '@/components/ItemCarousel.vue'
import carousel from 'vue-owl-carousel'
export default {
  name: 'home',
  computed: {
    products() {
       return this.$store.getters.getAllProducts
    },
    news(){
      return this.$store.getters.getItemByLabel(1);
    },
    sales() {
      return this.$store.getters.getItemByLabel(2);
    }
  },
  components:{
    Item,
    ItemCarousel,
    carousel
  },
  methods: {
   pushCategory: function (category) {
     this.$router.push({ name: 'catalog', params: { category: category } })
   }
  }
}
</script>

<style lang="scss">
.carousel-home{
  margin: 40px 0;
  position: relative;
  .prev{
    position: absolute;
    top: 0;
    right: 60px;
    background-color: rgba(0,0,0,.4);
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
      background-color: rgba(0,0,0,.6);
    }
  }
  .next{
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
      background-color: rgba(0,0,0,.6);
    }
  }
  .carousel-home-header{
    margin-bottom: 20px;
    text-align: left;
  }
}
.home-posters{
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  .poster{
    width: 33.33333333333%;
    height: 400px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform .4s;
    }
    .poster-text{
      display: flex;
      padding-left: 20px;
      padding-top: 20px;
      font-size: 20px;
      text-transform: uppercase;
      text-decoration: underline;
      color: #fff;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    &:hover{
      img{
        transform: scale(1.2);
      }
    }
  }
}
@media screen and (max-width: 991px){
  .category{
    .container.grid-list-md .layout .flex.xs3{
      flex-basis: 50%;
      max-width: 50%;
    }
  }
}

@media screen and (max-width: 768px){
  .home-posters{
    .poster{
      width: 50%;
      height: 350px;
    }
  }
}

@media screen and (max-width: 425px){
  .home-posters{
    .poster{
      width: 100%;
      height: 200px;
    }
  }
  .category{
    .container.grid-list-md .layout .flex.xs3{
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
</style>
