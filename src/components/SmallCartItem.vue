<template>
  <div>
      <div class="small-item" v-for="(product, index) in smallCart" :key="index">
        <div class="label-new label" v-if="product.label == 1">
          new
        </div>
        <div class="label-sale label" v-if="product.label == 2">
          sale
        </div>
        <div
          @click="prodPage(product.category,product.slug)"
          class="item-img"
        >
          <img v-bind:src=product.generalPhoto alt="">
        </div>
        <div class="item-info">
          <div class="item-title" @click="prodPage(product.category,product.slug)">
            {{product.title}}
          </div>
          <div class="item-size">
            Size: <span>{{product.size}}</span>
          </div>
          <div class="item-price">
            {{product.price}}$
          </div>
        </div>
        <div class="delete-product">
          <v-btn
            @click="deleteFromCart(product.id, product.size, product.title)"
            flat icon color="pink"
          >
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    smallCart(){
      return this.$store.getters.getSmallCart
    },
    smallCartLenght() {
      return this.$store.getters.getSmallCartLenght
    }
  },
  methods: {
    prodPage: function (category,slug) {
      this.$router.push({ name: 'product', params: { category: category, slug: slug } })
      this.$parent.$emit('showHideSmallCart');
    },
    deleteFromCart(id, size, title){
      let product ={
        id: id,
        size: size,
      }
      this.$store.dispatch('deleteProductSmallcart', product);
      if(this.smallCartLenght == 0){
        this.$parent.$emit('showHideSmallCart');
      }
      let productTitle = title
      let productSize = size
      this.$notify({
        group: 'deleteFromCart',
        type: 'error',
        title: `${productTitle}, ${productSize} Size`,
        text: 'Delete from cart',
        duration: 1000,
      });
    }
  }
}
</script>

<style lang="scss">
.small-item{
  width: 100%;
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  position: relative;
  &:last-child{
    margin-bottom: 0;
    border-bottom: none;
  }
  .label{
    top: 0;
  }
  .item-img{
    width: 30%;
    min-width: 30%;
    cursor: pointer;
    img{
      width: 100%;
    }
  }
  .item-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 55%;
    min-width: 55%;
    padding-left: 8px;
    .item-title{
      font-size: 15px;
      font-weight: 600;
      text-align: left;
      line-height: 16px;
      cursor: pointer;
    }
    .item-size{
      font-size: 14px;
      span{
        font-weight: 600;
        margin-left: 7px;
      }
    }
  }
  .delete-product{
    width: 15%;
    min-width: 15%;
  }
}
</style>
