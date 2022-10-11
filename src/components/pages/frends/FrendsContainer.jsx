import React from "react";
import s from './Frends.module.css'
import FrendsList from './FrendsList/FrendsList'
import UsersList from './usersList/UsersList'
import Frends from "./Frends"
import reqestsApi from '../../../api/api'
import { connect } from 'react-redux'
import { addFrend,getUsers,toglePreloader,prevPage,nextPage,setUsers,
removeFrend,getNextPage,getPrevPage,getRemoveFrend,getAddFrend } from '../../../redux/frendsPage-reduser'
import {Navigate} from 'react-router-dom'
import {WidthRedirect} from '../../../hoc/widthRedirect'
import { compose } from "redux";

class FrendsContainer extends React.Component {
		
	componentDidMount(){
		this.props.getUsers(this.props.pageNum)
	}

	onNextPage = (num) =>{
		this.props.getNextPage(num)
	}

	onPrevPage = (num)=>{
		this.props.getPrevPage(num)
	}


	frendsListt() {
		
		let clearFrendlist = this.props.users.filter(user => user.isFrends ? user : '')
		let frendsList = clearFrendlist.map((user, i) => <FrendsList key={ user.id}
		pageNum={this.props.pageNum} 
		photo={user.userAva ? user.userAva : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'}
		removeFrend={this.props.removeFrend} 
		adres={ user.id} frend={user.name} 
		setUsers={this.props.setUsers} getRemoveFrend={this.props.getRemoveFrend}/>)
		return frendsList
	}
	userListt() {
		
		let clearUserlist = this.props.users.filter(user => !user.isFrends ? user : '')
		let userList = clearUserlist.map(user => <UsersList key={ user.id}
		pageNum={this.props.pageNum}  
		photo={user.userAva ? user.userAva : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'} 
		addFrend={this.props.addFrend} 
		user1={user.name} adres={ user.id} 
		setUsers={this.props.setUsers} getAddFrend={this.props.getAddFrend} />)
		return userList
	}

	
	render() {
	
		 return <Frends 
		 onPrevPage={this.onPrevPage} 
		 onNextPage={this.onNextPage} 
		 pageNum={this.props.pageNum}  
		 userListt={this.userListt()} 
		 frendsListt={this.frendsListt()} 
		 world='world' 
		 isLoading={this.props.isLoading}
		 />
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.frendsPage.users,
		pageNum: state.frendsPage.pageNum,
		isLoading: state.frendsPage.isLoading,
		// isAutorisation:state.auth.isAutorisation
	}
}

//WidthRedirect
 
export default compose(
	connect(mapStateToProps, {removeFrend,
	addFrend,
	setUsers,
	nextPage,
	prevPage,
	toglePreloader,
	getUsers,
	getNextPage,
	getPrevPage,
	getRemoveFrend,
	getAddFrend,}), WidthRedirect
	
	) (FrendsContainer)
 

