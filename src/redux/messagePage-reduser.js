import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import reqestsApi from '../api/api'

const messagePageReduser = createSlice({
	name: 'message',
	initialState:  {
			userDialogs:[
			
			],
			messages: [
				{myMessages: [], dialogsUserMessages: []}
			],
				
		},
		reducers:{
	
			addMessageActionCreator(state, action){
				state.messages.myMessages.unshift({myMessagesId: 1, myMessage: action.payload})
			},
		
			setUsersDialogs(state, action) {
			
				state.userDialogs = action.payload
			},
			setMessageToUser(state,action){
				state.messages = []
				state.messages.unshift(action.payload)
			}
		}
})


export const getAddMyMessageForUser = (userIdReqest, obj) =>{
	return (dispatch) => {
		reqestsApi.addMyMessageForUser(userIdReqest, obj).then(response => {
			let data = response.data
			dispatch(addMessageActionCreator(data))
		})
	}
}
 

// export const getUsersDialogs = () => {

// 	return (dispatch) => {	
		
// 		axios('http://localhost:3001/users').then(response => {
// 			let data = response.data
// 			dispatch(setUsersDialogs(data))
// 		})	



// 		// reqestsApi.setUsersDialogsApi()
// 		// 	.then(data => {			
// 		// 		let users = data
// 		// 		dispatch(setUsersDialogs(users))
// 		// 	})
// 	}
// }

export default messagePageReduser.reducer

export const { addMessageActionCreator,setUsersDialogs, setMessageToUser} = messagePageReduser.actions



