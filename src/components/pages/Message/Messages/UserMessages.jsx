import React from "react";
import s from './UserMessages.module.css'




function UserMessages(props){
	return (		
		 <li className={s.userMessage}>{props.text}</li>	
			
	)
}

export default UserMessages

