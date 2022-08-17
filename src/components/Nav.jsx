import React from 'react'
import s from './Nav.module.css'

function Nav(){
	return <nav className={s.nav}>
	<ul className={s.menu__list}>
	  <li className={s.menu__item}>Main</li>
	  <li className={s.menu__item}>Image</li>
	  <li className={s.menu__item}>Frends</li>
	  <li className={s.menu__item}>Groups</li>
	  <li className={s.menu__item}>Saved</li>
	</ul>
 </nav>
 }

export default Nav