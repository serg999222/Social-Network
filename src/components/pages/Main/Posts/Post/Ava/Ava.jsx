import React from "react";
import s from "./Ava.module.css"



function Ava(props) {
	return (
	
		<img className={s.avaUsers} alt="cover" src={props.avaUser} />

	)
}

export default Ava

