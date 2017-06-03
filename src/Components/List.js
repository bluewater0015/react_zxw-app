
import React,{ Component } from "react";
import { render } from "react-dom";
import Ajax from "../service/baseService";
export default class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			bannerList:[],
			listData: []
		}
	}
	
	componentDidMount(){
		var _this = this;
		Ajax({
			"url":"http://datainfo.duapp.com/shopdata/getGoods.php",
			"method": "get",
			"dataType": "jsonp",
			"success": function(data){
				//console.log("this",_this);
				_this.setState({
					bannerList: data,
					listData: data
				})
				let ul_width = $(".bannner_container").width();

				console.log(ul_width);
				let length = _this.state.bannerList.length;
				let btn_list = $(".btn_list").width();
				//console.log(length);
				let left = (ul_width - btn_list) / 2;
				//console.log(left); //107
				$(".btn_list").css("left",left)
				$(".bannner_container").css("width",ul_width*length);
				let i = 0;
				let timer = null;
				timer = setInterval(()=>{
					if( i > length-1 ){
						i = 0;
					}
					$(".bannner_container").animate({left:-i * ul_width+"px"});
					if( i==0 ){
						$(".btn_list li").eq(0).removeClass("active").addClass("active").siblings().removeClass("active");
					}
					$(".btn_list li").eq(i).removeClass("active").addClass("active").siblings().removeClass("active");
					i++;
				},1000)
			}
		})
	}
	render(){
		//console.log("this===",this.state.bannerList.length);
		return(
			<div className="list">
				<div className="list_banner">
					<ul className="bannner_container">
						{	
							this.state.bannerList.map((item,index)=>{
								//console.log(item);
								return(
									<li key={index} className="banner_li">
										<img className="banner_img" src = {item.goodsListImg} />
									</li>
								)
							})
						}
					</ul>
					<ul className="btn_list text_center">
						{
							this.state.bannerList.map((item,index)=>{
								//console.log(item);
								return(
									<li key={index} className="btn_li  center">
										
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className="list_content">
					{
						this.state.listData.map((item,index)=>{
							//console.log(item);
							return(
								<dl key={index} className="list_data">
									<dt className="list_dt">
										<img className="list_img" src = {item.goodsListImg} />
									</dt>
									<dd className="list_dd">
										<p className="list_text">{item.goodsName}</p>
										<p className="list_text">￥{item.price}</p>
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





