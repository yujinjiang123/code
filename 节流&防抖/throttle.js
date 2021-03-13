function throttle(fn,wait=100,options={}){
    let context,args,timeout,previous=0;
    const later=function(){
        previous=+new Date();
        timeout=null;
        fn.apply(context,args);
    }

    const throttled=function(){
        const now=+new Date();
        const remianing=wait-(now-previous);
        context=this;
        args=arguments;
        if(remianing<=0){
            if(timeout){
                clearTimeout(timeout);
                timeout=null;
            }
            fn.apply(context,args);
            previous=now;
        }else if(!timeout){
            timeout=setTimeout(later,wait);
        }
    }

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }

    return throttled;
}