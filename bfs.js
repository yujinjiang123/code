function TreeNode(val) {
    this.val = val;
    this.children = [];
  }

  

  function bfs(root){
      if(!root) return [];
      const list=[];
      const queue=[root];
      while(queue.length){
          let size=queue.length;
          while(size--){
              const top=queue.shift();
              list.push(top.val);
              const {children}=top;
              for(let child of children){
                  quque.push(child);
              }
          }
      }
      return list;
  }