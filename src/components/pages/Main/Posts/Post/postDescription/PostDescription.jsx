import React from "react"
import s from "./PostDescription.module.css"


class PostDescription extends React.Component{
	render() {
		return (
			<div className={s.postDescription}>
				<p>{this.props.text}</p>
			</div>
		)
	}
}



export default PostDescription

