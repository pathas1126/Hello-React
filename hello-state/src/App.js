import React, { useState, useEffect } from "react";
import CountButton from "./components/CountButton";
import CountInput from "./components/CountInput";
import Number from "./components/Number";
import styled from "styled-components";

// App 컴포넌트에 스토어 연결
import { connect } from "react-redux";
import * as countFunc from "./store/modules/count";
import { bindActionCreators } from "redux";

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

// 하단에서 Props로 매핑된 스토어 상태 값과 액션 생성자를
// App 컴포넌트에 인수로 전달
const App = ({ number, countFunc }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getNumber = async () => {
      try {
        await countFunc.getNum();
      } catch (e) {
        console.warn(e);
      }
    };
    getNumber();
  }, []);

  const handleCount = e => {
    const value = e.target.value;

    // input type="number" 일지라도 브라우저 상에서 숫자를 받을 수 있도록
    // 해주기만 하는 것이기 때문에 parseInt()함수로 value값을 정수형으로 반환해주어야 함
    setCount(parseInt(value));
  };

  const handleClick = async type => {
    try {
      if (type === "plus") await countFunc.setNum(number + count);
      else if (type === "minus") await countFunc.setNum(number - count);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Wrapper>
      <CountInput count={count} onChange={handleCount} />
      <ButtonWrapper>
        <CountButton onClick={() => handleClick("plus")} text="+" />
        <CountButton onClick={() => handleClick("minus")} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

// 스토어 상태 값과 액션 생성자를 Props로 매핑
// 크롬 Redux 익스텐션에서 log 확인 가능
export default connect(
  state => ({
    number: state.count.number
  }),
  dispatch => ({
    countFunc: bindActionCreators(countFunc, dispatch)
  })
)(App);
