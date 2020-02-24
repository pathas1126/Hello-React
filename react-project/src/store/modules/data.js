import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Type
const APPEND_DATA = "data/APPEND_DATA";
const REMOVE_DATA = "data/REMOVE_DATA";

// Action Creator
export const appendData = createAction(APPEND_DATA, data => data);
export const removeData = createAction(REMOVE_DATA, id => id);

// state 초기값 설정
const initialState = {
  "0": {
    id: "0",
    name: "John",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "Peter",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "Elise",
    phone: "010-2222-2222"
  },
  "3": {
    id: "3",
    name: "Chris",
    phone: "010-3333-3333"
  },
  "4": {
    id: "4",
    name: "Austin",
    phone: "010-4444-4444"
  },
  "5": {
    id: "5",
    name: "Adam",
    phone: "010-5555-5555"
  }
};

// initialState의 다음 키값을 설정하기 위한 변수
var nextId = Object.keys(initialState).length;

// handleActions함수, reducer와 동일한 역할
export default handleActions(
  {
    // 데이터 추가 액션
    [APPEND_DATA]: (state, action) =>
      produce(state, draft => {
        draft[nextId] = {
          id: nextId,
          ...action.payload
        };
        nextId++;
      }),
    // 데이터 삭제 액션
    [REMOVE_DATA]: (state, action) =>
      produce(state, draft => {
        delete draft[action.payload];
      })
  },
  initialState
);
