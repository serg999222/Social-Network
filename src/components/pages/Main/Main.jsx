import React from "react";
import s from './Main.module.css'
import PostForm from './Posts/PostForm/PostForm'
import Post from './Posts/Post/Post'


function Main() {
	return (
		<main className={s.main}>
			<PostForm />
			<hr />

			<div>
				
				<Post name='dima' image="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
				<Post name='roma' />
				<Post name='5' />

			</div>
		</main>
	)
}


export default Main

