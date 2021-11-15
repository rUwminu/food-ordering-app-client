import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import {
  resDetailsReducer,
  recipesListReducer,
} from '../reducers/restaurantReducer'

const initialState = {
  userSignIn: {
    user: '',
  },
}

const reducer = combineReducers({
  resList: resDetailsReducer,
  rescipesList: recipesListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
