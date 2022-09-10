
const ADD_FREND = 'ADD_FREND'
const REMOVE_FREND = 'REMOVE_FREND'
const SET_USERS = 'SET_USERS'




let initialState = {
	users: [
		// {id:'1', isFrends: true, firstName: 'Oleh', lastName: 'Ivanov', country: 'Ukraine', ava:'' },
		// {id:'2', isFrends: true, firstName: 'Serhii', lastName: 'Vaschenko', country: 'Ukraine', ava:'' },
		// {id:'3', isFrends: true, firstName: 'Yuliia', lastName: 'Peremoga', country: 'Kanada', ava:'' },
		// {id:'4', isFrends: false, firstName: 'Nazar', lastName: 'Sergiyovich', country: 'Germany', ava:'' },
		// {id:'5', isFrends: true, firstName: 'Svitlana', lastName: 'Yarova', country: 'Ukraine', ava:'' },

	]
}



const frendsPageReduser = (state = initialState, action) => {
	
	switch(action.type){

		case SET_USERS:{
			
			// return {
			// 	...state,
			// 	users: [...state.users, ...action.users]
			// }
			return {
				...state, users: action.users
			}
			
		}

		case ADD_FREND: 
			return {
				...state,
				users: state.users.map(user => {
					if(action.userId === user.id){
						return { ...user, isFrends: true}
					}
					return user
				})
			}

		case REMOVE_FREND:
			return {
				...state,
				users: state.users.map(user => {
					if(action.userId === user.id){
						return { ...user, isFrends: false}
					}
					return user
				})
			}	
		
			default: return state
	}

}

export const addFrendAC = (userId) => ({type:ADD_FREND, userId})
export const removeFrendAC = (userId) => ({type:REMOVE_FREND, userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})

export default frendsPageReduser

