import React from 'react';

//这个js文件就是一个组件
//继承React类 并通过export default
import './index.css';

export default class Header extends React.Component{
	render(){
		return(
			<div id='header'>
				<h1>我是头部</h1>
				<p>我是p标签</p>
				<a href="javascript:;">我是a标签</a>
			</div>
			)
	}
}





