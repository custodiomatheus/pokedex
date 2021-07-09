import { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
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
			<ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
				<SidebarContext.Provider value={{ sidebar, setSidebar }}>
					<FavoritosContext.Provider value={{ favoritos, setFavoritos }}>

						<main>
							<Routes />
						</main>

						<Sidebar />
					</FavoritosContext.Provider>
				</SidebarContext.Provider>
			</ToastProvider>
		</>
	);
}

export default App;

// DAR RESPOSTA AO USUARIO QUE FAVORITOU O POKEMON
// ADICIONAR LOADING YOUTUBE
