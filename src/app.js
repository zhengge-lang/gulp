import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

import { expect } from 'chai'

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

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
//单元测试:避免重复测试，避免几十个button重复点
{
    //console.log(Button);打印出的是对象，而我需要的是构造函数进行实例化操作
    //为什么要得到一个函数，函数能干什么

    const Constructor = Vue.extend(Button)
    //使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
    //把Button对象变成构造函数

    //动态生成按钮
    //vm为vue的实例：构造函数生成的对象
    const vm =new Constructor({
        //传值
        propsData:{
            icon:'setting'
        }
    })
    //挂载在页面上
    vm.$mount()

    //判断设置和检查的结果是否一致：
    //组件button props传进什么值，就对它进行判断；还有事件也要测

    //找到元素中的use标签
    let useElement =vm.$el.querySelector('use')
    // console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#isetting')

    //测试完了把button元素删掉
    // vm.$el.remove()
    // vm.$destroy()
}
///////////////////////测试loading
{
    
    const Constructor = Vue.extend(Button)
    const vm =new Constructor({
        //传值
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    //挂载在页面上
    vm.$mount()
    //找到元素中的use标签
    let useElement =vm.$el.querySelector('use')
    // console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#iloading')
    // button.$el.remove()
    // button.$destroy()
}
//////////////////////////测试position

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button =new Constructor({
        propsData:{
            icon:'setting',
       
        }
    })
    //挂载在页面上
    button.$mount(div)
    //找到元素中的use标签
    let svg =button.$el.querySelector('svg')
    let {order} =window.getComputedStyle(svg)
    // console.log(order);
    expect(order).to.eq("1")
    // button.$el.remove()
    // button.$destroy()
}

////////////////////////

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
    // console.log(order);
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}


//测试按钮click--- mock
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    })
    vm.$mount()
    //用间谍去代替这个函数，监听函数是否通过点击执行
    let spy = chai.spy(function(){console.log('1')})
  
    vm.$on('click', spy)
    // 希望这个间谍监听函数被执行
    let button = vm.$el
    //$el本身就是这个button

    button.click()
    expect(spy).to.have.been.called()
    //期待间谍函数被调用
  }

  //自动化测试：一行命令搞定测试，自动打开浏览器，自动点刷新