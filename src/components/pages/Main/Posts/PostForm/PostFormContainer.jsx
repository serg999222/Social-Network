import React from "react";
import {addPostActionCreator} from '../../../../../redux/newsPage-reduser'
import {updateNewPostTextCreator} from '../../../../../redux/newsPage-reduser'
import PostForm from '../PostForm/PostForm'





function PostFormContainer(props) {

	let state = props.store.getState()

	let addPostt = (e) => {	
		e.preventDefault()
		props.store.dispatch(addPostActionCreator())
		
	}

	let onPostChange = (text)=>{
		props.store.dispatch(updateNewPostTextCreator(text))
	}
	



	return (
				<PostForm newPostText={state.newsPage.newPostText}  addPostt={addPostt} onPostChange={onPostChange} />
	)
}

export default PostFormContainer

