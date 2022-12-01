import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Login from './components/Login';

function App() {
    return (
        <div className="bg-black">
            <Navbar />
            <Header />
            <Login />
        </div>
    );
}

export default App;
