import React from 'react';
import Lista from './listaAssociados/lista'
import ListaPagamento from './listaPagamentos/listaPagamento';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components goes here */}
                <Lista />
                {/* <ListaPagamento /> */}
            </div>
        </div>
    );
}

export default App;