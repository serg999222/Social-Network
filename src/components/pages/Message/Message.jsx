import React, {useEffect} from "react"
import s from './Message.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from "./Messages/Messages"
import { useForm } from 'react-hook-form'
 import UserMessages from "./Messages/UserMessages"





function Message(props) {
	useEffect(() => {
		props.setUsersDialogs(props.myDialogs)
	}, [])

	const getMessageToUser = (e) =>{
	let d = e.target.id
	let y
		let f = props.myDialogs.myDialogs.map((item, index) => {
			 if(d == item.dialogsUser.id){
				 y = index
				return  item
			 }	
		})	
		props.setMessageToUser(f[y].dialogsUser)
	 }
	
	let massage =  props.messages[0].myMessages.map((massage, index) => <Messages text={massage.myMessage} key={index} />)
	let userMessage =  props.messages[0].dialogsUserMessages.map((userMessage, index) => <UserMessages text={userMessage.dialogsUserMessage} key={index} />)
	let usersDialog = props.myDialogs.myDialogs.map((item, index) => <Dialogs getMessageToUser={getMessageToUser} name={item.dialogsUser.name} adress={item.dialogsUser.id} key={index} in={item.dialogsUser.id} />)

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
				<ul className={s.messages}>			
					{userMessage}
				</ul>
		
			</div>
			<MessageForm {...props}/>
		</div>
	)
}

const MessageForm = (props) => {

	const { register, handleSubmit, formState: { errors }, reset } = useForm()
	const onSubmit = data => {
		debugger
		let myMessages = data.message 
		let id = props.messages.id
		props.getAddMyMessageForUser(id, myMessages)
		reset()
		
	} 

	return (
		<form className={s.addMessage} onSubmit={handleSubmit(onSubmit)}>
			<textarea {...register('message', {
				required:'Your message cannot be empty'
			})} className={s.writeMessage} ></textarea>
			<div className={s.errors}>{errors?.message && <p>{errors.message.message}</p> }</div>
			<div className={s.buttomContainer}>

				<button  type="submit" className={s.submitMessage}><div className={s.underline}>Add</div></button>

			</div>
		</form>
	)
}


export default Message

