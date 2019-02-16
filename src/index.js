import React from 'react'; // import react 模組
import ReactDOM from 'react-dom';// import react-dom 模組
import Contacts from './component/Root'; //引入組件
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Contacts />, // 第一個參數放置要render的Component
    document.getElementById('root'));  //第二個參數放要放到哪個實體DOM中

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
