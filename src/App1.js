import React from 'react';
import PropsTypes from 'prop-types';

//클래스 이름을 export와 동일하게 사용
class App1 extends React.Component {
    //상속받으면 state객체를 사용할수 있다 -> state는 변하는 데이터를 관리한다
    state = {
      count: 0
    }
    add = () => {
      //this.state.count++; //이건 render메서드가 호출되지 않기 때문에 안됩니다
      //this.setState({count: this.state.count + 1}) //좋지 않은 방법
      //매개변수 익명함수 는 현재 state에 접근할수 있게 해준다
      this.setState(function(current) {
        return {count: current.count + 1}
      })
    }
    minus = () => {
      this.setState(current => ({count: current.count - 1}) )
    }
  
    componentDidMount() {
      console.log("componet mount"); //***처음 랜더링 이후에 실행
    }
    componentDidUpdate() {
      console.log("component update"); //두번쨰 랜더링 이후에 실행
    }
    componentWillUnmount() {
      console.log("component goodbye"); //component가 끝날떄 실행됨 (아직 확인할순 없음)
    }
  
    //상속받으면 render()를 사용할수 있다 -> 리엑트는 모든 render메서드를 실행시킨다
    render() {
      console.log("component render");
  
      return <div>
              <h1>state {this.state.count}</h1>
              <button type="button" onClick={this.add}>플러스</button>
              <button type="button" onClick={this.minus}>마이너스</button>
            </div>;
      }
  }
   
  export default App1;