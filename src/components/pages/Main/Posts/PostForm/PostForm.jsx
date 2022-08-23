import React from "react";
import s from "./PostForm.module.css"

let addPost = () =>{}

function PostForm() {
	return (
				<form>
					<input placeholder="write what you wish"/> <br />
					<button onClick={addPost} type='submit'>Send</button>
				</form>
	)
}

export default PostForm

