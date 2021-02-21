import Watcher from "../observer/Watcher";
import {getObjValueByString} from '../utils'
export const compile = (node, vm) => {
  var reg = /\{\{(.*)\}\}/;
  if (node.nodeType === 1) {
    var attr = node.attributes;
    for (var i = 0; i < attr.length; i++) {
      if (attr[i].nodeName === "v-model") {
        var name = attr[i].nodeValue;
        node.addEventListener("input", (e) => {
          vm[name] = e.target.value;
        });
        node.value = vm[name];
        node.removeAttribute("v-model");
      }
    }
  }

  if (node.nodeType === 3) {
    if (reg.test(node.nodeValue)) {
      var name = RegExp.$1;
      name = name.trim();
      console.log(name)
      node.nodeValue = getObjValueByString(vm,name);
      console.log(node.nodeValue)
      new Watcher(vm, node, name);
    }
  }
};
