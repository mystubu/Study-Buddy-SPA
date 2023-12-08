import React from 'react';
import './styles/App.css';
import Chat from './views/chat/Chat';
import Navigation from './views/navigation/Navigation';
import Toolbar from './views/toolbar/Toolbar';
//import Login from './views/login/Login';

function App() {
    return (
        <div className="App">
            <body className="bg-slate-100">
                <div className="grid grid-cols-12 gap-4 h-screen">
                    <Navigation/>
                    <Chat />
                    <Toolbar />
                </div>
            </body>
        </div>
    );
}

export default App;
