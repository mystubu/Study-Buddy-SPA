import React from 'react'
import Test from './components/test/test'

import './index.css';

function App() {
  return (
    <div className="container mx-auto">
        <div className="columns-2">
            <h1 className="text-3xl font-bold underline text-blue-600">Header</h1>
            <h1 className="text-3xl font-bold underline">Header</h1>
        </div>

      <Test></Test>
    </div>
  );
}

export default App;
