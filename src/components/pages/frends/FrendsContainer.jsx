import React from "react"
import {connect} from 'react-redux'
import FrendsReqestApi from '../frends/FrendsReqestApi'
import {removeFrendAC} from '../../../redux/frendsPage-reduser'
import {addFrendAC} from '../../../redux/frendsPage-reduser'
import {setUsersAC} from '../../../redux/frendsPage-reduser'




let mapStateToProps = (state) => {
	return{
		users: state.frendsPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	
	return {
		removeFrend: (userId) => {		
			dispatch(removeFrendAC(userId))
		},
		addFrend: (userId) => {
			dispatch(addFrendAC(userId))
		},
		setUsers: (users) =>{
			
			dispatch(setUsersAC(users))
		}
		
	}
}

let FrendsContainer = connect (mapStateToProps, mapDispatchToProps) (FrendsReqestApi)

export default FrendsContainer

