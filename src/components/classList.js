
// @flow

import React from 'react';
import propTypes from 'prop-types';


/**
 * no jsx
 * @class Hello
 * @extends {React.Component}
 */
class Hello extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}
Hello.propTypes = {
    toWhat : propTypes.string
}


/**
 * 
 * 状态同步
 * @class Calculator
 * @extends {React.Component}
 */
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input))  return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    // 当 TemperatureInput组件更新它的温度数值时，就会调用this.props.onTemperatureChange方法
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange} />
        </fieldset>
        );
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

/**
 * 测试jsx的判断隐藏显示
 */
const showheader = true;
const und = undefined;  // true false null
function Header(props){
    return <div>测试jsx的判断显示隐藏{props.name}{String(und)}</div>;
}
class TestShow extends React.Component{
    render() {
        return <div>
            {showheader && <Header name="哈哈" />}
        </div>;
    }
}


/**
 * react的内部类型检查器prop-types
 * other： 使用PropTypes.element 
 */
class HelloProp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            hello,moring, {this.props.name}
        </div>;
    }
}
class TestPropTypes extends React.Component{
    render(){
        return  <HelloProp />
    }
}
// 为属性指定默认值:
TestPropTypes.defaultProps = {
    name: 'haha'
}
// 类型检查
TestPropTypes.propTypes = {
    name: propTypes.string
}


/**
 * 
 * Refs && DOM
 * # Refs提供了一种方式，用于访问在render方法中创建的DOM节点或React元素
 * @class MyComponent
 * @extends {React.Component}
 */
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建 ref 存储 textInput DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
        console.log('dom节点：', this.textInput.current);
    }
    render() {
        // 告诉React我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
        return (
            <div>
                <input
                type="text"
                ref={this.textInput} />
                <input
                type="button"
                value="Focus the text input"
                onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

/**
 * 为类组件添加Ref - 模拟挂载之后立即被点击
 * @class AutoFocusTextInput
 * @extends {React.Component}
 */
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    // ref的更新会发生在componentDidMount或componentDidUpdate生命周期钩子之前
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

/**
 * refs与函数式组件
 * 不能在函数式组件上使用 ref 属性，因为它们没有实例
 * @returns
 *
 */
// function CustomTextInput(props) {
//     // 这里必须声明 textInput，这样 ref 回调才可以引用它
//     let textInput = null;
//     function handleClick() {
//         textInput.focus();
//     }
//     return (
//         <div>
//             <input
//             type="text"
//             ref={(input) => { textInput = input; }} />
    
//             <input
//             type="button"
//             value="Focus the text input"
//             onClick={handleClick}
//             />
//         </div>
//     );  
// }

/**
 * 非受控组件
 */
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.value);
      event.preventDefault();
    }  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}




export {AutoFocusTextInput}