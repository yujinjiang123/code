console.log('worker')
self.addEventListener('message',({data})=>console.log(data));
self.postMessage("hello")
importScripts('./workA.js','./workB.js');

console.log('script imported');