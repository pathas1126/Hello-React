import React from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";

// App 컴포넌트에 스토어 연결
import { connect } from "react-redux";
import * as counter from "./store/reducer";
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
const App = ({ number, counter }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <CountButton onClick={() => counter.increase(number + 1)} text="+" />
        <CountButton onClick={() => counter.decrease(number - 1)} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

// 스토어 상태 값과 액션 생성자를 Props로 매핑
// 크롬 Redux 익스텐션에서 log 확인 가능
const mapStateToProps = state => ({
  number: state.number
});

// const mapDispatchToProps = dispatch => ({
//   increase: number => dispatch(increase(number)),
//   decrease: number => dispatch(decrease(number))
// });

// 위의 코드를 bindActionCreators를 사용해서 작성 가능
const mapDispatchToProps = dispatch => ({
  counter: bindActionCreators(counter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
