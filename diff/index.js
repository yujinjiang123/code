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
  }

  render() {
    const el = document.createElement(this.tag);
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
    diffChildren(oldVnode.children,newVnode.children,index,patches,currentPatches);
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
      (leftNode && leftNode.count)
        ? currentNodeIndex + leftNode.count + 1
        : currentNodeIndex + 1;
    dfsWalk(child, newChild, currentNodeIndex, patches);
    leftNode = child;
  });
}

const vnode = new VNode("div", { id: "app" }, [
  new VNode("h1", { style: "color:red" }, ["Virtual Dom"]),
  new VNode("ul", {}, [
    new VNode("li", {}, ["1"]),
    new VNode("li", {}, ["2"]),
    new VNode("li", {}, ["3"]),
  ]),
]);

const newVnode=new VNode("div", { id: "app" }, [
  new VNode("h1", { style: "color:red" }, ["Virtual Dom"]),
  new VNode("ul", {}, [
    new VNode("li", {}, ["3"]),
    new VNode("li", {}, ["3"]),
    new VNode("li", {}, ["3"]),
  ]),
]);

console.log(diff(vnode,newVnode)); 

const dom = vnode.render();

document.body.appendChild(dom);
