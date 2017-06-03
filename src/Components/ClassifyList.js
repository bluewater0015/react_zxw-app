
import React,{ Component } from "react";
import { render } from "react-dom";
import Ajax from "../service/baseService";
export default class classify extends Component{
	constructor(){
		super();
		this.state = {
			goodsList: []
		}
	}
	componentDidMount(){
		var _this = this;
		Ajax({
			"url": "http://datainfo.duapp.com/shopdata/getGoods.php",
			"dataType": "jsonp",
			"method": "get",
			"success" : function(data){
				_this.setState({
					goodsList: data
				})
			}
		})
	}
	render(){
		return (
			<ul className="goods_list">
				{
					this.state.goodsList.map((item,index)=>{
						//console.log(item);
						return (
							<li className="goods_li text_center" key={index}>{ item.className }</li>
						)
					})
				}
			</ul>
		)
	}
}