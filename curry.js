/**
 *  函数柯里化
 */
function sub_curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}

function curry(fn, length) {
    length = length || fn.length;
    var slice=Array.prototype.slice;

    return function (){
        if(arguments.length<length){
            var combined=[fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this,combined),length-arguments.length);
        }else{
            return fn.apply(this,arguments);
        }
    }
}

//es6 实现方式
function curry(fn,...args){
    return fn.length<=args.length?fn(...args):curry.bind(null,fn,...args);
}

function test(a,b,c,d){
    console.log(a,b,c,d);
}

fn=curry(test);
fn(1,2)(3)(4);

const persons=[{name:'1'},{name:'2'},{name:'3'}];

const prop=curry((key,obj)=>obj[key]);

console.log(persons.map(prop('name')));
