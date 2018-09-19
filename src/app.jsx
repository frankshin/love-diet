

import React from 'react';
import ReactDOM from 'react-dom';

// 各类功能的组件
import { 
    Hello, Calculator, TestShow,
    TestPropTypes,
    NameForm,
    CustomTextInput,
    AutoFocusTextInput
} from './component/classList';

// ReactDOM.render(
//     React.createElement(Hello, {toWhat: 'World'}, null),
//     document.getElementById('root')
// );


ReactDOM.render(
    <AutoFocusTextInput />,
    document.getElementById('root')
);