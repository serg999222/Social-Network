import React, { useEffect, useState } from "react";
import s from './ProfilPage.module.css'
import ProfilPage from './ProfilPage'
import { connect } from "react-redux";
import { setProfile, getUserAva, getSetProfile, getUserProfession } from '../../../redux/profilePage-reduser'
import { useParams } from 'react-router-dom'
import reqestsApi from '../../../api/api'
import { compose } from "redux";
import {WidthRedirect} from '../../../hoc/widthRedirect'
import {setChangeUserAva} from '../../../redux/auth-ruduser'



const ProfilPageContainer = (props) => {
	let [isLoading, toggleIsloading] = useState(false)
	

	let { id } = useParams()

	useEffect(() => {
		 // getSetProfile(id, toggleIsloading)

		toggleIsloading(true)
		reqestsApi.setProfileApi(id).then(response => {
			toggleIsloading(false)
			props.setProfile(response.data)
			
		})
	},[]
	)
	
	return (
		<ProfilPage {...props} isLoading={isLoading} id={id} />
	)
}

const mapStateToProps = (state) => {
	return {
		name: state.profilePage.profilUser.name,
		lastname: state.profilePage.profilUser.lastname,
		userAva: state.profilePage.profilUser.userAva,
		isAutorisation:state.auth.isAutorisation,
		ownerId:state.auth.user.id,
		profession:state.profilePage.profession
	}
}
 
export default compose(connect(mapStateToProps, { setProfile, getUserAva, getSetProfile, setChangeUserAva, getUserProfession }), WidthRedirect) (ProfilPageContainer)












