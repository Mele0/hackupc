import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Popup from "reactjs-popup";
import Grid from "@mui/material/Grid";
import CancelIcon from '@mui/icons-material/Cancel';
import { FaRegCopyright } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

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
	BarChart,
	Tooltip,
	Legend,
	Bar,
	AreaChart,
	Area
} from "recharts";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = (props) => {
	const [layouts, setLayouts] = useState(getFromLS(props.id) || "");
	const [money_text, set_money_text] = useState(null);
	const [expense_data, set_expense_data] = useState(null);
	const [loading_data, set_loading_data] = useState(true);
	const [gym_time, set_gym_time] = useState(null);
    const [study_time, set_study_time] = useState(null);
    const [study_time_d, set_study_time_d] = useState(null);

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
				axios
                .get("/gym?user=49271168Q")
                .then((response) => {
                    var value = response.data;
                    var text = value[0].hours;
                    set_gym_time(text);
                })
                .catch(function (err) {
                    console.log(err);
                });
            axios
                .get("/biblio?user=49271168Q")
                .then((response) => {
                    var value = response.data;
                    var text = value[0].hours;
                    set_study_time(text);
                })
                .catch(function (err) {
                    console.log(err);
                });
            axios
                .get("/studytime?user=49271168Q")
                .then((response) => {
                    var value = response.data;
                    value.map((item) => {
                        delete item.id;
                        item.name = item.day;
                        delete item.day;
                        item.uv = item.hours;
                        delete item.hours;
                    });
                    set_study_time_d(value);
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
		{ title: "Monthly Expenses", money: "14", h: 2 },
		{ title: "Weather", money: "14", h: 2 },
		{ title: "Summary", money: "14", h: 2 },
        { title: "Study time per day", money: "14", h: 2 },
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
				x: 1,
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
	const divStyle = {
		marginTop : 50,
		position : "absolute",
		bottom: 50,
		right: 50,
		borderRadius:80,
		fontWeight: 50,
		boxShadow: 'none',
		borderRadius:50,
		boxShadow: '2px 2px 2px #0a96e4',
	}
	const titulo_we = {
		marginTop: 30,
	}
	const weatherT = {
		height: 120,
		width: 120,
		position : "center",
		alignSelf: "center",
	}
	const estilo_txt = {
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: 'Arial',
	}
	return (
		<div className="pad">
			<Popup
				contentStyle={{ borderRadius: 20, width: 650, height: 380,alignSelf: "flex-end" }}
				trigger={
					<button className="buttonAdd" style = {divStyle}>
						<AddRoundedIcon />
						<div className="buttonAdd"> Widget </div>
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
						
							<button
								className="button"
								onClick={() => {
									close();
								}}
							>
								Ok
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
								isResizable: widget.title === 'Weather'?false:true,
							}}
						>
							<button
								className="deleteButton"
								onClick={() => handleDelete(widget)}
							>
								x
							</button>
							{widget.title == "Bar expenses" && 
								<ResponsiveContainer width="90%" height="80%">
									<AreaChart  data={expense_data}
										margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
										<defs>
											<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
											<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
											</linearGradient>
											<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
											<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
											</linearGradient>
										</defs>
										<XAxis dataKey="name" />
										<YAxis />
										<CartesianGrid strokeDasharray="3 3" />
										<Tooltip />
										<Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
										<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
									</AreaChart>
								</ResponsiveContainer>
							}
							{widget.title == "Study time per day" && 
								<ResponsiveContainer width="90%" height="80%">
									<BarChart data={study_time_d}
										margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="pv" fill="#8884d8" />
										<Bar dataKey="uv" fill="#82ca9d" />
									</BarChart>
								</ResponsiveContainer>
							}
							{widget.title == "Summary" && 
								<div className="summary">
									<table>
									<tr>
										<th>Balance</th>
										<th>Gym hours</th>
										<th>Study hour</th>
									</tr>
										<tr>
											<td>{money_text}</td>
											<td>{gym_time}</td>
											<td>{study_time}</td>
										</tr>
										
									
									</table>
							  	</div>
							}


							<div className="title" style={titulo_we}>{widget.title}</div>
							{widget.title === 'Weather' && 	
							<><TiWeatherPartlySunny style={weatherT}></TiWeatherPartlySunny><div style={estilo_txt}>23ºC</div></>
							}
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