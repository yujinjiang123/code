const PENDING="pending";
const RESOLVE="resolve";
const REJECT="reject";

function MyPromise(fn){
    var self=this;
    this.state=PENDING;
    this.value=null;
    this.resolveCallbacks=[];
    this.rejectCallbacks=[];
    function resolve(value){
        if(value instanceof MyPromise){
            return value.then(resolve,reject);
        }
        setTimeout(()=>{
            if(self.state===PENDING){
                self.state=RESOLVE;
                self.value=value;
                self.resolveCallbacks.forEach(callback=>callback(value));
            }
        },0);
    }

    function reject(vaklue){
        setTimeout(()=>{
            if(self.state===PENDING){
                self.state=REJECT;
                self.value=value;
                self.rejectCallbacks.forEach(callback=>callback(value));
            }
        },0);
    }


    try{
        fn(resolve,reject);
    }catch(err){
        reject(err);
    }

}


MyPromise.prototype.then=function(onResolved,onRejected){
    var onResolved=typeof onResolved==='function'?onResolved:value=>value;
    var onRejected=typeof onRejected==='function'?onRejected:value=>value;

    if(this.state===PENDING){
        this.resolveCallbacks.push(onResolved);
        this.rejectCallbacks.push(onRejected);
    }

    if(this.state===RESOLVE){
        onResolved(this.value);
    }

    if(this.state===REJECT){
        onRejected(this.value);
    }
}

MyPromise.all=function(promises){
   return new MyPromise((resolve,reject)=>{
       if(!Array.isArray(promises)){
           reject(new Error);
       }
       var resolveCount=0;
       var result=[];
       for(var i=0,len=promises.length;i<len;i++){
           (function(i){
               promises[i].then(val=>{
                   result[i]=val;
                   resolveCount++;
                   if(resolveCount===len){
                       resolve(result);
                   }
               })
           })(i);
       }
   })
}

MyPromise.race = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        resolve(new Error());
      }
      for (let promise of promises) {
        promise.then((res) => {
          resolve(res);
        });
      }
    });
  };



let a=new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1500);
})


let b=new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('c')
    },3500);
})


let c=new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(123)
    },2500);
})

MyPromise.all([a,b,c]).then(res=>console.log(res));