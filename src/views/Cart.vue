<template>
  <div>
    <div class="order-header">
       <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>your order</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <BigCartItems />
        </v-flex>
        <v-flex xs6>
         
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BigCartItems from '@/components/BigCartItems.vue'
export default {
  components: {
    BigCartItems
  }
}
</script>

<style lang="scss">
.order-header{
  background: #fff;
  margin-top: 6px;
  margin-bottom: 20px;
  h1{
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    padding: 7px 0;
  }
}
</style>
