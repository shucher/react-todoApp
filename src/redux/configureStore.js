import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import {createLogger} from 'redux-logger'
import toDoApp from './modules/toDoApp'

const logger = createLogger() // initialize logger
const reducers = combineReducers({
  toDoApp
})
const store = createStore(reducers, compose(
	applyMiddleware(logger),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
export default store;