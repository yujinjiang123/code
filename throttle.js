function throttle(func,wait){
    var context,args;
    var previous=0;
    return function(){
        var now=+new Date();
        context=this;
        args=arguments;
        if(now-previous>wait){
            func.apply(context,args);
            previous=now
        }
    }
}


function throttle(dunc,wait){
    var context,args,timeout;
    return function(){
        context=this;
        args=arguments;
        if(!timeout){
            timeout=setTimeout(()=>{
                timeout=null;
                func.apply(context,args);
            },wait);
        }
    }
}