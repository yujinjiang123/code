import VNode from '@/VNode/VNode.js';
import diff from './diff';

const ul=new VNode('ul',{id:'list'},[
    new VNode('li',{class:'item'},['Item 1']),
    new VNode('li',{class:'item'},['Item 2']),
    new VNode('li',{class:'item'},['Item 3'])
])

const ul2=new VNode('ul',{id:'list'},[
    new VNode('li',{class:'item'},['Item 1']),
    new VNode('li',{class:'item',id:'123'},['Item 4']),
    new VNode('li',{class:'item'},['Item 3'])
])


const pachs=diff(ul,ul2);
console.log(pachs);

const ulRoot=ul.render();

document.body.appendChild(ulRoot)



