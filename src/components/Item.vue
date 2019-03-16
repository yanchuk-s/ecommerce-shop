<template>
  <div class="item">
    <div class="item-img">
      <img v-bind:src="item.generalPhoto" alt="">
    </div>
    <div class="item-title">
      {{item.title}}
    </div>
    <div class="item-category">
      {{item.category}}
    </div>
    <div class="item-price">
      {{item.price}}$
    </div>
    <div class="item-sizes">
      <div class="shadow-top-hide"></div>
      <div class="size-list">
        <div
          v-for="(size, index) in item.sizes" :key="index"
          class="size">
            {{size.size}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item:{
      type: Object
    }
  }
}
</script>

<style lang="scss">
  .item{
    margin: 10px 0;
    padding: 12px;
    cursor: pointer;
    position: relative;
    .item-img{
      img{
        width: 100%;
        height: 300px;
        object-fit: contain;
      }
    }
    .item-title{
      font-weight: 600;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .item-category{
      font-size: 14px;
      margin-top: 6px;
      color: #868686;
    }
    .item-price{
      margin-top: 10px;
      color: #000;
      font-weight: 500
    }
    .item-sizes{
      margin-top: 10px;
      position: absolute;
      padding: 12px;
      width: 100%;
      -webkit-box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
      -moz-box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
      box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
      z-index: 2;
      background: #f2f2f2;
      display: none;
      left: 0;
      .shadow-top-hide{
        width: calc(100% + 24px);
        margin-left: -12px;
        background: #f2f2f2;
        height: 10px;
        margin-top: -18px;
      }
      .size-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .size{
          background-color: #c8d1d6;
          border-radius: 3px;
          display: flex;
          min-width: 45px;
          align-items: center;
          justify-content: center;
          padding: 5px 3px;
          margin: 3px;
          font-size: 12px;
        }
      }
    }
    &:hover{
    -webkit-box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
    -moz-box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
    box-shadow: 0 1px 7px 0 rgba(50,50,50,.2);
    transition: box-shadow .2s,border-color .2s;
      .item-sizes{
        display: block;
      }
    }
  }
</style>
