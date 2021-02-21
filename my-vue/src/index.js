import observer from "./observer";
import {compile} from './compile'
class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
    _proxy(this, "_data");
    const el=options.el;
    const container=document.getElementById(el);
    const dom = nodeToFragment(container, this);
    container.appendChild(dom);
  }
}

const vm=new Vue({
  el:'app',
  data:{
    text:'Hello World',
    obj:{name:'yujinjiang'}
  }
})


function nodeToFragment(node, vm) {
  var flag = document.createDocumentFragment();
  var child;
  while (child = node.firstChild) {
      compile(child, vm);
      flag.appendChild(child);
  }
  return flag;
}


function _proxy(target, sourceKey) {
  Object.keys(target[sourceKey]).forEach((key) =>
    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return target[sourceKey][key];
      },
      set(val) {
        target[sourceKey][key] = val;
      },
    })
  );
}
