import React, { Component } from "react";
import "../App.css";
import ReactGridLayout from "../ReactLayout";

export class Time extends Component {
	render() {
		return (
			<div>
				<ReactGridLayout key={1} id={1} />
			</div>
		);
	}
}

export default Time;