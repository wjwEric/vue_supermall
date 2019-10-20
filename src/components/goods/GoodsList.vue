<template>
    <div class="goodsList">
      <goods-item v-for="(item,index) in goods" :key="index" :goodItem="item"/>
    </div>
</template>
<script>
import GoodsItem from "./GoodsItem.vue";
export default {
    data(){
        return{}
    },
    props:{
      goods:{
          type:Array,
          default:[]
      }
    },
    components:{
        GoodsItem
    }
}
</script>
<style>
  .goodsList{
      padding-top:3px;
      display:flex;
      flex-wrap:wrap;
      justify-content: space-around;
  }
</style>

