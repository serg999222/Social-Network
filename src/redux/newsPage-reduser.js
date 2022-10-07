import {createSlice} from '@reduxjs/toolkit'


const newsPageReduser = createSlice({
	name:'statePost',
	initialState : {
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
			},
	reducers: {
		
		addPostActionCreator(state, action){
			state.posts.unshift({id:4, image:'', name:'saha', text:  action.payload})
		}
	}
})



export default newsPageReduser.reducer
export const { addPostActionCreator} = newsPageReduser.actions