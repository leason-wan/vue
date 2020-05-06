函数只能使用new
```js
function foo () {
  if (!(this instanceof foo)) {
    console.log('只能实例化');
  }
}

foo();
```
components配置的作用。
vnode的操作。