import React, { Component } from "react";
import "../App.css";
import ReactGridLayout from "../ReactLayout";

export class Money extends Component {
	render() {
		return (
			<div>
				<ReactGridLayout key={3} id={3} />
			</div>
		);
	}
}

export default Money;
