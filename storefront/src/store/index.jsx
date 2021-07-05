import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products.jsx';
import categoryProducer from './categories.jsx';

let reducers = combineReducers({
  productsReducer,
  categoryProducer
})

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
