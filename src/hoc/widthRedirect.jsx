import React from "react"
import {Navigate} from 'react-router-dom'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		isAutorisation:state.auth.isAutorisation
	}
}

export const WidthRedirect = (Component) => {
	class RedirectComponent extends React.Component{

		render() {

			if(this.props.isAutorisation === false) return <Navigate to='/Login' />
			return <Component {...this.props}/>
		}

	}

	let WidthRedirectComponent = connect(mapStateToProps) (RedirectComponent)


	return WidthRedirectComponent
}





