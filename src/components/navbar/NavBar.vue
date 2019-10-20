<template>
    <div class="nav_bar">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="left"><slot name="right"></slot></div>
     </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .nav_bar{
      display:flex;
      text-align:center;
      height:44px;
      line-height: 44px;
  }
  .nav_bar .left{
      flex:1;
  }
  .nav_bar .center{
      flex:2;
  }
  .nav_bar .right{
      flex:1;
  }
</style>

