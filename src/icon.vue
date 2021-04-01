<template>
    
         <svg class="g-icon" ><use :xlink:href="`#i${name}`"></use></svg>
        
</template>
<script>
export default {
  props:['name']
// 为了避免iconPosition传的是undefined，所以要设置默认值left
   
}
</script>
<style lang="scss">
       
        .g-icon{
            width: 1em;
            height: 1em;
            }
       
</style>