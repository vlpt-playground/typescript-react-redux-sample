import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';
import list, { ListState } from './list';

export default combineReducers({
  counter,
  list,
});

export type State = {
  counter: CounterState;
  list: ListState;
};
