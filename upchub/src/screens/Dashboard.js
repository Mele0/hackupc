import { Link } from "react-router-dom";
import ReactGridLayout from "../ReactLayout";

import Sidebar from "../Sidebar";

function Dashboard() {
	return (
		<div>
			<h1>This is the dashboard page</h1>
			<Sidebar />
			<ReactGridLayout key={1} id={1} />
		</div>
	);
}

export default Dashboard;
