
import React,{ Component } from "react";
import { render } from "react-dom";
import Ajax from "../service/baseService";

export default class ShopCart extends Component{
	constructor(props){
		super(props);
		this.state = {
			shopData: []
		}
	}
	componentDidMount(){
		var _this = this;
		Ajax({
			"url": "http://datainfo.duapp.com/shopdata/getGoods.php",
			"method": "get",
			"dataType": "jsonp",
			"success" : function(data){
				_this.setState({
					shopData: data
				})
			}
		})
	}
	render(){
		return(
			<div className="shop_cart">
				<div className="shop_num center">
					<div className="pay_total">
						<div className="shop_color pay_num center">商品数量:1</div>
						<div className="shop_color pay_sum center">应付总额(不含运费):￥199</div>
					</div>
				</div>
				<div className="shop_list">
					{
						this.state.shopData.map((item,index)=>{
							//console.log(item);
							return(
								<dl key={index} className="shop_dl">
									<dt className="shop_dt center">
										<img className="shop_img" src={item.goodsListImg} />
									</dt>
									<dd className="shop_dd">
										<div className="pp_style">{item.goodsName}</div>
										<div  className="p_style">
											<span>单价：{item.price}</span>
										</div>
										<div  className="p_style add_flex center">
											<div className="btn_box">
												<div className="num_num center">数量：</div>
												<div className="shop_btn1 center">-</div>
												<div className="goodsID center">{item.goodsID}</div>
												<div  className="shop_btn2 center">+</div>
												</div>
										</div>
									</dd>
								</dl>
							)
						})
					}
				</div>
			</div>
		)
	}

}