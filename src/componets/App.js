// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer welcomeMessage="¡Bienvenido a TechShop - Tu Tienda de Tecnología!" />
        </div>
    );
};

export default App;
