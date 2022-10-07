import reqestsApi from '../api/api'
import { createSlice } from '@reduxjs/toolkit'

const authReduser = createSlice({
	name: 'auth',
	initialState: {
		user: {
			email: null,
			name: null,
			id: null,
			myDialogs: [
				// {
				// 	dialogsUser: {
				// 		id: 0, name: "", myMessages: [{ myMessagesId: null, myMessage: '' }],
				// 		dialogsUserMessages: [{ dialogsUserMessagesId: null, dialogsUserMessage: '' }]
				// 	}
				// },
			]
		},
		isAutorisation: false

	},
	reducers: {
		setUserAutorisation(state, action) {
			state.user = action.payload
			state.isAutorisation = true
		},
		setChangeUserAva(state, action){
			
			state.user.userAva = action.payload
		}
	}
	
})



export const getUserAutorisation = (setNevUser, updatePath) => {
	return (dispatch) => {
		reqestsApi.setUserAutorisationApi(setNevUser).then(user => {
			
			dispatch(setUserAutorisation(user))
				updatePath(user.id)
			
		})
	}
}

export const getRegistrationData = (setNevUser) => {
	return () => {
		reqestsApi.registrationNewUserApi(setNevUser)
	}
}

export default authReduser.reducer

export const { setUserAutorisation, setChangeUserAva } = authReduser.actions