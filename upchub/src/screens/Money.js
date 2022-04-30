import React, { Component } from "react";
import "../App.css";
import ReactGridLayout from "../ReactLayout";

export class Money extends Component {
	render() {
		return (
			<div>
				<div>Hola</div>
				<ReactGridLayout key={2} id={2} />
			</div>
		);
	}
}

export default Money;
