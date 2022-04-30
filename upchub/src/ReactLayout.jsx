import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Popup from "reactjs-popup";
import Grid from "@mui/material/Grid";
import axios from "axios";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "reactjs-popup/dist/index.css";
import "./App.css";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
} from "recharts";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = (props) => {
	const [layouts, setLayouts] = useState(getFromLS(props.id) || "");
	const [money_text, set_money_text] = useState(null);
	const [expense_data, set_expense_data] = useState(null);
	const [loading_data, set_loading_data] = useState(true);

	useEffect(() => {
		if (loading_data) {
			axios
				.get("/money?user=49271168Q")
				.then((response) => {
					var value = response.data;
					console.log(value);
					var text = value[0].balance;
					set_money_text(text);
					console.log(text);
				})
				.catch(function (err) {
					console.log(err);
				});
			axios
				.get("/money/expenses?user=49271168Q")
				.then((response) => {
					var value = response.data;

					value.map((item) => {
						delete item.id;
						item.name = item.time;
						delete item.time;
						item.uv = item.input;
						delete item.input;
					});
					set_expense_data(value);
				})
				.catch(function (err) {
					console.log(err);
				});
			set_loading_data(false);
		}
	});
	const [availableWidgets, setAvailableWidgets] = useState([
		{ title: "Gym Time", money: 14, h: 4 },
		{ title: "Bar Time", money: "14", h: 2 },
		{ title: "Study Time", money: "14", h: 2 },
		{ title: "Bar expenses", money: "14", h: 2 },
		{ title: "money2", money: "14", h: 2 },
		{ title: "money3", money: "14", h: 2 },
	]);
	const [usedWidgets, setUsedWidgets] = useState([]);

	const handleModify = (layouts, layout) => {
		const tempArray = usedWidgets;
		setLayouts(layout);
		layouts?.map((position) => {
			tempArray[Number(position.i)].x = position.x;
			tempArray[Number(position.i)].y = position.y;
			tempArray[Number(position.i)].width = position.w;
			tempArray[Number(position.i)].height = position.h;
		});
		setUsedWidgets(tempArray);
		saveToLS(props.id, layout);
	};

	const handleAdd = (widgetToBeAdded) => {
		const tempArray = availableWidgets.slice();
		const index = tempArray.indexOf(
			tempArray.find((widget) => widget.title === widgetToBeAdded.title)
		);
		tempArray.splice(index, 1);
		setAvailableWidgets(tempArray);
		setUsedWidgets([
			...usedWidgets,
			{
				title: widgetToBeAdded.title,
				money: widgetToBeAdded.money,
				x: 0,
				y: 0,
				w: 2,
				h: 2,
			},
		]);
	};

	const handleDelete = (widgetToBeDeleted) => {
		console.log(widgetToBeDeleted);
		const tempArray = usedWidgets.slice();
		const index = tempArray.indexOf(
			tempArray.find((widget) => widget.title === widgetToBeDeleted.title)
		);
		tempArray.splice(index, 1);
		setUsedWidgets(tempArray);
		setAvailableWidgets([
			...availableWidgets,
			{ title: widgetToBeDeleted.title, money: widgetToBeDeleted.money, h: 2 },
		]);
	};

	return (
		<div className="pad">
			<Popup
				contentStyle={{ borderRadius: 20, width: 600, alignSelf: "flex-end" }}
				trigger={
					<button className="buttonAdd">
						<AddRoundedIcon />
						<div className="buttonAdd"> Add Widget </div>
					</button>
				}
				modal
				nested
			>
				{(close) => (
					<div className="modal">
						<div className="header"> Available Widgets </div>
						<div className="content">
							<Grid
								container
								spacing={{ xs: 2, md: 3 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
							>
								{availableWidgets.map((widget, index) => (
									<Grid
										item
										xs={2}
										sm={4}
										md={4}
										key={index}
										onClick={() => handleAdd(widget)}
									>
										<div className="item">{widget.title}</div>
									</Grid>
								))}
							</Grid>
						</div>
						<div className="actions">
							<Popup
								trigger={<button className="button"> Add Widget </button>}
								position="top center"
								nested
							>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Beatae magni omnis delectus nemo, maxime molestiae dolorem
									numquam mollitia, voluptate ea, accusamus excepturi deleniti
									ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
								</span>
							</Popup>
							<button
								className="button"
								onClick={() => {
									close();
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				)}
			</Popup>
			<ResponsiveReactGridLayout
				onLayoutChange={handleModify}
				verticalCompact={true}
				layout={layouts}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				preventCollision={false}
				cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
				autoSize={true}
				margin={{
					lg: [20, 20],
					md: [20, 20],
					sm: [20, 20],
					xs: [20, 20],
					xxs: [20, 20],
				}}
			>
				{usedWidgets?.map((widget, index) => {
					return (
						<div
							className="reactGridItem"
							key={index}
							data-grid={{
								x: widget?.x,
								y: widget?.y,
								w: widget?.w,
								h: widget?.h,
								i: widget.i,
								minW: 1,
								maxW: Infinity,
								minH: 1,
								maxH: Infinity,
								isDraggable: true,
								isResizable: true,
							}}
						>
							<button
								className="deleteButton"
								onClick={() => handleDelete(widget)}
							>
								x
							</button>
							<ResponsiveContainer width="90%" height="80%">
								<LineChart
									data={expense_data}
									margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
								>
									<Line type="monotone" dataKey="uv" stroke="#8884d8" />
									<CartesianGrid stroke="#ccc" />
									<XAxis dataKey="name" />
									<YAxis />
								</LineChart>
							</ResponsiveContainer>
							<div className="title">{widget.title}</div>
						</div>
					);
				})}
			</ResponsiveReactGridLayout>
		</div>
	);
};

function getFromLS(key) {
	try {
		return JSON.parse(localStorage.getItem("rgl-8-" + key)) || {};
	} catch (e) {
		return undefined;
	}
}

function saveToLS(key, value) {
	localStorage.setItem("rgl-8-" + key, JSON.stringify(value));
}

export default ReactGridLayout;
