import { createStore } from 'redux';
import rootReducer from './modules';

export default function configureStore() {
  // window 를 any 로 강제 캐스팅
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(rootReducer, devTools && devTools());
  return store;
}