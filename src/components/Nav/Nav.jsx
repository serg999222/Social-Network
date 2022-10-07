import React from 'react'
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import {getUserAutorisation} from '../../redux/auth-ruduser'
import { connect } from 'react-redux'

function Nav(props) {


	function activeLinc(){
		return ({isActive}) => isActive ? s.active: ''
	}
	

	return <nav className={s.nav}>
		<div className={s.myAccounteLink}>
			<div className={s.avatarImg}>
			{!props.isAutorisation? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'/> :<img src={props.userAva} alt="cover" />}
			</div>
			<div>
				<div>
					{props.isAutorisation ? <NavLink to={'/ProfilPage/' + props.id}>{props.name}</NavLink> : <p className={s.text}>You are not authorized</p>}
				</div>
				<div>
					<a href='#'>Some frends</a>
				</div>
			</div>
		</div>
		<ul className={s.menu__list}>
			<li className={s.menu__item}>
				<span>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8MKS7WyYUFGoVIVjs1Uk70I7kjtsBuqr0Q&usqp=CAU" alt="" />
					<NavLink to='/' className={activeLinc()}>Main</NavLink>
				</span>
			</li>
			<li className={s.menu__item}>
				<span>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8MKS7WyYUFGoVIVjs1Uk70I7kjtsBuqr0Q&usqp=CAU" alt="" />
					<NavLink to='/Image' className={activeLinc()}>Image</NavLink>
				</span>
			</li>
			<li className={s.menu__item}>
				<span>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8MKS7WyYUFGoVIVjs1Uk70I7kjtsBuqr0Q&usqp=CAU" alt="" />
					<NavLink to='/Frends' className={activeLinc()}>Frends</NavLink>
				</span>
			</li>
			<li className={s.menu__item}>
				<span>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8MKS7WyYUFGoVIVjs1Uk70I7kjtsBuqr0Q&usqp=CAU" alt="" />
					<NavLink to='/Message' className={activeLinc()}>Message</NavLink>
				</span>
			</li>
			<li className={s.menu__item}>
				<span>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8MKS7WyYUFGoVIVjs1Uk70I7kjtsBuqr0Q&usqp=CAU" alt="" />
					<NavLink to='/Settings' className={activeLinc()}>Settings</NavLink>
				</span>
			</li>
		</ul>
	</nav>
}
const mapStateToProps = (state) => {
	
return {
	name:state.auth.user.name,
	id: state.auth.user.id,
	isAutorisation:state.auth.isAutorisation,
	userAva:state.auth.user.userAva
}
}

export default connect(mapStateToProps, {getUserAutorisation}) (Nav)