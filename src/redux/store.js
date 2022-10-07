import { configureStore, combineReducers} from '@reduxjs/toolkit'
import newsPageReduser from './newsPage-reduser'
import messagePageReduser from './messagePage-reduser'
import frendsPageReduser from './frendsPage-reduser'
import profilePageReduser from './profilePage-reduser'
import authReduser from './auth-ruduser'



let redusers =  combineReducers({
	newsPage: newsPageReduser,
	messagePage: messagePageReduser,
	frendsPage: frendsPageReduser,
	profilePage: profilePageReduser,
   auth: authReduser,

}) 


let store = configureStore({
	reducer: redusers
})


window.store = store

export default store