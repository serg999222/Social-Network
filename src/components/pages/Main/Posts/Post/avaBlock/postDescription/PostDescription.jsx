import React from "react"
import s from "./PostDescription.module.css"


function PostDescription(props) {
	return (
		<div className={s.postDescription}>
			<p>{props.text}</p>
		</div>
	)
}

export default PostDescription

