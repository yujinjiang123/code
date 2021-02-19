import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const isProduction = process.env.NODE_ENV==='production';

const render=()=>{
  return new Vue({
    render: h => h(App),
  });
}

let vm=null;

if(!isProduction){
  const vm=render();
  vm.$mount('#app');
}

export const init=()=>{
  vm=render();
}

export const mount=(el)=>{
  vm.$mount(el||'#app');
} 

export const unmount=()=>{
  vm.$destroy();
  vm.$el.innerHTML=''
  vm=null
}

