<template>
    <div class="goodsItem">
        <img :src="goodItem.show.img" alt="">
        <div class="goodsItem_text">
           <span class="title">{{goodItem.title}}</span>
           <div class="goodsItem_text_bottom">
               <span class="price">￥{{goodItem.price}}</span>
               <span class="collect">{{goodItem.cfav}}</span>
           </div>
        </div>
    </div>
</template>
<script>
  export default{
      data(){
          return{}
      },
      props:{
          goodItem:{
              type:Object,
              default:{}
          }
      }
  }
</script>
<style scoped>
  .goodsItem{
      flex:0 0 48%;
      height:auto;
      min-width:0px;
      margin-bottom:5px;
      display:flex;
      flex-direction:column;
      justify-content: space-between;
  }
  .goodsItem img{
      width:100%;
  }
  .goodsItem .goodsItem_text{
      min-width:0px;
      padding-top:4px;
  }
  .goodsItem .goodsItem_text .title{
      width:100%;
      display:inline-block;
      text-overflow: ellipsis;
      overflow: hidden; 
      white-space: nowrap;
  }
  .goodsItem .goodsItem_text .goodsItem_text_bottom{
      text-align:center;
  }
  .goodsItem .goodsItem_text .goodsItem_text_bottom .price{
      color:var(--color-high-text);
      margin-right:5px;
  }
  .goodsItem .goodsItem_text .goodsItem_text_bottom .collect::before{
      display:inline-block;
      content:"";
      width:14px;
      height:14px;
      background:url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>


