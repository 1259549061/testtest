import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './css/main.scss';
import App from './App';

// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from '../reducers'
//
// let store = createStore(todoApp);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// )
//

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
