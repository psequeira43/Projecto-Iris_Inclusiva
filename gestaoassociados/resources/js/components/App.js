import React from 'react';
import ReactDOM from 'react-dom';
import Lista from './listaAssociados/lista'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components goes here */}
                <Lista/>
            </div>
        </div>
    );
}

export default App;