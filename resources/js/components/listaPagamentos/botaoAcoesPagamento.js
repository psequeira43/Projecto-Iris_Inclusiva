import axios from 'axios';
import React, { Component } from 'react';
import ViewPay from './ModalsPay/viewPay';
import UpdatePay from './ModalsPay/updatePay';
import DeletePay from './ModalsPay/deletePay';

class botaoAcoesPagamento extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentValorPagamento: null,
        }
    }

    // mostra individualmente detalhes dos pagamentos.

    getPagamentosDetalhes = (id) => {
        axios.post('/get/individual/pagamento/detalhes', {
            pagamentoId: id
        }).then((response) => {
            this.setState({
                currentValorPagamento: response.data.valor_pagamento
            })
            console.log(response.data);
        })
    }



    render() {
        return (
            <div className="btn-toolbar" role="group">
               
                <button type="button"
                    className="btn btn-info"
                    style={{marginRight: 0.5 + 'em'}}
                    data-bs-toggle="modal"
                    data-bs-target={'#viewPay'+this.props.eachRowId}
                    onClick={ () => { this.getPagamentosDetalhes(this.props.eachRowId) }}
                >
                    Ver
                </button>
                <ViewPay modalId={this.props.eachRowId} pagamentoData={ this.state }/>
                
                <button type="button"
                    className="btn btn-primary"
                    style={{marginRight: 0.5 + 'em'}}
                    data-bs-toggle="modal"
                    data-bs-target={'#updatePay' + this.props.eachRowId}
                    onClick={() => { this.getPagamentosDetalhes(this.props.eachRowId) }}
                >
                    Editar
                </button>
                <UpdatePay modalId={this.props.eachRowId} pagamentoData={ this.state }/>
                <button type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={'#deletePay' + this.props.eachRowId}
                    onClick={() => { this.getPagamentosDetalhes(this.props.eachRowId) }}
                >
                    Apagar
                </button>
                <DeletePay  modalId={this.props.eachRowId} pagamentoData={ this.state }/>
            </div>
        )
    }
}

export default botaoAcoesPagamento;