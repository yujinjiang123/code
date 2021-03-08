class HeapSort {
  headSort(arr) {
    this.buildMaxHeap(arr);
    let len = arr.length;
    for (let i = len - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapAdjust(arr, 0, i);
    }
  }

  buildMaxHeap(arr) {
    const len = arr.length;
    for (let i = (len >> 1) - 1; i >= 0; i--) {
      this.heapAdjust(arr, i, len);
    }
  }

  heapAdjust(arr, k, len) {
    let left, right, max;
    while (true) {
      (max = k), (left = 2 * k + 1), (right = 2 * k + 2);
      if (left < len && arr[max] < arr[left]) {
        max = left;
      }
      if (right < len && arr[max] < arr[right]) {
        max = right;
      }

      if (max === k) {
        break;
      } else {
        [arr[max], arr[k]] = [arr[k], arr[max]];
        k = max;
      }
    }
  }
}

const arr = [3, 4, 2, 7, 1, 56, 12, 4, 89];



// 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function  test() {
  for(let e of list){
    const res= await square(e);
    console.log(res)
  }
  // list.forEach(async x=> {
  //   const res = await square(x)
  //   console.log(res)
  // })
}
test()
