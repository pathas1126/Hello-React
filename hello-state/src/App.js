import React, { Component } from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

class App extends Component {
  state = { number: 0 };

  constructor(props) {
    super(props);
    console.log("constructor 호출");
  }

  componentDidMount() {
    console.log("componentDidMount 호출");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출");
    if (nextState.number % 3 === 0) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate 호출");
  }

  // setState() 함수에 state를 업데이트하는 함수 전달
  countUp = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  // setState() 앞에서 먼저 값을 받아서 전달
  countDown = () => {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  };

  render() {
    // 구조 분해 할당 구문
    const { number } = this.state;
    const { countUp, countDown } = this;

    console.log("render 호출");

    return (
      <Wrapper>
        <ButtonWrapper>
          <CountButton onClick={countUp} text="+"></CountButton>
          <CountButton onClick={countDown} text="-"></CountButton>
        </ButtonWrapper>
        <Number number={number} />
      </Wrapper>
    );
  }
}

export default App;
