import axios from "axios";
import React from "react";
import s from './Frends.module.css'
import FrendsList from './FrendsList/FrendsList'
import UsersList from './usersList/UsersList'
import Frends from "./Frends"

class FrendsReqestApi extends React.Component {

	
	componentDidMount(){
		
		axios.get("http://jsonplaceholder.typicode.com/users")
		.then(response => {

			let users = response.data
			this.props.setUsers(users)
			
		})

	}

	// componentDidUpdate(){
	// 	axios.get("http://jsonplaceholder.typicode.com/users")
	// 	.then(response => {

	// 		let users = response.data
	// 		this.props.setUsers(users)
			
	// 	})
	// }

	frendsListt() {

		let clearFrendlist = this.props.users.filter(user => user.isFrends ? user : '')
		let frendsList = clearFrendlist.map((user, i) => <FrendsList photo={!user.address.geo.lat ? '500' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'}
		 removeFrend={this.props.removeFrend} index={i} adresss={user.id} frend={user.lastName} />)
		return frendsList
	}
	userListt() {
		
		let clearUserlist = this.props.users.filter(user => !user.isFrends ? user : '')
		
		let userList = clearUserlist.map(user => <UsersList photo={!user.address.geo.lat ? '500' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'} 
		addFrend={this.props.addFrend} user1={user.username} adres={'user' + user.id} adress={user.id} city={user.address.city} />)
		return userList
	}

	render() {
		// return (
		
		// 	<div className={s.container}>
				
		// 		<div className={s.sercherContainer}>
		// 			<input placeholder="serch Frends" className={s.input} type='text' />
		// 		</div>
		// 		<div className={s.listsFlexContainer} >
		// 			<ul className={s.frends}>
		// 				 {this.frendsListt()} <li>Bla bla</li>
		// 			</ul>
		// 			<ul className={s.users}>
		// 				{this.userListt()}<li>Bla bla</li>
		// 			</ul>
		// 		</div>
		// 		Frends Page
		// 	</div>
		// )
		 return <Frends  userListt={this.userListt()} frendsListt={this.frendsListt()} world='world' />
	}
}



export default FrendsReqestApi

