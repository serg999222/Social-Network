import React from "react";
import s from './Main.module.css'
import PostFormContainer from './Posts/PostForm/PostFormContainer'
import Post from './Posts/Post/Post'




function Main(props) {

	let post = props.newsPage.posts.map( itemPost => <Post image = {itemPost.image} name = {itemPost.name} text={itemPost.text} avaUser={itemPost.avaUser}/>)

	return (
		<main className={s.main}>
			<PostFormContainer store={props.store} />
			<hr />

			<div>
				
				{post}

			</div>
		</main>
	)
}


export default Main

