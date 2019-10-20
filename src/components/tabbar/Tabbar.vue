<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
   .tabbar{
       display:flex;
       position:fixed;
       left:0;
       right:0;
       bottom:0;
       background-color:#f6f6f6;
       box-shadow: 0px -2px 2px rgba(0,0,0,0.1)
   }
</style>

