import { Routes, Route } from "react-router-dom";
import Money from "./screens/Money";
import Time from "./screens/Time";
import Dashboard from "./screens/Dashboard";
import Header from "./head";
import Headerr from "./Header";

function App() {
	return (
		<div className="App">
			<Headerr />
			<Header />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="money" element={<Money />} />
				<Route path="time" element={<Time />} />
			</Routes>
		</div>
	);
}

export default App;
