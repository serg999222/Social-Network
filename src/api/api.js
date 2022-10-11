import React from "react";
import * as axios from "axios";



const instanse = axios.create({
//  headers: {
// 	// "Content-Type": "application/json"
//  },
 baseURL:"http://localhost:3001/"
})




 const reqestsApi = {

	setUserAvaApi(userAva, userIdReqest){
		return instanse.patch(`users/${userIdReqest}` , {userAva},  { "Content-Type": "application/json" })
		
	},

	// setUsersDialogsApi(){
	// debugger
	// 	return	instanse.get(`users/`)
	// 		.then(response => {
	// 			return response.data
	// 		})
	// 	},

	setUsersApi(pageNum){
	
	return	instanse.get(`users?_limit=2&_page=${pageNum.toString()}`)
		.then(response => {
			return response.data
		})
	},
	
	addFrendApi(userIdReqest, isFrends){
		return instanse.patch(`users/${userIdReqest}` , {isFrends},  { "Content-Type": "application/json" })
	},

	setProfileApi(id) {
		return instanse.get(`users/${id}`)
	},

	setUserAutorisationApi(setNevUser){
	
		return instanse.post(`login`, {...setNevUser} , { "Content-Type": "application/json" })
		.then(response => {
			
			let user = response.data.user
			return user
			// setUserAutorisation(user)
		})
	},

	registrationNewUserApi(setNevUser){
		return instanse.post('signup', {...setNevUser}, { "Content-Type": "application/json" })
	},

	addMyMessageForUser(userIdReqest, obj){
		return instanse.patch(`users/${userIdReqest}` , {obj},  { "Content-Type": "application/json" })
	},

	UserProfessionApi(userIdReqest, profession){
		return instanse.patch(`users/${userIdReqest}` , {profession},  { "Content-Type": "application/json" })
	}

}

export default reqestsApi
