import React from "react";
import s from './Main.module.css'

function Main() {
	return (
		<main className={s.main}>
			<div>
				<img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
			</div>
			<div className={s.ava__block}>
				<img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
				Ava, explain
			</div>
			<div>
				<h2>My Post</h2>
				<form>
					<input /> <br />
					<button type='submit'>Send</button>
				</form>
			</div>
		</main>
	)
}

export default Main

