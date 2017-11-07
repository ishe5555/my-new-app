import campers, {receiveCampers} from './campers/module'
import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

// THE WORK:
const routesMap = {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      dispatch({ type: 'TEH OBJECT' })
      console.log(getState())
      const p = await fetch(
        'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      )
      const stuff = await p.json()
      console.log(stuff)
      dispatch(receiveCampers(stuff))
    },
  }, // action <-> url path
  //  USER: '/user/:id', // :id is a dynamic segment
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects

// and you already know how the story ends:
const rootReducer = combineReducers({ location: reducer, campers })
const middlewares = applyMiddleware(middleware)
// note the order: enhancer, then middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares))

/*  Old version of store before enhancers

  const store = createStore(
  combineReducers({ campers }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
*/
export default store
