import VNode from '@/VNode/VNode.js';

const vn=new VNode('div',{id:'app'},[
    new VNode('div',{style:'width:100px;height:100px;background-color:red'}),
    new VNode('div',{style:'width:100px;height:100px;background-color:blue'})
])

const root=vn.render();

document.body.appendChild(root)



