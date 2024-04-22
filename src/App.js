import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Contacts from "./MyComponents/Contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<Router basename="/todo-list">
			<Header title="My Todo List" searchBar={false} />
			<div style={{ minHeight: "78.8vh" }}>
				<Routes>
					<Route path="/" element={<Todos />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}
