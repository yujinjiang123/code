function createFactory(name,age){
    var obj=new Object();
    obj.name=name;
    obj.age=age;
    return obj;
}

const person1=createFactory('yujinjiang',21);

function Person(name,age){
    this.name=name;
    this.age=age;
    this.getName=function(){
        return this.name;
    }
}

var person2=new Person('yujinjiang',21);


function Person2(){

}

Person2.prototype.name='yujinjiang';
Person2.prototype.age=21;
Person2.prototype.arr=[1,2,3];
Person2.prototype.getName=function(){
    return this.name;
}

var person3=new Person2();
var person4=new Person2();


function Person3(name,age){
    this.name=name;
    this.age=age;
}
Person3.prototype.getName=function(){
    return this.name;
}

var person5=new Person3('name1',18);
var person6=new Person3('name2',19);


function Person4(name,age){
    this.name=name;
    this.age=age;
    if(!this.getName){
        Person4.prototype.getName=function(){
            return this.name;
        }
    }
}



function Person5(name){
    var o=new Object();
    o.name=name;
    o.getName=function(){
        return this.name;
    }
    return o;
}

const person2=new Person5('yujinjiang');

