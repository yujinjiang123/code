//私有变量
function Obj(name) {
  this.getName = function () {
    return name;
  };
  this.setName = function (newName) {
    name = newName;
  };
}

const o = new Obj("yujinjiang");
console.log(o.getName());
o.setName("123");
console.log(o.getName());
console.log(o.name,'\n\n');


// 静态变量
(function () {
  let name = "yujianjiang";

  Person = function (value) {
    name = value;
  };

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (newName) {
    name = newName;
  };
})();

const person = new Person('yujinjiang');
console.log(person.getName());

