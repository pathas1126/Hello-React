// Ducks 패턴: 액션 관련 부분과 리듀서 관련 부분을 분리하지 않는 방식
// Redux 공식 홈페이지에서 사용한 패턴은 위의 두 부분을 분리함

// redux-actions, immer 라이브러리 import
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
// 액션 type을 상수로 선언, 액션 타입은 Uppercase로 작성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// Action Creators
// 액션 생성자, 함수 형태로 export 해야 함
export const increase = number => ({
  type: INCREASE,
  payload: number
});

export const decrease = number => ({
  type: DECREASE,
  payload: number
});

// Initial State
// Store의 초기값 지정
const initialState = {
  number: 0
};

// Reducer
// Redux에서 가장 중요한 부분, 액션 타입에 따라 특정 코드를 실행
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { number: action.payload };
    case "DECREASE":
      return { number: action.payload };
    default:
      return state;
  }
};

export default reducer;
