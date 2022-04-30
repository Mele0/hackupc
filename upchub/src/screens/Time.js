import React, { Component } from "react";
import "../App.css";
import ReactGridLayout from "../ReactLayout";

export class Time extends Component {
	render() {
		return (
			<div>
				<ReactGridLayout key={2} id={2} />
			</div>
		);
	}
}

export default Time;
