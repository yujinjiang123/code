const PENDING = "pending";
const RESOLVE = "resolve";
const REJECT = "reject";

function MyPromise(fn) {
  this.state = PENDING;
  this.value = null;
  this.resolveCallbacks = [];
  this.rejectCallbacks = [];
  const self = this;

  function resolve(val) {
    if (val instanceof MyPromise) {
      return val.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.state === PENDING) {
        self.value = val;
        self.state = RESOLVE;
        self.resolveCallbacks.forEach((callback) => callback(val));
      }
    });
  }

  function reject() {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.value = val;
        self.state = REJECT;
        self.rejectCallbacks.forEach((callback) => callback(val));
      }
    });
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

MyPromise.prototype.then = function (onResolve, onReject) {
  onResolve = typeof onResolve === "function" ? onResolve : (val) => val;
  onReject = typeof onReject === "function" ? onReject : (val) => val;

  if (this.state === PENDING) {
    this.rejectCallbacks.push(onReject);
    this.resolveCallbacks.push(onResolve);
  }

  if (this.state === RESOLVE) {
    onResolve(this.value);
  }

  if (this.state === REJECT) {
    onReject(this.value);
  }
};

MyPromise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      resolve(new Error());
    }
    for (let promise of promises) {
      promise.then((res) => {
        resolve(res);
      });
    }
  });
};

let a = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1500);
});

let b = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("c");
  }, 300);
});

let c = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 2500);
});


MyPromise.race([a,b,c]).then(console.log)