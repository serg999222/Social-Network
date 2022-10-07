import {createSlice} from '@reduxjs/toolkit'
import reqestsApi from '../api/api'

const profilePageReduser = createSlice({
	name:'profile',
	initialState:{
		profilUser: {},
		isLoading: false,
		userId:null,
		profession:'Profession'
	},


	reducers:{
		setProfile(state, action){		
			state.profilUser = action.payload
			state.profession = action.payload.profession.profession
		},
		setProfession(state,action){
			state.profession = action.payload.profession.profession
		}
	}
})

export const getSetProfile = (id,toggleIsloading) => {
	// debugger
	// return (dispatch) =>{
	// 	toggleIsloading(true)
	// 	reqestsApi.setProfileApi(id).then(response => {
	// 		toggleIsloading(false)
	// 		dispatch(setProfile(response.data))
			
	// 	})
	//}
}

export const getUserAva = (file, ownerId) => {
	return (dispatch) =>{
		reqestsApi.setUserAvaApi(file, ownerId)
		.then(() => {
			reqestsApi.setProfileApi(ownerId).then(response => {				
				dispatch(setProfile(response.data))				
			})
		})
	}
}

export const getUserProfession = (userIdReqest, profession,changeEditModeFalse) =>{
	return (dispatch) => {
	
		reqestsApi.UserProfessionApi(userIdReqest,profession).then(response => {
			const data = response.data				
			dispatch(setProfession(data))
			changeEditModeFalse(false)
		})
	}
}



export default profilePageReduser.reducer
export const {setProfile, setProfession} = profilePageReduser.actions





