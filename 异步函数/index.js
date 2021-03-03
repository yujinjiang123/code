async function foo(){
    console.log(2);
    console.log(await Promise.resolve(8));
    console.log(9);
}

async function bar(){
    console.log(4);
    console.log(await 6);
    console.log(7);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);

async function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}


async function f(){
    const now=+new Date();
    await sleep(1500);
    console.log(+new Date()-now+'ms');
}
f();