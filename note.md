# 参考

> 笔记

### Install redux & react-redux

```
npm install --save redux
npm install --save react-redux
```
### code

```
# index.js

import { createStore } from 'redux';  
import { Provider, connect } from 'react-redux';

// Component
class App extends Component{  
    render() {  
        const {text, onChangeText, onButtonClick} = this.props;  
        return (  
            <div>  
                <h1 onClick={onChangeText}> {text} </h1>  
                <button onClick={onButtonClick}>click me</button>  
            </div>  
        );  
    }  
}  

//action  
const changeTextAction = {  
        type:'CHANGE_TEXT'  
}  
const buttonClickAction = {  
        type:'BUTTON_CLICK'  
}

//reducer  
const initialState = {  
    text: 'Hello'  
}  
const reducer = (state = initialState, action) => {  
    switch (action.type) {  
        case 'CHANGE_TEXT':  
            return {  
                text: state.text=='Hello' ? 'world':'Hello'  
            }  
        case 'BUTTON_CLICK':  
            return {  
                text: 'Hello world'  
            }  
        default:  
            return initialState;  
    }  
} 

//store  
let store = createStore(reducer); 

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { text: state.text }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction)  
    }  
}

//连接组件  
App = connect(mapStateToProps, mapDispatchToProps)(App)  
  
//渲染组件  
ReactDOM.render(  
    <Provider store={store}>  
        <App />  
    </Provider>,  
    document.getElementById('root')  
)  
```

## 连接 React 组件

1. `<Provider> 组件，它接收 `store` 并使得所有的子组件都可以通过 `React` 的 `context API` 来访问 `store` 。

```jsx harmony
<Provider store={ myStore }>
  <MyApp />
</Provider>
```

2. `connect` 函数，它负责订阅 `store` 的更新和重新渲染组件

```jsx harmony
connect(
  [mapStateToProps],
  [mapDispatchToProps],
  [mergeProps],
  [options]
)
```

* `mapStateToProps` 接收 `store` 的当前状态,并且必须返回一组键值对 (对象)，这些对将作为 `props` 发送给我们的 `React` 组件

* `mapDispatchToProps` 也是类似的，只是它接收的是 `dispatch` 函数，而不是 `state` 。这里是我们将派发动作定义成属性的地方。

* `mergeProps` 将 `mapStateToProps`、 `mapDispatchToProps` 和发送给组件的属性进行合并，它赋予我们机会去累加出更适合的属性。
