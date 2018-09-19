export const addTodo =function (text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
// 等价于follow

/**
 var f = () => 5;
 等同于
 var f = function () { return 5 };
 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
 */
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//#############################