import React from "react";
import s from './../Message.module.css'
import { NavLink } from 'react-router-dom';


function isActive() {
	return ({ isActive }) => isActive ? s.active : ''
}


const Dialogs = (props) => {





	return (
		<li>
			<NavLink id={props.in} onClick={props.getMessageToUser} className={isActive()} to={props.adress.toString()}>{props.name} {props.in} </NavLink>
		</li>
	)
}



export default Dialogs

