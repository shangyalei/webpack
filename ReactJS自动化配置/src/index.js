import React from 'react';
import ReactDom from "react-dom";



//装所有组件的容器

//接收组件项
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


class Index extends React.Component{
	render(){
		return (
				<div>
					<Header></Header>
					<Footer></Footer>
				</div>
			)
	}
}

ReactDom.render(<Index/>,document.getElementById("app"));