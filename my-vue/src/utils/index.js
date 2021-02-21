const type=obj=>Object.prototype.toString.call(obj).replace(/\[object\s|]/g,'');

export const curry = (fn, ...args) => {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

/**
 * 根据字符串获取对象属性
 * @param {*} obj
 * @param {*} str
 */
export const getObjValueByString = (obj, str) => {
    return str.split('.').reduce((prev, next) => prev[next], obj);
}


export const isString = (obj) => {
    return type(obj)==='String';
}

