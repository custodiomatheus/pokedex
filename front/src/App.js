import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from './routes';

import styles from './App.module.css';

import { SidebarContext } from "./context/Sibedar";
import { FavoritosContext } from "./context/Favoritos";

function App() {

	const [sidebar, setSidebar] = useState({ is_open: false, data: null })
	const [favoritos, setFavoritos] = useState([])

	return (
		<>
			<Header />

			<SidebarContext.Provider value={{ sidebar, setSidebar }}>
				<FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
					
					<main>
						<Routes />
					</main>

					<Sidebar />
				</FavoritosContext.Provider>
			</SidebarContext.Provider>

		</>
	);
}

export default App;