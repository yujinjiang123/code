

function repeat (func, times, wait) {
  return async function(){
    const context=this;
    const args=arguments;
    for(let i =0;i<times;i++){
      await new Promise((resolve,reject)=>{
        func.apply(context,args);
        setTimeout(() => {
          resolve()
        }, wait);
      })
    }
  }
}
//使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc("helloworld") //会输出四次helloworld，每次间隔3s