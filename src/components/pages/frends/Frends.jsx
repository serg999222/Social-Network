import axios from "axios";
import React from "react";
import Preloader from "../../Preloader";
import s from './Frends.module.css'




const Frends = (props) => {


	
	return (
		
		<div className={s.container}>
			
			<div className={s.sercherContainer}>
				<Preloader isLoading={props.isLoading}/>
			
				<span>
					<img onClick={() => {props.onPrevPage(props.pageNum)}} className={s.prevArrow} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp78WMEWYhyjeBYriIO2TD9KVX8FYXWunfg&usqp=CAU" alt="cover" />
				
					<span>...{props.pageNum}...</span>
					<img onClick={() =>{ props.onNextPage(props.pageNum)}} className={s.nextArrow} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp78WMEWYhyjeBYriIO2TD9KVX8FYXWunfg&usqp=CAU" alt="cover" />
					
				</span>
				<input placeholder="serch Frends" className={s.input} type='text' />
			</div>
			<div className={s.listsFlexContainer} >
				<ul className={s.frends}>
					 {props.frendsListt}<li></li>
				</ul>
				<ul className={s.users}>
					{props.userListt}<li>{props.world}</li>
				</ul>
			</div>
			Frends Page
		</div>
	)
	
}
	
	
		

	




export default Frends

