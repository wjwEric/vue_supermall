<template>
   <div class="wrapper" ref="wrapper">
      <div>
          <slot></slot>
      </div>
   </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
    data(){
        return{
            scroll:null,
        }
    },
    props:{
       probeType:{
           type:Number,
           default:0
       },
       pullUpLoad:{
           type:Boolean,
           default:false
       }
    },
    mounted(){
         this.$nextTick(() => { 
            this.scroll = new Bscroll(this.$refs.wrapper, {
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            }) 
            this.scroll.on("scroll",(position)=>{
               this.$emit("getPosition",position)
            })
            this.scroll.on("pullingUp",()=>{
                this.$emit("pullingUp");
                console.log(2222)
            })
         })
    }
}
</script>
<style>

</style>

