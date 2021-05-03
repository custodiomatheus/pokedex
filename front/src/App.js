import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from './routes';

import styles from './App.module.css';

import { SidebarContext } from "./context/Sibedar";

function App() {

    const [sidebar, setSidebar] = useState({ is_open: false, data: null })

    return ( 
        <>
        <Header />

        <SidebarContext.Provider value = {{ sidebar, setSidebar }}>
        <main>
        <Routes />
        </main>

        <Sidebar />
        </SidebarContext.Provider>

        </>
    );
}

export default App;