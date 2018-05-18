import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const SET_INPUT = 'list/SET_INPUT';
const INSERT = 'list/INSERT';

let id = 0; // 나중에 배열 렌더링 시 key 로 사용 될 고유 값

export type Info = {
  text: string;
  id: number;
};

export const listActions = {
  // createAction<Payload 타입, ...액션 생성함수의 파라미터들>
  setInput: createAction<string, string>(SET_INPUT, text => text),
  insert: createAction<Info, string>(INSERT, text => {
    const info: Info = {
      id,
      text,
    };
    id += 1;
    return info;
  }),
};

type SetInputAction = ReturnType<typeof listActions.setInput>;
type InsertAction = ReturnType<typeof listActions.insert>;

export type ListState = {
  list: Info[];
  input: string;
};

const initialState: ListState = {
  list: [],
  input: '',
};

// handleActions<StateType, PayloadType>
const reducer = handleActions<ListState, any>({
  [SET_INPUT]: (state, action: SetInputAction) => {
    return produce(state, draft => {
      if (action.payload === undefined) { 
        return;
      }
      draft.input = action.payload;
    });
  },
  [INSERT]: (state, action: InsertAction) => {
    return produce(state, draft => {
      if (!action.payload) { 
        return;
      }
      draft.list.push(action.payload);
    });
  }
}, initialState);

export default reducer;