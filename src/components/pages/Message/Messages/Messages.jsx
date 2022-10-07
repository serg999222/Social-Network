import React from "react";
import s from './Messages.module.css'




function Messages(props){
	return (		
		 <li className={s.messages}>{props.text}</li>	
		
	)
}

export default Messages

