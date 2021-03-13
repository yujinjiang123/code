// Promise.resolve().then(()=>{
//   console.log(0);
//   return Promise.resolve().then(res=>{
//     console.log(4);
//   })
// })
// Promise.resolve().then(()=>{
//   console.log(1);
// }).then(()=>{
//   console.log(2);
// }).then(()=>{
//   console.log(3);
// }).then(()=>{
//   console.log(5);
// }).then(()=>{
//   console.log(6);
// })



new Promise((resolve)=>{
  console.log(1);
  resolve();
}).then(()=>{
  console.log(2);
}).then(()=>{
  console.log(3);
}).then(()=>{
  console.log(5);
}).then(()=>{
  console.log(6);
})

new Promise((resolve)=>{
  console.log(0);
  resolve(Promise.resolve(4));
}).then(res=>{
  console.log(res);
})
