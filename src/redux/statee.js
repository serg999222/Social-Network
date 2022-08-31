import React from 'react'
import newsPageReduser from './newsPage-reduser'
import messagePageReduser from './messagePage-reduser'


let store = {
	_state: {
		messagePage: {
			userDialogs:[
				{ id: '1', name: 'Sasha' },
				{ id: '2', name: 'Sveta'},
				{ id: '3', name: 'Julia' },
				{ id: '4', name: 'Nazar' }
			],
			messages: [
				{ id: '1', text: 'Hy' },
				{ id: '2', text: 'How are you?' },
				{ id: '3', text: 'by!' }
			],
			messageTextNow: ''
	
		},
	
		newsPage: {
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
			newPostText: 'g'
		}
	
	
	
	
	
	},
	_callSubscriber(){
		console.log('hyhyhyhy')
	},

	setState(){
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
 	},


	dispatch (action) {

		this._state.newsPage = newsPageReduser(this._state.newsPage, action)
		this._state.messagePage = messagePageReduser(this._state.messagePage, action)
		
		this._callSubscriber()
	},




}



window.store = store

export default store





