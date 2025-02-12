import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Top from "./pages/top/Top";
import Setting from "./pages/setting/Setting";
import Sidebar from "./pages/components/Sidebar";
import "./App.css";

function App() {
	return (
		<>
			<div className="bg-stone-100">
				<Router>
					<div className="flex  flex-row ">
						<div className="w-1/4">
							<Sidebar />
						</div>
						<div className="w-3/4">
							<Routes>
								<Route path="/" element={<Top />} />
								<Route path="/setting" element={<Setting />} />
							</Routes>
						</div>
					</div>
				</Router>
			</div>
		</>
	);
}
export default App;
