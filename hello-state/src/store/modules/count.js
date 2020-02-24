// Ducks 패턴: 액션 관련 부분과 리듀서 관련 부분을 분리하지 않는 방식
// Redux 공식 홈페이지에서 사용한 패턴은 위의 두 부분을 분리함

// redux-actions, immer 라이브러리 import
import { createAction, handleActions } from "redux-actions";
import * as API from "../../lib/api";
import produce from "immer";
import { pender } from "redux-pender";

// Actions
// 액션 type을 상수로 선언, 액션 타입은 Uppercase로 작성
const GET_NUM = "reducer/GET_NUM";
const SET_NUM = "reducer/SET_NUM";

// Action Creators
// 액션 생성자, 함수 형태로 export 해야 함
export const getNum = createAction(GET_NUM, API.getNumber);
export const setNum = createAction(SET_NUM, API.setNumber);

// Initial State
// Store의 초기값 지정
const initialState = {
  number: 0
};

export default handleActions(
  {
    ...pender({
      type: GET_NUM,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.number = action.payload.data;
        })
    }),
    ...pender({
      type: SET_NUM,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.number = action.payload.data;
        })
    })
  },
  initialState
);
