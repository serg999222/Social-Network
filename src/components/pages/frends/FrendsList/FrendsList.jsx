import React from "react";
import { NavLink } from 'react-router-dom'
import s from '../../frends/Frends.module.css'


function activeLinc(){
	return ({isActive}) => isActive ? s.active: ''
}


class FrendsList extends React.Component{

	removeFrend = (e) => {	

		let userId = e.target.id
		this.props.removeFrend(userId)
		}
	
	render(){
		return  (
		
			
			<li className={s.menu__item}>
				<NavLink  className={activeLinc()} to={this.props.adresss}> <img src={this.props.photo} alt="cover" /> {this.props.adresss}  {this.props.frend}  </NavLink>
				<button id={this.props.adresss} onClick={this.removeFrend} >remove Frend</button>	
			</li>
				
		)
	}
}




export default FrendsList

