import React from "react"
import Ava from "./Ava/Ava"
import s from "./Post.module.css"
import PostDescription from "./postDescription/PostDescription"

function Post(props) {
	return (
		<div>
		<div className={s.postImageWrapper}><img className={s.postImage} src={props.image} alt="" /></div>
			<div className={s.postAva}>
				<Ava avaUser={props.avaUser}/>
				<p>{props.name}</p>
			</div>
			<PostDescription text={props.text}/>
			<hr/>
		</div>
	)
}

export default Post

