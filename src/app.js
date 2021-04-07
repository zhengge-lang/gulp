import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import { expect } from 'chai'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
   data() {
       return {
           loading:false,
           loading2:false,
           loading3:false
       }
   },
})
//单元测试:避免重复测试
{
    //console.log(Button);打印出的是对象，而我需要的是构造函数进行实例化操作
    const Constructor = Vue.extend(Button)
    //动态生成按钮
    //vm为vue的实例
    const vm =new Constructor({
        //传值
        propsData:{
            icon:'setting'
        }
    })
    //挂载在页面上
    vm.$mount('#test')
    //找到元素中的use标签
    let useElement =vm.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#isetting')
    vm.$el.remove()
    vm.$destroy()
}
{
    //console.log(Button);打印出的是对象，而我需要的是构造函数进行实例化操作
    const Constructor = Vue.extend(Button)
    //动态生成按钮
    const button =new Constructor({
        //传值
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    //挂载在页面上
    button.$mount()
    //找到元素中的use标签
    let useElement =button.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#iloading')
    button.$el.remove()
    button.$destroy()
}
{
    //console.log(Button);打印出的是对象，而我需要的是构造函数进行实例化操作
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    //动态生成按钮
    const button =new Constructor({
        //传值
        propsData:{
            icon:'setting',
       
        }
    })
    //挂载在页面上
    button.$mount(div)
    //找到元素中的use标签
    let svg =button.$el.querySelector('svg')
    let {order} =window.getComputedStyle(svg)
    console.log(order);
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    //console.log(Button);打印出的是对象，而我需要的是构造函数进行实例化操作
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    //动态生成按钮
    const button =new Constructor({
        //传值
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    //挂载在页面上
    button.$mount(div)
    //找到元素中的use标签
    let svg =button.$el.querySelector('svg')
    let {order} =window.getComputedStyle(svg)
    console.log(order);
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    //动态生成按钮
    const gButton =new Constructor({
        //传值
        propsData:{
            icon:'setting',
        }
    })
    //挂载在页面上
    gButton.$mount()
    gButton.$on('click',function(){
        //期望这个函数被执行，而不是简单的打印出1
        expect(1).to.eq(1)
    })
    //找到元素中的use标签
    let button = gButton.$el
    button.click() 
    
}