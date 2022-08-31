import React from "react";
import s from './Message.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from "./Messages/Messages";
import {addMessageActionCreator} from '../../../redux/messagePage-reduser'
import {updateNewMessageTextActionCreator} from '../../../redux/messagePage-reduser'


function Message(props) {
	let changeMessageRef = React.createRef()

	let massage = props.userDialogs.messages.map(massage => <Messages text={massage.text} />)
	let usersDialog = props.userDialogs.userDialogs.map(item => <Dialogs name={item.name} adress={item.id} />)




	let addMessage = (e) =>{
		e.preventDefault()
		let text = changeMessageRef.current.value
		props.dispatch(addMessageActionCreator(text))
		changeMessageRef.current.value = ''
	}

	let onMessageChange = (e) =>{
		let text = e.target.value
		props.dispatch(updateNewMessageTextActionCreator(text))
	}


	return (
		<div className={s.container}>
			<div className={s.input}><input type="search" placeholder="serch frends for comunicate" /></div>
			<div className={s.message__wrapper}>
				<ul className={s.users}>
					{usersDialog}
				</ul>
				<ul className={s.messages}>
					{massage}
				</ul>
			</div>
			<form className={s.addMessage}>
			<textarea ref={changeMessageRef}  className={s.writeMessage} onChange={onMessageChange} value={props.userDialogs.messageTextNow} ></textarea>
			<input onClick={addMessage} type="submit" className={s.submitMessage}/>
			</form>
	

		</div>
	)
}

export default Message

