import React from "react"
import Ava from "./Ava/Ava"
import s from "./Post.module.css"
import PostDescription from "./postDescription/PostDescription"


class Post extends React.Component{

	render() {
		return (
			<div>
			<div className={s.postImageWrapper}><img className={s.postImage} src={this.props.image} alt="" /></div>
				<div className={s.postAva}>
					<Ava avaUser={this.props.avaUser}/>
					<p>{this.props.name}</p>
				</div>
				<PostDescription text={this.props.text}/>
				<hr/>
			</div>
		)
	}
}


export default Post

