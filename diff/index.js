class VNode {
  constructor(tag, props = {}, children = []) {
    this.tag = tag;
    this.props = props;
    this.children = children;
    let count = 0;
    this.children.forEach((child) => {
      if (child instanceof VNode) {
        count += child.count;
      }
      count++;
    });
    this.count = count;
    this.el = null;
  }

  render() {
    const el = document.createElement(this.tag);
    this.el = el;
    const props = this.props;
    for (let key in props) {
      el.setAttribute(key, this.props[key]);
    }
    this.children.forEach((child) => {
      const childEl =
        child instanceof VNode
          ? child.render()
          : document.createTextNode(child);
      el.appendChild(childEl);
    });
    return el;
  }
}

const patchType = {
  TEXT: 1,
  REPLACE: 2,
  PROPS: 2,
};

function isString(val) {
  return Object.prototype.toString.call(val) === "[object String]";
}

function sameNode(oldNode, newNode) {
  return (
    oldNode.tag === newNode.tag &&
    oldNode.key === newNode.key &&
    sameInputType(oldNode, newNode)
  );
}

function sameInputType(oldNode, newNode) {
  if (oldNode.tag !== "input") return true;
  return oldNode.props.type === newNode.props.type;
}

function diff(oldVnode, newVNode) {
  let index = 0;
  const patches = {};
  dfsWalk(oldVnode, newVNode, index, patches);
  return patches;
}

function dfsWalk(oldVnode, newVnode, index, patches) {
  const currentPatches = [];
  if (newVnode === null) {
  } else if (isString(oldVnode) && isString(newVnode)) {
    if (oldVnode !== newVnode) {
      currentPatches.push({ type: patchType.TEXT, text: newVnode });
    }
  } else if (sameNode(oldVnode, newVnode)) {
    const propsPatches = diffProps(oldVnode, newVnode);
    if (propsPatches) {
      currentPatches.push({ type: patchType.PROPS, props: propsPatches });
    }
    diffChildren(
      oldVnode.children,
      newVnode.children,
      index,
      patches,
      currentPatches
    );
  } else {
    currentPatches.push({ type: patchType.REPLACE, node: newNode });
  }

  if (currentPatches.length) {
    patches[index] = currentPatches;
  }
}

function diffProps(oldVnode, newVnode) {}

function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
  let leftNode = null;
  let currentNodeIndex = index;
  oldChildren.forEach((child, i) => {
    const newChild = newChildren[i];
    currentNodeIndex =
      leftNode && leftNode.count
        ? currentNodeIndex + leftNode.count + 1
        : currentNodeIndex + 1;
    dfsWalk(child, newChild, currentNodeIndex, patches);
    leftNode = child;
  });
}

function updateChildren(oldList, newList) {
  let oldStartIdx = 0,
    newStartIdx = 0;
  let oldEndIdx = oldList.length - 1,
    newEndIdx = newList.length - 1;
  let oldStartVnode = oldList[0],
    oldEndVnode = oldList[oldEndIdx];
  let newStartVnode = newList[0],
    newEndVnode = newList[newEndIdx];

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!oldStartVnode) {
      oldStartVnode = oldList[++oldStartIdx];
    } else if (!oldEndIdx) {
      oldEndVnode = oldList[--oldStartIdx];
    } else if (sameNode(oldStartVnode, newStartVnode)) {
      // pathcVNode(oldStartVnode,newStartVnode);
      oldStartVnode = oldList[++oldStartVnode];
      newStartVnode = newList[++newStartIdx];
    } else if (sameNode(oldEndVnode, newEndVnode)) {
      // pathcVNode(oldEndVnode,newEndVnode);
      oldEndVnode = oldList[++oldEndIdx];
      newEndVnode = newList[++newEndIdx];
    } else if (sameNode(oldStartVnode, newEndVnode)) {
      // patchVnode
      // insertBefore（parent,oldStartVnode.elm,nodeOps.nextSibling(oldEndVNode.elm))
      oldStartVnode = oldList[++oldStartIdx];
      newEndVnode = newList[--newEndIdx];
    } else if (sameNode(oldEndVnode, newStartVnode)) {
      oldEndVnode = oldList[--oldEndVnode];
      newStartVnode = newList[++newStartIdx];
    } else {

    }
  }
}


function patch(oldVnode,vnode,parentElm){
  if(!oldVnode){
    // addVnodes(parentElm,null,vnode,0,vnode.length-1);
  }else if(!vnode){
    // removeVnodes(parentElm,oldVnode,0,oldVnode.length-1);
  }else{
    if(sameNode(oldVnode,vnode)){
      patchVnode(oldVnode,vnode);
    }else{
      // removeVnodes(parentElm,oldVnode,0,oldVnode.length-1)
      // addVnode(parentElm,null,vnode,0,vnode.lenght-1)
    }
  }
}


function patchVnode(oldVnode,vnode){
  if(oldVnode===vnode){
    return;
  }
  const el=vnode.el=oldVnode.el;
  const oldCh=oldVnode.children;
  const ch=vnode.children;
  if(vnode instanceof VNode){
    if(oldCh&&ch){
      updateChildren(oldCh,ch,el);
    }else if(ch){

    }else if(oldCh){
      
    }else if(!(oldVnode instanceof VNode)){
      // nodeOps.setTextContent(el,'')
    }
  }else{
    // nodeOps.setTextContent(el,vnode)
  }
}

const vnode = new VNode("div", { id: "app" }, [
  new VNode("h1", { style: "color:red" }, ["Virtual Dom"]),
  new VNode("ul", {}, [
    new VNode("li", {}, ["1"]),
    new VNode("li", {}, ["2"]),
    new VNode("li", {}, ["3"]),
  ]),
]);

const newVnode = new VNode("div", { id: "app" }, [
  new VNode("h1", { style: "color:red" }, ["Virtual Dom"]),
  new VNode("ul", {}, [
    new VNode("li", {}, ["3"]),
    new VNode("li", {}, ["3"]),
    new VNode("li", {}, ["3"]),
  ]),
]);

console.log(diff(vnode, newVnode));

const dom = vnode.render();

document.body.appendChild(dom);
