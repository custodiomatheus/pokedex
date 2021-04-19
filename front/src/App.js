import { useState } from 'react';
import styles from './App.module.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';

function App() {

	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<>
			<Header />

			<main>
				<Routes />
			</main>

			{openSidebar ? <Sidebar props="" /> : null}
		</>
	);
}

export default App;