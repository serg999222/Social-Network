import React from "react";
import { NavLink } from 'react-router-dom'
import s from '../../frends/Frends.module.css'


function activeLinc() {
	return ({ isActive }) => isActive ? s.active : ''
}


const FrendsList = (props) => {

	let removeFrend = (e) => {
		let userId = e.target.id
		props.getRemoveFrend(userId, props.pageNum)
	}

	return (


		<li className={s.menu__item}>
			<NavLink className={activeLinc()} to={'/ProfilPage/' + props.adres}> <img src={props.photo} alt="cover" />  {props.frend}  </NavLink>
			<button id={props.adres} onClick={removeFrend} >remove Frend</button>
		</li>

	)
}


export default FrendsList

