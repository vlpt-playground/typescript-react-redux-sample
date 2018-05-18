// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수
export const counterActions = {
  increment: (diff: number) => ({ type: INCREMENT, payload: diff }),
  decrement: (diff: number) => ({ type: DECREMENT, payload: diff }),
};

// 액션 객체의 타입
type IncrementAction = ReturnType<typeof counterActions.increment>;
type DecrementAction = ReturnType<typeof counterActions.decrement>;
type Actions = IncrementAction | DecrementAction;

// 카운터 리듀서 값 타입
export type CounterState = Readonly<{
  someExtraValue: string,
  value: number,
}>;

// 카운터 리듀서 기본 값
const initialState: CounterState = {
  someExtraValue: 'hello',
  value: 0,
};

// 리듀서
export default function reducer(state: CounterState = initialState, action: Actions): CounterState {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + (action as IncrementAction).payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - (action as DecrementAction).payload,
      };
    default: 
      return state;
  }
}



