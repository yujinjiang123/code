function lastPromise(promiseFunction) {
  let uid = 0;
  return function () {
    const id = ++uid;
    return new Promise((resolve, reject) => {
      try {
        promiseFunction().then((res) => {
          if (id === uid) {
            resolve(res);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  };
}

let count = 1;
let promiseFunction = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(count++);
    })
  );

const lastFn = lastPromise(promiseFunction);

lastFn().then(console.log);
lastFn().then(console.log);
lastFn().then(console.log);
