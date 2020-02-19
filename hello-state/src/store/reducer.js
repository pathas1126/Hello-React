// Ducks 패턴: 액션 관련 부분과 리듀서 관련 부분을 분리하지 않는 방식
// Redux 공식 홈페이지에서 사용한 패턴은 위의 두 부분을 분리함

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = number => ({
  type: INCREASE,
  payload: number
});

export const decrease = number => ({
  type: DECREASE,
  payload: number
});

const initialState = {
  number: 0
};

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
