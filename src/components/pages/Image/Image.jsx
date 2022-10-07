import React from "react";
import s from './Image.module.css'


const Image = (props) => {
	let po = props
	console.log('render')
	console.log(po)
	
		return (
			<div className={s.container}>
				Image Page
			</div>
		)
	
}



export default Image

export const MemoizedImage = React.memo(Image)