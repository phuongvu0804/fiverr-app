import React, { Suspense } from 'react';

// Route's config
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
    return (
        <Suspense fallback="<p>Loading</p>">
            <Router>
                <Routes />
            </Router>
        </Suspense>
    );
}

export default App;
