import React, { useState } from "react";
import s from './ProfilPage.module.css'
import Preloader from "../../Preloader";
import { useForm } from 'react-hook-form'



function UserProfession(props) {



	const [editMode, changeEditMode] = useState(false)

	const isOwner = () => {
		let o = props.ownerId ? props.ownerId.toString() : ''
		return props.id == o
	}
	const changeEditModeTrue = () => {
		changeEditMode(true)
	}
	const changeEditModeFalse = ()=>{
		
		changeEditMode(false)
	}




	return (
		<div>
			{isOwner() &&
				<div>
					{!editMode? <div onClick={changeEditModeTrue} className={s.userProfessionContainerLink}> {props.profession} </div>: <IsProfession {...props} changeEditModeFalse={changeEditModeFalse}/>}
				</div>
			}
			{!isOwner() &&
				<div className={s.userProfessionContainer}>
					{props.profession}
				</div>
			}
		</div>

	)
}


const IsProfession = (props)=>{
	const {register, handleSubmit, formState: { errors }, reset } = useForm()

	const onSubmit = (data)=>{
		
		let o = props.ownerId
		props.getUserProfession(o,data,props.changeEditModeFalse)
		reset()
	}

	return(
<form onSubmit={handleSubmit(onSubmit)}>
	<input type={'text'} {...register('profession',{required: "Field is required"})} className={s.userProfessionContainer}/>
	<button  type="submit">accept</button>
	</form>
	)
}

export default UserProfession

