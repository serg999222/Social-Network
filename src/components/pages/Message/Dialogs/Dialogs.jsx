import React from "react";
import s from './../Message.module.css'
import { NavLink } from 'react-router-dom';

function isActive() {
	return ({ isActive }) => isActive ? s.active : ''
}


const Dialogs = (props) => {
	return (
		<li>
			<NavLink className={isActive()} to={props.adress}>{props.name} {props.in+1} </NavLink>
		</li>
	)
}



export default Dialogs

