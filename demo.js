function curry(fn,...args){
    return fn.length<=args.length?fn(...args):curry.bind(null,fn,...args);
}

const str="obj.name"
const vm={
    obj:{
        name:'yujinjiang'
    }
}
console.log(str.split('.').reduce((prev,next)=>prev[next],vm));