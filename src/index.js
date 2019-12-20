import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/*intex.html root부분의 App.js부분을 밀어넣는다*/
/*render는 component HTML을 반환하는 함수이다(JSX는 자바스크립트안에 HTML을 의미한다)*/
/*render는 단 한번에 하나의 component만 랜더링 할 수 있다*/
ReactDOM.render(<App />, document.getElementById('root'));
