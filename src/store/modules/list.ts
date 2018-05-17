import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export interface Info {
  text: string;
  id: number;
}

const SET_INPUT = 'list/SET_INPUT';
const INSERT = 'list/INSERT';

let id = 0;

const insert = createAction<Info, string>(INSERT, (text: string) => {
  const info: Info = {
    id,
    text,
  };
  id += 1;
  return info;
});

const setInput = createAction<string, string>(SET_INPUT, (text: string) => text);

export const listActions = {
  insert,
  setInput,
};

type InsertAction = ReturnType<typeof insert>;
type SetInputAction = ReturnType<typeof setInput>;

export type ListState = {
  list: Info[];
  input: string;
};

const initialState: ListState = {
  list: [],
  input: '',
};

const reducer = handleActions<ListState, any>(
  {
    [SET_INPUT]: (state, action: SetInputAction) => {
      return produce(state, draft => {
        draft.input = action.payload || '';
      });
    },
    [INSERT]: (state, action: InsertAction) => {
      return produce(state, draft => {
        if (!action.payload) return;
        draft.list.push(action.payload);
      });
    },
  },
  initialState
);

export default reducer;
