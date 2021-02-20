/**
 * 函数组合
 * 利用 compose 将两个函数组合成一个函数，让代码从右向左运行，而不是由内而外运行，可读性大大提升。
 */

function compose(){
    var args=arguments;
    var start=args.length-1;
    return function(){
        var i=start;
        var result=args[start].apply(this,arguments);
        while(i--){
            result=args[i].call(this,result);
        }
        return result;
    }
}

var toUpperCase = function(x) { return x.toUpperCase(); };
var hello=function(x){return 'Hello, '+x};


console.log(compose(hello,toUpperCase)('yujinjiang'));