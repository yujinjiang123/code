function Vue(options){
    this._data=options.data;
    observer(this._data);
    _proxy(this,'_data');
    new Watcher(this._data,'test',cb);
    new Watcher(this._data,'a',cb);
}

function cb(val){
    console.log('视图更新',val);
}

function observer(obj){
    if(!obj||typeof obj!=='object'){
        return;
    }
    Object.keys(obj).forEach(key=>defineReactive(obj,key,obj[key]));
}

function defineReactive(target,key,val){
    observer(val);
    var dep=new Dep();
    Object.defineProperty(target,key,{
        enumerable:true,
        configurable:true,
        get(){
            if(Dep.target){dep.addSub(Dep.target);}
            return val;
        },
        set(newVal){
            if(newVal===val) return;
            val=newVal;
            dep.notify();
        }
    })
}

function _proxy(target,sourceKey){
    Object.keys(target[sourceKey]).forEach(key=>Object.defineProperty(target,key,{
        enumerable:true,
        configurable:true,
        get(){
            return target[sourceKey][key];
        },
        set(val){
            target[sourceKey][key]=val;
        }
    }))
}


function Dep(){
    this.subs=[];
    this.addSub=function(sub){
        this.subs.push(sub);
    }

    this.notify=function(){
        this.subs.forEach(e=>e.update());
    }
}

function Watcher(obj,key,cb){
    Dep.target=this;
    this.cb=cb;
    this.obj=obj;
    this.key=key;
    this.value=obj[key];
    Dep.target=null;

    this.update=function(){
        this.value=this.obj[this.key];
        this.cb(this.value);
    }
}

let vm=new Vue({
    data:{
        test:'I am student',
        a:1,
        o:{
            name:'12'
        }
    }
})

vm.o.name=1