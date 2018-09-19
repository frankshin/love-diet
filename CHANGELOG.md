# react版本更新记录 - 中译

## v16.5

> react

如果React.forwardRef渲染函数没有采用两个参数即添加警告；
当错误地将一个元素传递给createElement方法时，改进错误提示；
在突变之前不要将探测器调用onRender

> React DOM

增加对React DevTools Profiler的支持；
为生产中的分析添加react-dom / profiling入口点别名；
为支持onAuxClick的浏览器添加onAuxClick事件；
将movingX和movementY字段添加到鼠标事件；
将tangentialPressure和twist字段添加到指针事件中；
在选择事件处理中最小化支持iframe（嵌套浏览上下文）；
支持将布尔值传递给可聚焦的SVG属性；
Ignore <noscript> on the client when hydrating;
修复gridArea作为无单位CSS属性;
在IE11上键入韩语时修复compositionend事件中的错误数据;
修复在<option>标记中使用动态子项时发生崩溃的问题；
修复checked属性未在input上进行初始化设置的问题；
Fix hydration of dangerousSetInnerHTML when __html is not a string；
修复关于缺少受控onChange的警告，以便对伪造值进行触发；
修复提交和重置按钮获取空标签；
修复拖放后未触发的onSelect事件；
修复onClick事件在iOS上的门户内部无法正常工作；
修复数千个roots重新呈现时的性能问题；
修复性能回归，这也导致onChange在某些情况下不会触发；
更加优雅地处理一些边缘场景下的错误；
不要在开发环境中使用代理处理合成事件；
当“false”或“true”是布尔DOM道具的值时发出警告；
当this.state被初始化为props时发出警告；
Don't compare style on hydration in IE due to noisy false positives；
在组件堆栈中包含StrictMode；
禁止在ie中重写window.event；
改进folder/index.js命名约定的组件堆栈；
在使用没有初始化状态的getDerivedStateFromProps时改进警告；
改进有关无效textarea使用的警告；
更加一致的处理无效的符合和函数值；
允许无警告的使用Electron <webview> 标签；
如果调用e.preventDefault（），不再显示未捕获的错误附录；
关于渲染生成器的警告；
从警告中删除遗留方法的无关建议；
从schedule中删除unstable_deferredUpdates以支持unstable_scheduleWork；
从一个花费过长时间的无意义的更新任务中修复不稳定的异步模式；

> React DOM Server

在选定的<option>中使用dangerouslySetInnerHtml时，修复与nullish子进程崩溃的问题；
修复缺少setTimeout时的崩溃问题；

> React Test Renderer and Test Utils

Fix this in a functional component for shallow renderer to be undefined
Deprecate a Jest-specific ReactTestUtils.mockComponent() helper
Warn about ReactDOM.createPortal usage within the test renderer
Improve a confusing error message

> React ART

Add support for DevTools

> Schedule (Experimental)

用于在浏览器环境中协同调度工作的新程序包。 它在内部由React使用，但其公共API尚未最终确定;

## 16.4.2 (August 1, 2018)

> React DOM Server

在攻击者控制属性名称（CVE-2018-6341）时修复潜在的XSS漏洞。 最新的react-dom@16.4.2以及之前受影响的次要版本中提供了此修订：react-dom@16.0.1，react-dom @ 16.1.2，react-dom @ 16.2.1，并作出反应-dom@16.3.3;
在调用属性hasOwnProperty时修复服务器渲染器中的崩溃。 此修复程序仅在react-dom@16.4.2中提供;