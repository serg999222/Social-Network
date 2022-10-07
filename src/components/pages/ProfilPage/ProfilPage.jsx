import React from "react";
import s from './ProfilPage.module.css'
import UserProfession from './UserProfession'

import Preloader from "../../Preloader";


function ProfilPage(props) {
	const isOwner = () => {
		let o = props.ownerId ? props.ownerId.toString() : ''
		return props.id == o
	}

	const onUserAvaAdder = (e) => {

		const reader = new FileReader()
		let userAva
		reader.addEventListener('load', () => {
			userAva = reader.result
			props.getUserAva(userAva, props.ownerId)
			props.setChangeUserAva(userAva)
		})
		reader.readAsDataURL(e.target.files[0])


	}



	return (
		<div className={s.container}>
			<Preloader isLoading={props.isLoading} />
			<h2 className={s.title}>Profile</h2>
			<div className={s.myAccounteLink}>
				<div className={s.avatar}>
					<img className={s.avatarImg}  src={props.userAva || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU'} alt="cover" />
				</div>
				<div className={s.styleLineContainer}>
					<div className={s.styleLine}>
						 {isOwner() ? <input onChange={onUserAvaAdder} type={"file"} /> : null} {props.name}
						 <UserProfession {...props}/>
					</div>
				</div>
			</div>
		</div>

	)
}

export default ProfilPage

