import { createStore, combineReducers } from 'redux'
import campers from './campers/module'

const store = createStore(
  combineReducers({ campers }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
