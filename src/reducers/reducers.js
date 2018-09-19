import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// 接收一个拆分后reducer函数组成的对象，返回一个新的Reducer函数（根reducer）
/**
 当你触发 action 后，combineReducers 返回的 todoApp 会负责调用两个 reducer：
 let nextTodos = todos(state.todos, action)
 let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)

 然后会把两个结果集合并成一个 state 树：

 return {
   todos: nextTodos,
   visibleTodoFilter: nextVisibleTodoFilter
 }

 Redux store保存了根reducer返回的完整state树, 这个新的树就是应用的下一个state, 所有订阅 store.subscribe(listener) 的监听器都将被调用；监听器里可以调用 store.getState() 获得当前 state

 现在，可以应用新的 state 来更新 UI。如果你使用了 React Redux 这类的绑定库，这时就应该调用 component.setState(newState) 来更新。
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp