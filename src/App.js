import React from 'react';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => (
    <div>
        <h1>Random GIF Application</h1>

        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
)

export default App;