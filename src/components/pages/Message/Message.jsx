import React from "react";
import s from './Message.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from "./Messages/Messages";


function Message(props) {
console.log(props)
	 

	let massage = props.userDialogs.messages.map(massage => <Messages text={massage.text} />)
	let usersDialog = props.userDialogs.userDialogs.map(item => <Dialogs name={item.name} adress={item.id} />)


	return (
		<div className={s.container}>
			<div className={s.input}><input input type="search" placeholder="serch frends for comunicate" /></div>
			<div className={s.message__wrapper}>
				<ul className={s.users}>
					{usersDialog}
				</ul>
				<ul className={s.messages}>
					{massage}
				</ul>
			</div>
			<form className={s.addMessage}>
			<textarea className={s.writeMessage}  placeholder="write a message"></textarea>
			<input type="submit" className={s.submitMessage}/>
			</form>
	

		</div>
	)
}

export default Message

