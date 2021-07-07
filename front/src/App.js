import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

			<ToastContainer
				// toastClassName={({ type }) => styles[!!type ? `toast-${type}` : `toast-default`]}
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

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

// DAR RESPOSTA AO USUARIO QUE FAVORITOU O POKEMON
// ADICIONAR LOADING YOUTUBE
