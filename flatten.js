/**
 * 数组扁平化
 */
let arr = [1, [2, [3, 4,[5,6,[7]]]]];
function flatten(arr){
     while(arr.some(e=>Array.isArray(e))){
         arr=[].concat(...arr);
     }
     return arr;
}

function flatten2(arr){
    return arr.reduce((prev,next)=>{return prev.concat(Array.isArray(next)?flatten2(next):next)},[]);
}

/**
 * 
 * @param {number[]} arr 
 */
function flatten3(arr){
    return arr.toString().split(',').map(e=>+e);
}

console.log(flatten3(arr))