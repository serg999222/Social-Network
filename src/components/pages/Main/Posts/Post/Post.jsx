import React from "react"
import Ava from "./avaBlock/Ava/Ava"
import s from "./Post.module.css"
import PostDescription from "./avaBlock/postDescription/PostDescription"

function Post(props) {
	return (
		<div>
			<img className={s.postImage} src={props.image} alt="" />
			<div className={s.postAva}>
				<Ava />
				<p>{props.name}</p>
			</div>
			<PostDescription text='Hy this is my photo'/>
			<hr/>
		</div>
	)
}

export default Post

