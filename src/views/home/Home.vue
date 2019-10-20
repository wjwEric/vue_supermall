<template>
    <div id="home">
      <nav-bar class="center">
         <div slot="center">购物街</div>
      </nav-bar>
      <Scroll @pullingUp="loadMore" @getPosition="getPosition" :probeType="3" :pullUpLoad="true" ref="scroll" class="content">
          <Swiper :banners="banners" />
          <Recommend :recommend="recommend" />
          <feature-view />
          <tab-control @getIndex="getIndex" :title="['流行','新款','精选']"/>
          <goods-list :goods="goods[currentType].list"/>
      </Scroll>
      <back-top v-show="isShow" @click.native="goTop"></back-top>
    </div>
</template>
<script>
import NavBar from "components/navbar/NavBar.vue";
import TabControl from "components/tabcontrol/TabControl.vue";
import Scroll from "components/scroll/Scroll.vue";
import { getMultiData,getHomeGoods } from "network/home.js";
import Swiper from "./childrenComponents/Swiper.vue";
import Recommend from "./childrenComponents/Recommend.vue";
import FeatureView from "./childrenComponents/FeatureView.vue";
import GoodsList from "components/goods/GoodsList.vue";
import BackTop from "components/backTop/BackTop.vue";
export default {
  data() {
    return {
      banners: null,
      recommend: null,
      goods:{
          pop:{
              page:0,list:[]
          },
          new:{
              page:0,list:[]
          },
          sell:{
              page:0,list:[]
          }
      },
      currentType:"pop",
      isShow:false
    };
  },
  created() {
     this.getMultiData();
     this.getHomeGoods("pop");
     this.getHomeGoods("new");
     this.getHomeGoods("sell");
  },
  methods:{
     getIndex(index){
        switch(index){
            case 0:
            this.currentType = "pop";
            break
            case 1:
            this.currentType = "new";
            break
            case 2:
            this.currentType = "sell";
            break;
        }
     },
     getMultiData(){
         getMultiData().then(res => {
           this.banners = res.data.banner.list;
           this.recommend = res.data.recommend.list;
         });
     },
     getHomeGoods(type){
        let page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page++;
            this.$refs.scroll.scroll.refresh();
        })
     },
     goTop(){
         this.$refs.scroll.scroll.scrollTo(0,0,1000);
     },
     getPosition(position){
        this.isShow = -(position.y)>1500?true:false
     },
     loadMore(){
         this.getHomeGoods(this.currentType);
         this.$nextTick(()=>{
             this.$refs.scroll.scroll.finishPullUp();
         })
        //  this.$refs.scroll.scroll.finishPullUp();
     }
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>
<style scoped>
#home{
    overflow: hidden;
    height:100vh;
    /* padding-top:44px; */
    position:relative;
}
.center {
  width:100%;
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  z-index:3
}
.content{
    position:absolute;
    top:44px;
    bottom:49px;
    left:0px;
    right:0px;
}
</style>


