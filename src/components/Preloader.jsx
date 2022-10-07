import React from 'react'



let Preloader = (props) => {

	return (
		<div>
		{props.isLoading ? <div 
		style={{fontSize:'30px', fontWeight:'bold',opacity:'0.5',position:'absolute', top:'250px', left:'50%', right:'50%'}}
		 >Loading... </div>: null}
		</div>
	)
}

export default Preloader

