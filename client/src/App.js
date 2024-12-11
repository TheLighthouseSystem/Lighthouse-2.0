// client/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
        <div>
            <h1 class="title is-1">Lighthouse</h1>
            <h2 class="subtitle">Journal Together</h2>
            <p>{message}</p>
        </div>
        </>
    );
}

export default App;
