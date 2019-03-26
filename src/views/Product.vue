<template>
  <div class="product-wrp">
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <div class="label-new" v-if="product.label == 1">
          new
        </div>
        <div class="label-sale" v-if="product.label == 2">
          sale
        </div>
        <carousel :items=1>
          <div
            v-for="(img, index) in product.photos" :key="index"
          >
            <img v-bind:src="img.src" alt="">
          </div>
        </carousel>
      </v-flex>
      <v-flex xs6 class="product-info-wrp">
        <div class="product-header">
          <div class="peoduct-general-info">
            <div class="product-title">
              <h1>{{product.title}}</h1>
            </div>
            <div @click="catalogLink(getCategoryName.title)" class="product-category">
              {{getCategoryName.title}}
            </div>
          </div>
          <div class="product-price">
            {{product.price}}$
          </div>
        </div>
        <div class="product-size">
          <div>
            <v-select
            @change="changeSize"
            :items="product.sizes"
            name="Size"
            label="Select a size"
            v-model="size"
            item-text="size"
            ></v-select>
          </div>
        </div>
        <div class="add-to-cart">
          <button
            v-bind:class="{ error: selectSize }"
            @click="addToCart"
          >{{textButton}}</button>
        </div>
        <div class="info-about-product">
          <div class="info-item">
            <div>
              Article
            </div>
            <div>
              {{product.article}}
            </div>
          </div>
           <div class="info-item">
            <div>
              Producing Сountry
            </div>
            <div>
              {{product.producingСountry}}
            </div>
          </div>
        </div>
        <div class="product-description">
          {{product.description}}
        </div>
      </v-flex>
    </v-layout>
 </v-container>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  components: {
    carousel
  },
  data() {
    return {
      size: '',
      selectSize: false,
      textButton: 'Add to cart'
    }
  },
  computed: {
    product(){
      return this.$store.getters.getProductBySlug(this.$route.params.slug)
    },
    getCategoryName() {
       return this.$store.getters.getGategoryForItem(this.product.category);
    },
    smallCart(){
      return this.$store.getters.getSmallCart
    }
  },
  methods: {
    buttonError: function () {
      this.selectSize = true
      this.textButton = 'Select size'
    },
    buttonSuccess: function () {
      this.selectSize = false
      this.textButton = 'Add to cart'
    },
    changeSize: function () {
      this.buttonSuccess()
    },
    addToCart: function () {
      let productName = this.product.title
      if(this.size == ''){
        this.buttonError()
      }else{
        let selectSize = this.size
        let product = {
          id: this.product.id,
          size: this.size,
          category: this.getCategoryName.title
        }
        this.$store.dispatch('addProductSmallcart', product);
        this.$store.dispatch('addProductBigCart', product);
        this.$notify({
          group: 'addToCart',
          type: 'success',
          title: `${productName}, ${selectSize} Size`,
          text: 'Add to cart',
          duration: 1000,
        });
        this.size = ''
      }
    },
    catalogLink: function (category) {
      this.$router.push({ name: 'catalog', params: { category: category } })
    },
  }
}
</script>

<style lang="scss">
.product-wrp{
  .product-info-wrp{
    padding-left: 40px!important;
  }
  .primary--text {
    color: #000 !important;
    caret-color: #000 !important;
  }
  padding: 40px 0;
  .product-header{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
    margin-bottom: 20px;
    .product-category{
      color: #868686;
      text-transform: capitalize;
      cursor: pointer;
      font-size: 18px;
      margin-top: 6px;
      &:hover{
        text-decoration: underline;
      }
    }
    .product-price{
      font-size: 25px;
      font-weight: 400;
    }
  }
  .product-size{
    padding: 30px;
    background: #dfe6ea;
  }
  .add-to-cart{
    margin-top: 30px;
    button{
      width: 300px;
      background-color: #1b1b1b;
      color: #fff;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      text-transform: uppercase;
      outline: none;
    }
  }
  .info-about-product{
    margin-top: 30px;
    .info-item{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      min-height: 60px;
      &:nth-child(1){
        border-top: 1px solid #ccc;
      }
      div{
        width: 50%;
        min-width: 50%;
        text-align: left;
        color: #000;
        font-weight: 500;
        &:nth-child(1){
          color: #898989;
          font-weight: 400;
        }
      }
    }
  }
  .product-description{
    margin-top: 20px;
    background: #fff;
    padding: 20px 10px;
    text-align: left;
  }
}

@media screen and (max-width: 768px){
  .product-wrp{
    .xs6{
      flex-basis: 100%!important;
      max-width: 100%!important;
    }
    .product-info-wrp{
      padding-left: 0!important;
    }
  }
}
</style>
