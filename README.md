# react相关开源项目

## react

## redux

> [redux](https://github.com/reduxjs/redux): Predictable state container for JavaScript apps

## redux-devtools

> [redux-devtools](https://github.com/reduxjs/redux-devtools)，一个使用时间旅行UI 、热加载和reducer错误处理器的action日志工具，最早演示于React Europe会议

## react-redux

> [react-redux ](https://github.com/reduxjs/react-redux)，Official React bindings for Redux

Redux的React绑定库是基于[容器组件和展示组件相分离](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)的开发思想

### 容器组件

are concerned with how things work.
May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
Provide the data and behavior to presentational or other container components.
Call Flux actions and provide these as callbacks to the presentational components.
Are often stateful, as they tend to serve as data sources.
Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

### 展示组件

are concerned with how things look.
May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
Often allow containment via this.props.children.
Have no dependencies on the rest of the app, such as Flux actions or stores.
Don’t specify how the data is loaded or mutated.
Receive data and callbacks exclusively via props.
Rarely have their own state (when they do, it’s UI state rather than data).
Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
Examples: Page, Sidebar, Story, UserInfo, List.

## react-router

## awesome-redux

> [awesome-redux](https://github.com/xgrommx/awesome-redux): 是一个包含大量与Redux相关的库列表。

## react-redux-links

> [react-redux-links](https://github.com/markerikson/react-redux-links): 包含了React和Redux教程和不少有用的资源

## redux-ecosystem-links

> [redux-ecosystem-links](https://github.com/markerikson/redux-ecosystem-links): Redux相关库、插件、工具集的分类资源

## redux-tutorial

> [redux-tutorial](https://github.com/happypoulp/redux-tutorial): redux教程之一

## redux-router

> [redux-router](https://github.com/acdlite/redux-router): 由React Router绑定到Redux的库

## react-router-redux

> [react-router-redux](https://github.com/reactjs/react-router-redux):保持React Router和Redux同步

## react-redux-form

> [react-redux-form](https://github.com/davidkpiano/react-redux-form): 在React中使用Redux生成表格

## redux-form

> [redux-form](https://github.com/erikras/redux-form):在Redux中时时持有React表格的state

# redux

## action

> 使用action来描述“发生了什么”

## reducer

reducer就是一个纯函数，接收旧的state和action，返回新的state。即使用reducer来根据action更新state。

```javascript {cmd="node"}
(previousState, action) => newState
```

## store

> 即将action+reducer联系到一起的对象

Store 有以下职责：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。