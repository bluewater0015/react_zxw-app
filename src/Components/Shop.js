import "../css/shop.css";
import React,{ Component } from "react";
import { render } from "react-dom";
import ShopCart from "./ShopCart";
export default class Shop extends Component{
	render(){
		return(
			<div className="shop">
				<div className="header center">
					购物车
				</div>
				<ShopCart />
			</div>
		)
	}
}