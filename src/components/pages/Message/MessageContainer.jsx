import React from "react";
import {addMessageActionCreator,  setUsersDialogs, setMessageToUser, getAddMyMessageForUser} from '../../../redux/messagePage-reduser'
import Message from './Message'
import {connect} from 'react-redux'
import { compose } from "redux";
import {WidthRedirect} from '../../../hoc/widthRedirect'





let mapStateToProps = (state) => {

	
	
	return {
		messages:state.messagePage.messages,
		userDialogs:state.messagePage.userDialogs,
		myDialogs:state.auth.user
	}
}




export default  compose (connect (mapStateToProps, {addMessageActionCreator, setUsersDialogs, setMessageToUser,getAddMyMessageForUser }), WidthRedirect) (Message)

