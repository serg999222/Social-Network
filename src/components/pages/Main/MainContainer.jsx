import React from "react";
import {connect} from 'react-redux'
import Main from './Main'
import {WidthRedirect} from '../../../hoc/widthRedirect'
import { compose } from "redux";


let mapStateToProps = (state) => {
 return {
	posts: state.newsPage.posts,

 }
} 

let mapDispatchToProps = (dispatch) => {

}

const MainContainer = compose(connect (mapStateToProps), WidthRedirect)  (Main)

export default MainContainer

