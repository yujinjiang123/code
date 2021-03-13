let callbacks = [];
let pending = false;
let uid = 0;
function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    setTimeout(flushCallbacks, 0);
  }
}

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

class Watcher {
  constructor() {
    this.id = ++uid;
  }
  update() {
    console.log(`Watcher ${this.id} update`);
    queueWatcher(this);
  }

  run() {
    console.log(`Watcher ${this.id} 更新`);
  }
}

let has = new Map();
let queue = [];
let waiting = false;
function queueWatcher(watcher) {
  const id = watcher.id;
  if (!has.has(id)) {
    has.set(id, true);
    queue.push(watcher);
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

function flushSchedulerQueue() {
  for (let watcher of queue) {
    const { id } = watcher;
    has.delete(id);
    watcher.run();
  }
  waiting = false;
}

let watch1 = new Watcher();
let watch2 = new Watcher();
watch1.update();
watch1.update();
watch2.update();
