import React from "react";
import Chat from '../views/chat/Chat';
import Navigation from '../views/navigation/Navigation';
import Toolbar from '../views/toolbar/Toolbar';

function StudyBuddy() {
    return (
        <div>
            <Navigation />
            <Chat />
            <Toolbar />
        </div>
    );
}

export default StudyBuddy;