import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';

const increment = createAction<number, number>(INCREMENT, diff => diff);

export const counterActions = {
  increment,
};

type IncrementAction = ReturnType<typeof increment>;

export type CounterState = {
  number: number;
  foo: string;
};

const initialState: CounterState = {
  number: 0,
  foo: 'bar',
};

const reducer = handleActions<CounterState, any>(
  {
    [INCREMENT]: (state, action: IncrementAction) => {
      return produce(state, draft => {
        if (!action.payload) return;
        draft.number = draft.number + action.payload;
      });
    },
  },
  initialState
);

export default reducer;
