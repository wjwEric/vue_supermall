<template>
  <div class="tab_control">
     <div @click="changeHandle(index)" class="tab_control_item" v-for="(item,index) in title" :key="index">
         <span :class="activeIndex==index?'active':''">{{item}}</span>
     </div>
  </div>    
</template>
<script>
export default {
    data(){
        return{
            activeIndex:0
        }
    },
    props:{
        title:{
            type:Array
        }
    },
    methods:{
        changeHandle(index){
           this.activeIndex = index;
           this.$emit("getIndex",index)
        }
    }
}
</script>
<style scoped>
  .tab_control{
      display:flex;
      height:44px;
  }
  .tab_control_item{
      flex:1;
      text-align:center;
      height:100%;
      line-height:44px;
  }
  .tab_control_item span{
      padding-bottom:10px;
  }
  .active{
      color:var(--color-tint);
      border-bottom:3px solid var(--color-tint);
  } 
</style>

