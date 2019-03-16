<template>
<div class="category">
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in labelItem" :key="index" xs3>
        <Item
          :item= product
        />
      </v-flex>
      <!-- {{label}} -->
      <!-- {{labelItem}} -->
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
    label() {
      // return this.$route.params.category
      return this.$store.getters.getLabelByTitle(this.$route.params.label);
    },
    labelItem() {
      return this.$store.getters.getItemByLabel(this.label.id);
    }
  }
}
</script>