class Person{
    static name=1;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static getName(){
        return name;
    }
}
console.log(typeof Person);
console.log(Person.prototype);

const person1=new Person('yujinjiang',21);
console.log(Person.getName());