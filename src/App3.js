import React from 'react';

import {HashRouter, Route} from 'react-router-dom'; 
//import {BrowserRouter, Route} from 'react-router-dom'; //브라우저 라우터는 #이 사라진다(단 깃에서 배포시 문제가있음)

import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './component/Navigation';

//라우터사용
function App3() {
    return (
        //about요청이라면 About컴포넌트를 보여주세요
        //path의 /에 대한 component를실행 후 /about의 component를 실행하게 되는데
        //정확하게 해당 패스에만 실행하는 속성이 exact={true}
        //Navigation은 반드시 Router안에 있어야 합니다
        <HashRouter>
            <Navigation /> {/*모든페이지에서 공통으로 사용하는 Component */}
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/movie_detail" component={Detail}></Route>
        </HashRouter>
        )
}

export default App3;