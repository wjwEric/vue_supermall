<template>
     <mt-swipe class="wrap" :auto="2000" :speed="500">
        <mt-swipe-item v-for="(item,index) in banners" :key="index">
           <a :href="item.link"><img :src="item.image" alt=""></a>
        </mt-swipe-item>
     </mt-swipe>  
</template>
<script>
export default {
    props:{
      banners:{
        type:Array,
      }
    }
}
</script>
<style>
 .wrap {
  width: 100%;
  height: 200px;
  margin-top:44px;
}
.wrap img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
.wrap a {
  display: inline-block;
  width:100%;
}
</style>

