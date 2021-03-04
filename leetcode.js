function ListNode(x,next=null) {
  this.val = x;
  this.next = next;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const index = inorder.findIndex((e) => e === root.val);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};

var verifyPostorder = function (postorder) {
  const lastItem = postorder.pop();
  if (!postorder.length) return true;
  const index = postorder.findIndex((e) => e > lastItem);
  let left, right;
  if (index === -1) {
    left = postorder;
    right = [];
  } else {
    left = postorder.slice(0, index);
    right = postorder.slice(index);
  }

  if (
    (left.length && left.some((e) => e > lastItem)) ||
    (right.length && right.some((e) => e < lastItem))
  ) {
    return false;
  }
  return verifyPostorder(left) && verifyPostorder(right);
};

var minNumber = function (nums) {
  return nums
    .sort((a, b) => parseInt(`${a}${b}`) - parseInt(`${b}${a}`))
    .join("");
};

// function get() {
//     const obj=Array.prototype.shift.call(arguments);
//     const res=[];
//     for(let i=0,len=arguments.length;i<len;i++){
//         const arr=arguments[i].split('.');
//         let val=obj[arr[0]];
//         for(let i=1,len=arr.length;i<len;i++){
//             if(!val) break;
//             val=val[arr[i]];
//         }
//         res.push(val);
//     }
//     return res;
// }
// const obj = {  selector: {  to: {  toutiao: 'FE coder'  }  },  target: {  name: 'byted'  } }

var permuteUnique = function (nums) {
  const res = [];
  const trace = [];
  const used = [];

  function backtrace() {
    if (trace.length === nums.length) {
      res.push([...trace]);
    }
    for (let i = 0, len = nums.length; i < len; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      trace.push(nums[i]);
      used[i] = true;
      backtrace();
      trace.pop();
      used[i] = false;
    }
  }

  backtrace();
  return res;
};

function maxLength(arr) {
  if (arr.length === 1) return 1;
  const select = new Set();
  select.add(arr[0]);
  let opt = 1;
  for (let i = 1, len = arr.length; i < len; i++) {
    if (select.has(arr[i])) {
      select.clear();
    }
    select.add(arr[i]);
    opt = Math.max(opt, select.size);
  }
  return opt;
}

/**
 * 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const track = [];
  (function backtrack(left, right) {
    if (right < left) return;
    if (left < 0 || right < 0) return;
    if (left === 0 && right === 0) {
      res.push(track.join(""));
      return;
    }

    track.push("(");
    backtrack(left - 1, right);
    track.pop();
    track.push(")");
    backtrack(left, right - 1);
    track.pop();
  })(n, n);
  return res;
};

var countSubstrings = function (s) {
  const len = s.length;
  if (len === 1) {
    return [s];
  }
  let count = len;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
    dp[i][i] = true;
  }
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
      if (dp[i][j]) {
        count++;
      }
    }
  }
  return count;
};

//k个一组反转链表
const head=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))));
function reverseKGroup(head, k) {
  if(!head) return ;
  const node = new ListNode(0);
  node.next = head;
  let pre = node,end=null;
  while (pre) {
    end=pre.next;
    let i;
    for (i = 1; i < k && end; i++){
        end=end.next;
    }
    if(i<k||end===null) break;
    pre = reverse(pre, k);
  }
  return node.next;
}

function reverse(pre, k) {
  let p = pre.next;
  for (let i = 1; p.next && i < k; i++) {
    let next = p.next;
    p.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return p.next ? p : null;
}



console.log(reverseKGroup(head,2));