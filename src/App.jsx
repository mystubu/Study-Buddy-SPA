import React from 'react';
import './styles/App.css';
// import Chat from './views/chat/Chat';
import Navigation from './views/navigation/Navigation';
import Toolbar from './views/toolbar/Toolbar';
import Login from './views/login/Login';

function App() {
    return (
        <div className="App bg-background">
            <div className="grid grid-cols-12 h-screen text-primary">
                <Navigation/>
                <Login />
                <Toolbar />
            </div>
        </div>
    );
}

export default App;
