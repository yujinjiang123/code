function TreeNode(val) {
  this.val = val;
  this.children = [];
}

// 递归
function dfs1(root) {
  const list = [];
  const dfs = (root, list) => {
    if (root) {
      list.push(root.val);
      const { children } = root;
      for (let child of children) {
        dfs(child, list);
      }
    }
  };
  dfs(root,list);
  return list;
}

// 非递归
function dfs2(root){
    if(!root) return [];
    const stack=[root];
    const list=[];
    while(stack.length){
        const pop=stack.pop();
        const {children}=pop;
        list.push(pop.val);
        for(let i=children.length-1;i>=0;i--){
            stack.push(children[i]);
        }
    }
    return list;
}