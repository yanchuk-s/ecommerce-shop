<template>
<div class="category">
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in categoryItem" :key="index" xs3>
        <Item
          :item= product
        />
      </v-flex>
      <!-- {{categoryItem}} -->
    </v-layout>
  </v-container>
</div>
</template>


<script>
import Item from '@/components/Item.vue'
export default {
  components: {
    Item
  },
  computed: {
    category() {
      // return this.$route.params.category
      return this.$store.getters.getCategorrByTitle(this.$route.params.category);
    },
    categoryItem() {
      return this.$store.getters.getItemByCategory(this.category.id);
    }
  }
}
</script>