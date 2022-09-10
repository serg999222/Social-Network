

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = (text) => ({type: ADD_NEW_MESSAGE, text})
//export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})
export const updateNewMessageTextActionCreator = (text) => {
	return {type: UPDATE_NEW_MESSAGE_TEXT, text}
}


let initialState =  {
	userDialogs:[
		{ id: '1', name: 'Sasha' },
		{ id: '2', name: 'Sveta'},
		{ id: '3', name: 'Julia' },
		{ id: '4', name: 'Nazar' }
	],
	messages: [
		{ id: '1', text: 'Hy' },
		{ id: '2', text: 'How are you?' },
		{ id: '3', text: 'by!' }
	],
	messageTextNow: ''

}

const messagePageReduser = (state =initialState, action) => {
	switch(action.type){
		case UPDATE_NEW_MESSAGE_TEXT:
			return{ ...state,
			messageTextNow : action.text
		}
			
		case ADD_NEW_MESSAGE:
			return{
				...state,
				messages : [{id:0 , text:action.text},...state.messages],
				messageTextNow : ''
			}

		default: return state
	}

}

export default messagePageReduser