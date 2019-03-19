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
  <router-view/>
</div>
</template>


<script>
import Item from '@/components/Item.vue'
import { setTimeout } from 'timers';
export default {
  components: {
    Item
  },
  computed: {
    category() {
      if(this.$route.params.category == 'new' || this.$route.params.category == 'sale'){
        return this.$store.getters.getLabelByTitle(this.$route.params.category);
      }else{
        return this.$store.getters.getCategorrByTitle(this.$route.params.category);
      }
    },
    categoryItem() {
      if(this.$route.params.category == 'new' || this.$route.params.category == 'sale'){
        return this.$store.getters.getItemByLabel(this.category.id);
      }else{
        return this.$store.getters.getItemByCategory(this.category.id);
      }
    }
  }
}
</script>