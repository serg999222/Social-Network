import axios from "axios";
import React from "react";
import s from './Frends.module.css'
import FrendsList from './FrendsList/FrendsList'
import UsersList from './usersList/UsersList'


let Frends = (props) => {

	
	
	return (
		
		<div className={s.container}>
			
			<div className={s.sercherContainer}>
				<input placeholder="serch Frends" className={s.input} type='text' />
			</div>
			<div className={s.listsFlexContainer} >
				<ul className={s.frends}>
					 {props.frendsListt} <li>Bla bla</li>
				</ul>
				<ul className={s.users}>
					{props.userListt}<li>Bla bla {props.world}</li>
				</ul>
			</div>
			Frends Page
		</div>
	)
	
}
	
	
		

	




export default Frends

