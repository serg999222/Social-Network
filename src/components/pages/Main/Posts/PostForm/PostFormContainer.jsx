import React from "react";
import {addPostActionCreator} from '../../../../../redux/newsPage-reduser'
import PostForm from '../PostForm/PostForm'
import {connect} from 'react-redux'
import { compose } from "redux";
import { WidthRedirect } from "../../../../../hoc/widthRedirect";



let mapStateToProps = (state) => {
 return 	{newPostText: state.newsPage.newPostText}	
}

let mapDispatchToprops = (dispatch) => {
return {
	addPostt: (text) => {
		
		dispatch(addPostActionCreator(text))
	},
	
}
}

let PostformContainer = compose(connect(mapStateToProps, mapDispatchToprops))  (PostForm)

//, WidthRedirect

export default PostformContainer

