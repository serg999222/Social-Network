import React from "react";
import s from "./PostForm.module.css"





class PostForm extends React.Component{



	addPostt = (e) => {	
		e.preventDefault()
		this.props.addPostt()
		
	}

	onPostChange = (e) => {
		
		let text = e.target.value
		this.props.onPostChange(text)
		
	}

	render(){
		return (
			<form>
				<input onChange={this.onPostChange}  value={this.props.newPostText}/> <br />
				<button onClick={this.addPostt} type='submit'>Add Post</button>
			</form>
)
	}
}



export default PostForm

