import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/NavBar/NavBar';
import SpacesDashboard from './components/SpacesDashboard/SpacesDashboard';

function App() {

    return (
        <Provider store={store}>
            <NavBar></NavBar>
        </Provider>
    );
}

export default App;