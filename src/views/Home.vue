<template>
 <div class="category">
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in products" :key="index" xs3>
        <Item
          @click.native="prodshow"
          :item= product
        />
      </v-flex>
    </v-layout>
 </v-container>
 </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  name: 'home',
  computed: {
    products() {
       return this.$store.getters.getAllProducts
    }
  },
  components:{
    Item
  },
  methods: {
    prodshow: function () {
      console.log('123')
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 991px){
  .category{
    .container.grid-list-md .layout .flex.xs3{
      flex-basis: 50%;
      max-width: 50%;
    }
  }
}

@media screen and (max-width: 425px){
  .category{
    .container.grid-list-md .layout .flex.xs3{
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
</style>
