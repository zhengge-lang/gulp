<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .g-button-group{
        display:inline-flex ;
        vertical-align: middle;
        > .g-button{
            border-radius:0 ;
           
        }
    }
</style>