# let const 编译

```js
let value=1
```

编译为

```js
var value = 1;
```

```js
if (false) {
    let value = 1;
}
console.log(value); 
```

编译为

```js
if (false) {
    var _value = 1;
}
console.log(value);
```


```js
var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); 
```


```js
var funcs = [];

var _loop = function _loop(i) {
    funcs[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
funcs[0](); 
```