import "../css/home.css";
import "../css/reset.css";
import "../css/classify.css";
import React,{ Component } from "react";
import { render } from "react-dom";
import Header from "./Header"; 
import Search from "./Search";
import ClassifyList from "./ClassifyList";
export default class Classify extends Component{
	render(){
		return(
			<div className="classify">
				<Header />
				<div className="classify_content">
					<Search />
					<ClassifyList />
				</div>
			</div>
		)
	}
}