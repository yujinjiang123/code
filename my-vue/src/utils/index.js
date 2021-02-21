export const  curry=(fn,...args)=>{
    return fn.length<=args.length?fn(...args):curry.bind(null,fn,...args);
}

/**
 * 根据字符串获取对象属性
 * @param {*} obj 
 * @param {*} str 
 */
export const getObjValueByString=(obj,str)=>{
    return str.split('.').reduce((prev,next)=>prev[next],obj);
}