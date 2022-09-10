import { configureStore } from '@reduxjs/toolkit'
import {combineReducers, createStore} from 'redux'
import newsPageReduser from './newsPage-reduser'
import messagePageReduser from './messagePage-reduser'
import frendsPageReduser from './frendsPage-reduser'


let redusers =  combineReducers({
	newsPage: newsPageReduser,
	messagePage: messagePageReduser,
	frendsPage: frendsPageReduser
}) 

let store = createStore(redusers)

// let reduser = {
// 	newsPage: newsPageReduser,
// 	messagePage: messagePageReduser
// }

// let store = configureStore({reduser})

window.store = store

export default store