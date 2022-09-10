import React from "react";
import {NavLink} from 'react-router-dom'



class UsersList extends React.Component{

	 addFrend = (e) =>{
		let userId = e.target.id
		this.props.addFrend(userId)
	}
	render(){
	

		return (
			<li>
			<NavLink to={this.props.adres}><img src={this.props.photo}  alt="cover" />	
			<div>
			{this.props.user1} {this.props.city}
			</div>
			</NavLink>
			<button id={this.props.adress} onClick={this.addFrend}>Add Frend</button>
			</li>
		)
	}
}



export default UsersList

