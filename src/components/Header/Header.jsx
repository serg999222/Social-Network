import React from "react"
import s from "./Header.module.css"

function Header() {
	return (
		<header className={s.header}>
			<div className={s.logo}>
				<img alt="cover" src='https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-circuit-logo-template-vector-png-image_704226.jpg' />
				<h1 className={s.logo__text}>SOCIAL NETVORK</h1>
			</div>
			<input placeholder="serch Frends" className={s.input} type='text' />
		</header>
	)
}

export default Header