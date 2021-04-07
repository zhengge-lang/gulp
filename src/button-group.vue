<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    //目的：检测组件里的标签元素是否为button，因此要遍历打印
    mounted(){
        //不用this.$children,打印的是vue元素
        //打印当前的element
        console.log(this.$el)
        //对象的遍历（for of），获取标签元素名
        for(let node of this.$el.children){
            //标签元素名应为node.nodeName，只写node会打印出标签元素加上它的css类名
            let name = node.nodeName.toLowerCase() 
            console.log(node.nodeName);
            //检测元素名是否相同
            if(name !== 'button'){
                console.warn(`g-button-group的子元素应该全是g-button，但是你写的是${name}`)
            }
        }
    }
}
</script>
<style lang="scss">
    .g-button-group{
        display:inline-flex ;
        vertical-align: middle;
        > .g-button{
            border-radius:0 ;
            &:not(:first-child){
                margin-left: -1px;
            }
            //之前的样式问题是因为两个border连在一起，所以看上去变厚了，现在使用margin-left，让各按钮的边框重叠，当鼠标hover时，让其浮上来：z-index为1
            &:hover{
                position: relative;
                z-index: 1;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
                
            }
            &:last-child{
                // border-left: none;
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>