import React from 'react';
import './styles/App.css';
import Chat from './views/chat/Chat';
import Navigation from './views/navigation/Navigation';
import Toolbar from './views/toolbar/Toolbar';

function App() {
    return (
        <div className="App bg-background">
            <div className="grid grid-cols-12 h-screen text-primary">
                <Navigation/>
                <Chat />
                <Toolbar />
            </div>
        </div>
    );
}

export default App;
