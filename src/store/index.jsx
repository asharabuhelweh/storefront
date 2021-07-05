import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products.jsx';
import  categories  from './categories.jsx';

let reducers = combineReducers({
  productsReducer,
  categories 
})

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
