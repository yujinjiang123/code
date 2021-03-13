const worker=new Worker(`${location.href}/emptyWorker.js`);
worker.onmessage=((data)=>console.log(data));

