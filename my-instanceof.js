
function myInstanceOf(left,right){
    const rightProto=right.prototype;
    let leftProto=left.__proto__;
    while(true){
        if(!leftProto){
            return false;
        }
        if(leftProto===rightProto){
            return true;
        }
        leftProto=leftProto.__proto__;
    }
}

function Person(){

}


const obj=new Person();

console.log(myInstanceOf(obj,Person));
console.log(myInstanceOf(obj,Object));