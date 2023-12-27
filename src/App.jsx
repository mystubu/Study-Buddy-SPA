import React from 'react';
import './styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudyBuddy from './pages/studybuddy';
import Register
 from './pages/register';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <StudyBuddy />}/>
                <Route path="/register" element={ <Register />  }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
