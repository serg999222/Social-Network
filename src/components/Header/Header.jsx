import React from "react"
import s from "./Header.module.css"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

function Header(props) {

	return (
		<header className={s.header}>
			<div className={s.logo}>
				<img alt="cover" src='https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-circuit-logo-template-vector-png-image_704226.jpg' />
				<h1 className={s.logo__text}>SOCIAL NETVORK</h1>
			</div>
			<input placeholder="serch Frends" className={s.input} type='text' />
			{!props.isAutorisation ? <NavLink className={s.login} to='/Login'>Login</NavLink> : <NavLink className={s.login} to={'ProfilPage/' + props.id}>{props.name}</NavLink>}
		</header>
	)
}

let mapStateToProps = (state) =>{
	return {
		email:state.auth.user.email,
		name:state.auth.user.name,
		id: state.auth.user.id,
		isAutorisation:state.auth.isAutorisation
	}
}

export default connect(mapStateToProps, {}) (Header)