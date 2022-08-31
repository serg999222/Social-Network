import React from "react";
import s from "./PostForm.module.css"
import {addPostActionCreator} from '../../../../../redux/newsPage-reduser'
import {updateNewPostTextCreator} from '../../../../../redux/newsPage-reduser'





function PostForm(props) {

	let addPostRef = React.createRef()
	
	


 
let addPostt = (e) => {	
	
	props.addPostt(e)
}

let onPostChange = ()=>{
	let text = addPostRef.current.value
	props.onPostChange(text)
	
}
	



	return (
				<form>
					<input onChange={onPostChange}  ref={addPostRef} value={props.newPostText}/> <br />
					<button onClick={addPostt} type='submit'>Add Post</button>
				</form>
	)
}

export default PostForm

