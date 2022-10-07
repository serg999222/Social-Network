import reqestsApi from '../api/api'
import { createSlice } from '@reduxjs/toolkit'

const frendsPageReduser = createSlice({
	name: 'frends',
	initialState: {
		users: [

		],
		pageNum: 1,
		isLoading: false
	},
	reducers: {
		addFrend(state, action) {
			state.users.map(user => {
				if (action.payload === user.id) {
					return { ...user, isFrends: true }
				}
			})
		},
		removeFrend(state, action) {
			state.users.map(user => {
				if (action.payload === user.id) {
					return { ...user, isFrends: false }
				}
			})
		},

		setUsers(state, action) {
			state.users = action.payload
		},

		nextPage(state, action) {
			state.pageNum = action.payload +1
		},

		prevPage(state, action) {
			state.pageNum = action.payload - 1
		},

		toglePreloader(state, action) {
			state.isLoading = action.payload
		}

		// export const toglePreloader = (isTrue) => ({ type: TOGGLE_PRELOAD, isTrue })

	}
})



export const getUsers = (pageNum) => {

	return (dispatch) => {
		dispatch(toglePreloader(true))
		reqestsApi.setUsersApi(pageNum)
			.then(data => {
				dispatch(toglePreloader(false))
				let users = data
				dispatch(setUsers(users))
			})
	}
}

export const getNextPage = (num) => {
	return (dispatch) => {
		dispatch(nextPage(num))
		let h = num + 1
		dispatch(toglePreloader(true))
		reqestsApi.setUsersApi(h)
			.then(data => {
				dispatch(toglePreloader(false))
				let users = data
				dispatch(setUsers(users))
			})
	}
}

export const getPrevPage = (num) => {
	return (dispatch) => {
		dispatch(prevPage(num))
		let h = num - 1
		dispatch(toglePreloader(true))
		reqestsApi.setUsersApi(h)
			.then(data => {
				dispatch(toglePreloader(false))
				let users = data
				dispatch(setUsers(users))
			})
	}
}

export const getRemoveFrend = (userId, pageNum) => {
	return (dispatch) => {
		dispatch(removeFrend(userId))
		let userIdReqest = userId
		reqestsApi.addFrendApi(userIdReqest, false)
			.then(() => {
				reqestsApi.setUsersApi(pageNum).then(data => {
					let users = data
					dispatch(setUsers(users))
				})
			})
	}
}

export const getAddFrend = (userId, pageNum) => {
	return (dispatch) => {
		dispatch(addFrend(userId))
		let userIdReqest = userId
		reqestsApi.addFrendApi(userIdReqest, true)
			.then(() => {
				reqestsApi.setUsersApi(pageNum).then(data => {

					let users = data
					dispatch(setUsers(users))

				})
			})
	}
}



export default frendsPageReduser.reducer

export const {addFrend,removeFrend, setUsers, nextPage, prevPage, toglePreloader} = frendsPageReduser.actions

