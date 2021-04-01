<template>
     <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
         <svg class="icon" v-if="icon"><use :xlink:href="`#i${icon}`"></use></svg>
         <div class="content">
            <slot></slot>
         </div>
     </button>
</template>
<script>
export default {
//   props:['icon','iconPosition']
// 为了避免iconPosition传的是undefined，所以要设置默认值left
    props:{
        icon: {},
        iconPosition:{
            type:String,
            default:'left',
            //属性的检查器，检查父级传过来的值是否正确（只能是left或right）:报错
            validator(value){
                if(value !== 'left'&& value!== 'right'){
                    return false
                }else{
                    return true
                }
            //if里面返回的是true、false值，而return的是它的相反值，因此可以写成
            //return !(value !== 'left' && value !=='right');
            //更简化:return value === 'left' || value === 'right'
            }
        }
    }
}
</script>
<style lang="scss">
        .g-button{
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
             border-radius: var(--border-radius);
             border: 1px solid var(--border-color);
              background: var(--button-bg);
              display: inline-flex;
              justify-content: center;
              align-items: center;
              vertical-align: middle;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        > .icon{
            order: 1;
            margin-right: .3em;
            }
        > .content{
            order: 2;
        }
        &.icon-right{
           > .icon{
            order: 2;
            margin-right: 0;
            margin-left: .3em;
            }
           > .content{
            order:1
            }
        }
     }
</style>