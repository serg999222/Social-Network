import React from "react";
import s from './Message.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from "./Messages/Messages";



function Message(props) {

	let changeMessageRef = React.createRef()

	let massage = props.messages.map((massage, index) => <Messages text={massage.text} key={index} />)
	let usersDialog = props.userDialogs.map((item , index) => <Dialogs name={item.name} adress={item.id} key={index} in={index}/>)




	let addMessage = (e) =>{
		e.preventDefault()
		let text = changeMessageRef.current.value
		props.addMessage(text)
		changeMessageRef.current.value = ''
		
	}

	let onMessageChange = (e) =>{
		let text = e.target.value
		props.onMessageChange(text)
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

