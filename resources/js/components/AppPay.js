import React from 'react';
import ListaPagamento from './listaPagamentos/listaPagamento'


function AppPay() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components goes here */}
                <ListaPagamento />
            </div>
        </div>
    );
}

export default AppPay;