import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    //a 태그일 경우 동작하지 않는다 (react-router-dom의 {Link}를 임포트 받는다)
    return (<div>
                {/*
                <a href="/">홈으로</a>
                <a href="/about">상세로</a>
                */}
                <Link to={{pathname:"/"}}><button>홈으로</button></Link>
                <Link to="/about"><button>상세보기</button></Link>    
            </div>)

}

export default Navigation;