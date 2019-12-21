import React from 'react';
import Axios from 'axios';
import Movie from './App2_Child1'; //자식클래스로 사용할 컴포넌트를 임포트

class App2 extends React.Component {

    state = {
        isLoad: true,
        movies: []
    }

    getMovies = async () => { // async는 이 함수는 비동기야 await가 끝날떄 까지 기다려줘! 라는 것을 의미한다
        //npm i axios 설치
        
        //script문법
        //const result = await Axios.get("https://yts-proxy.now.sh/list_movies.json"); //await은 Axios가 끝날떄 까지 기다려줘를 의미함
        //console.log(result.data.data.movies);
        
        //ex6문법
        //?sort_by=rating은 정렬을 의미함 api문서에서 확인
        const {data:{data: {movies}}} = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //await은 Axios가 끝날떄 까지 기다려줘를 의미함
        console.log(movies);

        this.setState(callback => ({movies, isLoad: false}) ); //setState를 이용해서 state의 데이터값 저장, 로딩여부를 false
    }

    componentDidMount() { //첫번째 랜더가 끝나고 실행되는 리엑트함수
        // setTimeout(() => {
        //     this.setState(callback => ({isLoad: false, test: false}) ); //test변수를 state에 마음대로 추가하더라도 괜찮다
        // }, 6000);
        this.getMovies();
        
    }

    render() {
        //const {isLoad} = this.state;
        //return <div>{isLoad ? "로딩중" : "로딩이 끝났습니다"}</div>;
        
        const {isLoad, movies } = this.state;
        return  <div>
                {isLoad ? "로딩중" 
                        : movies.map(result => { //movies배열의 키값들을 Movie Prop으로 전달한다. 
                            console.log(result); //Movie에서는 타이틀을 리턴해주고 화면에 출력된다
                            return <Movie key={result.id}
                                        id={result.id} 
                                        year={result.year}
                                        title={result.title}
                                        summary={result.summary}
                                        medium_cover_image={result.medium_cover_image}>
                                </Movie>
                        })
                }
                </div>
    }


}

export default App2;