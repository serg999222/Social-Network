import React from "react";
import {NavLink} from 'react-router-dom'
 


const UsersList = (props) => {
	
	let addFrend = (e) =>{
		let userId = e.target.id
		props.getAddFrend(userId, props.pageNum)
	}

	  return (
		  <li>
		  <NavLink to={ '/ProfilPage/' + props.adres}><img src={props.photo}  alt="cover" />	
		  <div>
		  {props.user1} {props.city}
		  </div>
		  </NavLink>
		  <button id={props.adres} onClick={addFrend}>Add Frend</button>
		  </li>
	  )
  }


export default UsersList

