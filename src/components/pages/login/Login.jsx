import React from 'react'
import s from './Login.module.css'
import { connect } from 'react-redux'
import { getUserAutorisation } from '../../../redux/auth-ruduser'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = (props) => {

	const history = useNavigate()

	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
	const onSubmit = data => {
		props.getUserAutorisation(data, updatePath)
		reset()
		
	}
	const updatePath = (id)=>{
	
		history(`/ProfilPage/${id}`)
	}

	return (
		<div>
			<h2 className={s.loginTitle}>Login</h2>

			<form onSubmit={handleSubmit(onSubmit)} className={s.formLogin}>
				<div className={s.input}>

					<input type="email" {...register('email', {
						required: "Field is required",
						minLength: {
							value: 5,
							message: 'Too few symbol'
						}
					})}
						placeholder="enter your e-mail" />
					<div className={s.errors}>
						{errors?.email && <p>{errors.email.message}</p>}
					</div>
				</div>

				<div className={s.input}>
					<input type="password" {...register('password', {
						required: "Field is required",
						minLength: {
							value: 5,
							message: 'Password must be at least 5 symbol'
						}
					})} placeholder="enter your password" />
					<div className={s.errors}>
						{errors?.password && <p>{errors.password.message}</p>}
					</div>
				</div>
				<button className={s.buttom} type="submit">Enter</button>
				<br />
				<NavLink to='/Registration'>Registration</NavLink>

			</form>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {

	}
}

export default connect(mapStateToProps, { getUserAutorisation })(Login)