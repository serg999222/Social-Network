import React from "react"
import s from './Registration.module.css'
import { getRegistrationData } from '../../../redux/auth-ruduser'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'


const Registration = (props) => {

	const history = useNavigate()

	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
	const onSubmit = data => {
		props.getRegistrationData(data)
		reset()
		history('/login')

	}




	return (
		<div>
			<h2 className={s.loginTitle}>Registration</h2>


			<form className={s.formLogin} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.input}>
					<input type="email" {...register('email', {
						required: "Field is required",
						minLength: {
							value: 5,
							message: 'Too few symbol'
						}
					})} placeholder="enter your e-mail" />
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

				<div className={s.input}>
					<input type="name" {...register('name', {
						required: "Field is required",
						minLength: {
							value: 5,
							message: 'Too few symbol'
						}
					})} placeholder="enter your name" />
					<div className={s.errors}>
						{errors?.name && <p>{errors.name.message}</p>}
					</div>
				</div>
				<button className={s.buttom} type="submit">register</button>

			</form>
		</div>
	)

}
const mapStateToProps = (state) => {
	return {
		isAutorisation: state.auth.isAutorisation
	}
}

export default connect(mapStateToProps, { getRegistrationData })(Registration)

