<template>
    <div class="tabbar_item" @click="itemClick">
       <div v-show="!icon_active"><slot name = "item-icon"></slot></div>
       <div v-show="icon_active"><slot name="item-icon-active"></slot></div>
       <div :style="{color:icon_active?active:''}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
       icon_active(){
           return this.$route.path.indexOf(this.path)!=-1
       }
    },
    props:{
        path:String,
        active:{
            type:String,
            default:"red"
        }
    },
    methods:{
        itemClick(){
           this.$router.replace(this.path).catch(err=>err)
        }
    }
}
</script>
<style>
   .tabbar_item{
       flex:1;
       text-align:center;
       height:49px;
       font-size:14px;
   }
   .tabbar_item img{
       width:25px;
       height:25px;
       vertical-align:middle;
       margin-bottom:2px;
   }
</style>

