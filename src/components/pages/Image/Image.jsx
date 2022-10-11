import React from "react";
import s from './Image.module.css'


const Image = (props) => {


		return (
			<div className={s.container}>
				Image Page
			</div>
		)
	
}



export default Image

export const MemoizedImage = React.memo(Image)