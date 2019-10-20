<template>
    <div class="recommend">
      <div class="recommend_item" v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        recommend:{
            type:Array
        }
    }
}
</script>
<style scoped>
  .recommend{
      display:flex;
      padding:10px 0px;
      border-bottom:8px solid #eee;
  }
  .recommend .recommend_item{
      flex:1;
      text-align:center;
  }
  .recommend .recommend_item a{
      display:inline-block;
  }
  .recommend .recommend_item img{
      width:80px;
      height:80px;
  }
</style>

