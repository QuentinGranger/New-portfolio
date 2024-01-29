import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './shared/header';
import Footer from './shared/footer';
import './App.css'; // Votre fichier CSS pour App

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Footer />
                {/* Ici, vous pouvez placer vos autres routes et composants */}
            </div>
        </Router>
    );
}

export default App;
