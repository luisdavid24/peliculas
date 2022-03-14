import './App.css';
import ListadoPeliculas from './views/ListadoPeliculas.js';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

import Blog from './views/Blog.js';
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/blog">
					<Blog/>
				</Route>
				<Route path="/">
					<ListadoPeliculas/>
				</Route>
				

			</Switch>
		</BrowserRouter>
	);
}

export default App;
