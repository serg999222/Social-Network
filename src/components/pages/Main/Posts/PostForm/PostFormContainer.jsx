import React from "react";
import {addPostActionCreator} from '../../../../../redux/newsPage-reduser'
import {updateNewPostTextCreator} from '../../../../../redux/newsPage-reduser'
import PostForm from '../PostForm/PostForm'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
 return 	{newPostText: state.newsPage.newPostText}	
}

let mapDispatchToprops = (dispatch) => {
return {
	addPostt: () => {
		dispatch(addPostActionCreator())
	},
	onPostChange: (text)=>{
		
		dispatch(updateNewPostTextCreator(text))
	}
}
}

let PostformContainer = connect(mapStateToProps, mapDispatchToprops) (PostForm)



export default PostformContainer

