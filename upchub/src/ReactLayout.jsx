import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Popup from "reactjs-popup";
import Grid from "@mui/material/Grid";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "reactjs-popup/dist/index.css";
import "./App.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ReactGridLayout = () => {
	const [layouts, setLayouts] = useState(null);
	const [availableWidgets, setAvailableWidgets] = useState([
		{ title: "Gym Time", h: 2 },
		{ title: "Bar Time", h: 2 },
		{ title: "Study Time", h: 2 },
		{ title: "Bar expenses", h: 2 },
		{ title: "money2", h: 2 },
		{ title: "money3", h: 2 },
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
			{ title: widgetToBeAdded.title, x: 0, y: 0, w: 2, h: 2 },
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
			{ title: widgetToBeDeleted.title, h: 2 },
		]);
	};

	return (
		<div>
			<Popup
				contentStyle={{ borderRadius: 20, width: 600 }}
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
									console.log("modal closed ");
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
							<div>{widget.title}</div>
						</div>
					);
				})}
			</ResponsiveReactGridLayout>
		</div>
	);
};

export default ReactGridLayout;