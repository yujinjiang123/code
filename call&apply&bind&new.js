Function.prototype.myCall=function(context){
    var context=context || window;
    context.fn=this;
    var args=[];
    for(let i=1,len=arguments.length;i<len;i++){
        args.push('arguments['+i+']');
    }

    var result=eval('context.fn('+args+')');
    delete context.fn;
    return result;
}


Function.prototype.myApply=function(context,arr){
    var context=context||window;
    context.fn=this;
    var result;
    if(!arr){
        result=context.fn();
    }
    else{
        var args=[];
        for(let i=0,len=arr.length;i<len;i++){
            args.push('arr['+i+']');
        }
        result=eval('context.fn('+args+')');
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind=function(context){
    
}


function myNew(){
    var obj=new Object();
    Constructor=Array.prototype.shift.call(arguments);
    obj.__proto__=Constructor.prototype;
    var result=Constructor.myApply(obj,arguments);
    return typeof result==='object'? result : obj;
}

