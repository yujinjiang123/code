function asyncAdd(a, b, callback) {
  doAsyncWork(a, b).then((value) => callback(value));
}
function asyncGetValue(a, b) {
    
}
asyncGetValue(1,2).then(v => console.log(v));