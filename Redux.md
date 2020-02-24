# Redux

- 하나의 스토어만 만들 수 있지만 리듀서 함수의 개수는 정해져 있지 않음
  특정 함수를 통해 리듀서 함수를 하나로 통합하여 내보낼 수 있기 때문

---

## createStore 함수

> redux 라이브러리 함수

- 스토어를 생성하는 함수
- 리듀서 함수를 인자로 받아서 연결
- 크롬 익스텐션을 사용하기 위해 추가로 인자 전달 가능
- Redux 개발자 도구에서 @@INIT이라는 텍스트가 존재한다면 연결에 성공한 것

## Provider 컴포넌트

> react-redux에서 제공되는 컴포넌트

- 프로젝트와 스토어를 연결할 때 사용하는 컴포넌트
- ReactDOM.render() 함수 내부에 최상위 컴포넌트로 작성

```jsx
ReactDOM.render(
	<Provider store={store}>
    	<App/>
    </Provider>
, document.getElementById('root'));
```

## connect 함수

> react-redux 라이브러리에 있는 함수

- 복잡한 store 구독 과정을 알아서 처리해 주는 함수
- 보통 아래와 같이 작성

```js
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

### mapStateToProps

> 스토어의 상태 값을 Props로 매핑하는 함수

- state를 인자로 받아서 props로 넘겨줄 값을 json 형태로 반환
- 보통 다음과 같이 작성

```js
const mapStateToProps = state => ({
    number: state.number
});
```

### mapDispatchToProps

> 액션 생성자를 Props로 매핑하는 함수

- dispatch 함수를 인자값으로 받아와 props로 넘겨줄 값을 json 형태로 반환
- 보통 다음과 같이 작성

```js
const mapDispatchToProps = dispatch => ({
    increase: number => dispatch(increase(number)),
    decrease: number => dispatch(decrease(number)),
});
```

#### bindActionCreators(actionCreators, dispatch)

> redux 라이브러리 함수

- 값이 액션 생성자인 객체를 받아서 같은 키를 가지지만 각각의 생산자들을
  dispatch로 감싸서 바로 호출 가능하게 만드는 객체로 바꿈
- Redux를 상관하지 않는 컴포넌트로 액션 생성자를 넘기지만
  dispatch나 Redux 스토어는 넘기고 싶지 않을 때만 사용하는 함수
- 바로 위의 코드를 다음과 같이 작성 가능

```js
// props로 counterAction을 받아 counterActions.increase와 같은 형식으로 함수 사용 가능
const mapDispatchToProps = dispatch => ({
	counterActions: bindActionCreators(counterActions, dispatch)
})
```

## redux-actions 라이브러리

> 리덕스에서 귀찮은 일들을 상당부분 줄여주는 유틸리티 라이브러리

- 리듀서 함수 내에서 불변성은 필수 요소
  → Immer, Immutable 등의 라이브러리 필요
  Immutable은 get, set 함수 등을 통해 상태 값을 변경해야 함

### createAction

> 간편하게 액션 생성자를 만들어주는 함수

- 인자로 액션 타입과 payloadCreator를 받음
- payloadCreator는 함수 형태로 넘기며 생략 가능함
- payload: FSA 규칙을 따르는 액션 객체는
  액션에서 사용할 파라미터 필드명을 payload로 통일
  이를 통하여 액션 생성 함수를 훨씬 더 쉽게 작성할 수 있음

### handleActions

> Redux의 핵심인 reducer 부분을 더 간편하게 만들어주는 함수

- 인자값으로 리듀서와 initialState를 받음
- 작동방식은 리듀서와 동일

## Immer 라이브러리

> 불변성을 신경 쓰지 않는 것처럼 코드를 짤 수 있게 도와주는 라이브러리

### Immer 작동 방식

1. 현재 상태를 임시적인 Draft에 적용
2. 사용자는 Draft 수정
3. 수정 작업이 완료되면 Draft를 통해 새로운 상태를 만들어 반환
4. 불변성을 신경 쓰지 않는 것처럼 보여도 불변성이 잘 지켜짐
5. 라이브러리를 사용하지 않으면 스토어 내에서 실수할 가능성이 있기 때문에
   라이브러리를 사용하는 습관을 들이는 것이 좋음

## combineReducers 함수

> redux 라이브러리 함수

- 여러 개의 리듀서 함수를 하나로 합쳐주는 역할을 함

## redux-pender

> redux middleware 중 하나로 비동기 api 통신을 위한 라이브러리

- redux middleware: 액션을 디스패치 했을 때, 리듀서에서 액션이 처리되기 전에
  특정 코드를 실행시켜주는 것
- 액션 로깅, 비동기 api 통신 등에 미들웨어 사용 가능
- 필수는 아니지만 해당 라이브러리를 사용하면 개발 난이도가 많이 낮아짐

# Axios

> HTTP 통신 라이브러리
> "Promise based HTTP client for the browser and node.js"

- Promise란 비동기 처리에 사용되는 객체를 뜻함
- axios는 비동기 방식으로 HTTP 요청을 처리
- api와의 비동기 통신 목적으로 사용

