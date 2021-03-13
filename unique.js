const arr=[1,2,1,2,NaN,{age:1},NaN,{age:2},{age:1}];

function unique(arr){
    var obj={};
    return arr.filter((e,i,arr)=>obj.hasOwnProperty(typeof e+JSON.stringify(e))?false:(obj[typeof e + JSON.stringify(e)] = true))
}


var unique2 = (a) => [...new Set(a)]


class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, callback) {
      let callbacks = this.events[event] || [];
      callbacks.push(callback);
      this.events[event] = callbacks;
  
      return this;
    }
  
    off(event, callback) {
      let callbacks = this.events[event];
      this.events[event] = callbacks && callbacks.filter(fn => fn !== callback);
  
      return this;
    }
  
    emit(event, ...args) {
      let callbacks = this.events[event];
      callbacks.forEach(fn => {
        fn(...args);
      });
  
      return this;
    }
  
    once(event, callback) {
      let wrapFun = function(...args) {
        callback(...args);
  
        this.off(event, wrapFun);
      };
      this.on(event, wrapFun);
  
      return this;
    }
  }








