import React from "react";
import {connect} from 'react-redux'
import Main from './Main'



let mapStateToProps = (state) => {
 return {
	posts: state.newsPage.posts,

 }
} 

let mapDispatchToProps = (dispatch) => {

}

const MainContainer = connect (mapStateToProps, mapDispatchToProps) (Main)

export default MainContainer

