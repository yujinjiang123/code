/**
 * 调用生成器函数会产生一个生成器对象，与迭代器相似，生成器对象实现了Iterator接口.
 * 生成器函数只会在第一次调用next()方法后执行。
 * yield可以让生成器停止和开始执行。yeild只能在函数内部使用，类似于return，出现在嵌套的非生成器函数中会抛出语法错误。
 */

function *generator(){
    yield console.log('foo');
    yield '12';
    yield 1;
    return 'baz'
}


const g=generator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


function *nTime(n){
    while(n--){
        yield
    }
}

for(let _ of nTime(3)){
    console.log('foo')
}