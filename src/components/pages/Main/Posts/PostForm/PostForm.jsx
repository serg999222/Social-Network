import React from "react";
import s from "./PostForm.module.css"
import { useForm } from 'react-hook-form'





class PostForm extends React.Component {



	addPostt = (text) => {
		this.props.addPostt(text)

	}

	render() {

		return (
			<FormForPostForm addPostt={this.addPostt} />
		)
	}
}



export default PostForm

const FormForPostForm = (props) => {
	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
	const onSubmit = data => {

		let text = data.postText
		props.addPostt(text)
		reset()

	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('postText')} /> <br />
			<button type='submit'>Add Post</button>
		</form>
	)
}

