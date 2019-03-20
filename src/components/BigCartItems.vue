<template>
  <div>
    <div v-if="smallCartLenght > 0" class="big-cart-items-wrp">
      <div v-for="(product, index) in products" :key="index" class="big-cart-item">
        <div class="img" @click="prodPage(product.category,product.slug)">
          <img v-bind:src=product.generalPhoto alt="">
        </div>
        <div class="info-prod">
          <div class="title" @click="prodPage(product.category,product.slug)">
            {{product.title}}
          </div>
          <div class="article">
            Article: <span>{{product.article}}</span>
          </div>
          <div class="size">
            Size: <span>{{product.size}}</span>
          </div>
          <div class="price">
            {{product.price}}$
          </div>
        </div>
        <div class="delete">
          <v-btn
            @click="deleteFromCart(product.id, product.size, product.title)"
            flat icon color="pink"
          >
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div v-else class="no-products-in-order">
      please add the goods to your order
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products(){
      return this.$store.getters.getBigCart
    },
    smallCartLenght() {
      return this.$store.getters.getSmallCartLenght
    }
  },
  methods: {
    deleteFromCart(id, size, title){
      let product ={
        id: id,
        size: size,
      }
      this.$store.dispatch('deleteProductBigcart', product);
      let productTitle = title
      let productSize = size
      this.$notify({
        group: 'deleteFromCart',
        type: 'error',
        title: `${productTitle}, ${productSize} Size`,
        text: 'Delete from cart',
        duration: 1000,
      });
    },
    prodPage: function (category,slug) {
      this.$router.push({ name: 'product', params: { category: category, slug: slug } })
      // this.$parent.$emit('showHideSmallCart');
    },
  }
}
</script>

<style lang="scss">
.no-products-in-order{
  font-size: 17px;
  background: #fff;
  padding: 15px 0;
  text-transform: uppercase;
}
.big-cart-items-wrp{
  width: 100%;
  .big-cart-item{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
     &:last-child{
      margin-bottom: 0;
      border-bottom: none;
    }
    .img{
      cursor: pointer;
      width: 20%;
      img{
        width: 100%;
      }
    }
    .info-prod{
      padding-left: 20px;
      width: 60%;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title{
        cursor: pointer;
      }
      .article{
        font-size: 13px;
      }
      .size{
        font-size: 14px;
        span{
          font-size: 14px;
          font-weight: 600;
        }
      }
      .price{
        margin-top: 6px;
        font-weight: 600;
      }
    }
    .delete{
      width: 20%;
    }
  }
}
</style>
