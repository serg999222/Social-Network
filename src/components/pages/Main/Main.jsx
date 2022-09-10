import React from "react";
import s from './Main.module.css'
import Post from './Posts/Post/Post'
import PostformContainer from './Posts/PostForm/PostFormContainer'




function Main(props) {

	let post = props.posts.map( (itemPost, ) => <Post  image = {itemPost.image} name = {itemPost.name} text={itemPost.text} avaUser={itemPost.avaUser}/>)

	return (
		<main className={s.main}>
			<PostformContainer  />
			<hr />

			<div>
				
				{post}

			</div>
		</main>
	)
}


export default Main

