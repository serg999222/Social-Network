import React from "react";
import {addMessageActionCreator} from '../../../redux/messagePage-reduser'
import {updateNewMessageTextActionCreator} from '../../../redux/messagePage-reduser'
import Message from './Message'
import {connect} from 'react-redux'





let mapStateToProps = (state) => {
	
	return {
		messages:state.messagePage.messages,
		userDialogs:state.messagePage.userDialogs
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage : (text) =>{
			dispatch(addMessageActionCreator(text))
			
		},
		onMessageChange: (text) =>{
			dispatch(updateNewMessageTextActionCreator(text))
		}
	}

}


const MessageContainer = connect (mapStateToProps, mapDispatchToProps) (Message)

export default MessageContainer

