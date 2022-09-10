const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	posts: [
		{id:1, image: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
		 name: 'dima', text: 'Hy this is my photo',
		  avaUser:"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"},
		{id:2, image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'
		, name: 'dima2', text: 'Hy this is my photo2',
		 avaUser:"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"},
		{id:3, image: '', name: 'dima3', text: 'Hy this is my photo3',
		 avaUser:"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"}
	],
		newPostText: ''
	}


export const addPostActionCreator = () => ({type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textt:text })

const newsPageReduser = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_NEW_POST_TEXT:
			return{
				...state,
				newPostText: action.textt
			}

		case ADD_POST:
			return{
				...state,
				posts: [ {id:4, image:'', name:'saha', text: state.newPostText , avaUser:''}, ...state.posts ],
				newPostText: ''
			}			
			
		default:
			return state
	
	}

}

export default newsPageReduser