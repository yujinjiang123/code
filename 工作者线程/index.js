const worker=new Worker(`${location.href}emptyWorker.js`);
worker.onmessage=(({data})=>console.log(data));
setTimeout(()=>{
    worker.postMessage('foo');
    worker.terminate();
    worker.postMessage('bar');
    setTimeout(()=>worker.postMessage('baz'))
},1000)

