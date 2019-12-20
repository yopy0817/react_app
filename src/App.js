import React from 'react';
import PropTypes from 'prop-types'; //->npm i prop-types로 설치

/* react는 컴포넌트는 유일성을 지켜줘야 한다(즉 랜더링될때 동일한 형식의 태그가 그려지는 것을 피하자) */
/* key값을 추가 */
let foodArr = [
  {key: 1, name: "김치", img: "./logo192.png", rating:1},
  {key: 2, name: "삼겹살", img: "./favicon.ico", rating:2},
  {key: 3, name: "햄버거", img: "./img/1.jpg", rating:3},
  {key: 4, name: "멜론", img: "../img/2.jpg", rating:4}
]
/*
//범위주석단축키 shift + alt + a
//1ST(외부 컴포넌트를 임포트 한다)
//import Food from './potato'; //app에서 potato를 가지고 온다
//2nd
//직접 컴포넌트에 선언을 해준다
function Food({fav, img, rating}) { //(props)
    //console.log(props);
    //console.log(props.fav);
    return (
        <div>
          <h1>i love {fav}</h1>
          <h2>레이팅: {rating}/5.0</h2>
          <img src={img} alt={fav}/>
        </div>
      );
}

Food.propTypes = { //이름은 꼭 propTypes이다, 구글링으로 옵션을 찾아보자
  fav: PropTypes.string.isRequired, //필수
  img: PropTypes.string.isRequired, //필수
  rating: PropTypes.number          //필수아님
}

function App() {
  return (<div>
            {// 1ST :jsx에서는 fav="값" 형식으로 component의 값을 전달할 수 있다
            //<Food fav="burger" papa={['hello', 1, 2, 3]}/>
            //<Food fav="pizza"  papa={['hello', 1, 2, 3]}/>
            //<Food fav="kimchi" papa={['hello', 1, 2, 3]}/>
            //<Food fav="melon"  papa={['hello', 1, 2, 3]}/>
            } 
            {foodArr.map(food => ( //2nd: map이용하기
                <Food key={food.key} 
                      fav={food.name} 
                      img={food.img}
                      rating={food.rating}/>)
              // {
              // console.log(food.name)
              // return food;
              // }
            )}
          </div>
         );
}
*/

//클래스 이름을 export와 동일하게 사용
class App extends React.Component {
  //상속받으면 state객체를 사용할수 있다 -> state는 변하는 데이터를 관리한다
  state = {
    count: 0
  }
  add = () => {
    //this.state.count++; //이건 render메서드가 호출되지 않기 때문에 안됩니다
    //this.setState({count: this.state.count + 1}) //좋지 않은 방법
    //current함수는 현재 state에 접근할수 있게 해준다
    this.setState(function current(current) {
      return {count: current.count + 1}
    } )
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}) )
  }

  //상속받으면 render()를 사용할수 있다 -> 리엑트는 모든 render메서드를 실행시킨다
  render() {
    return <div>
            <h1>state {this.state.count}</h1>
            <button type="button" onClick={this.add}>플러스</button>
            <button type="button" onClick={this.minus}>마이너스</button>
          </div>;
    }
}


export default App;
