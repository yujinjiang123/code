const REPLACE = 1;
const REORDER = 1;
const PROPS = 2;
const TEXT = 3;

function patch(node, patches) {
  const walker = { index: 0 };
  dfsWalk(node, walker, patches);
}

function dfsWalk(node, walker, patches) {
  const currentPatches = patches[walker.index];
  const len = node.childNodes ? node.childNodes.length : 0;
  for(let i=0;i<len;i++){
      const child=node.childNodes[i];
      walker.index++;
      dfs(child,walker,patches);
  }
  if(currentPatches){
      applyPatches(node,currentPatches);
  }
}


function applyPatches(node,currentPatches){
    
}

export default{
  REPLACE,
  REORDER,
  PROPS,
  TEXT
}
