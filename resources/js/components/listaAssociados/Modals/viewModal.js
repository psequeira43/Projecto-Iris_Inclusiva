import React, { Component } from 'react';


class ViewModal extends Component {

    constructor(props) {
        super(props);
    }

    formatDateTime(dateTimeStr) {
        const d = new Date(dateTimeStr);
        var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        return datestring;
    }

    render() {
        return (
            <div className="modal fade" id={"viewModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalhes de <strong>{this.props.associadoData.currentNomeAssociado}</strong></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Nome: <strong text-color='#000'>{this.props.associadoData.currentNomeAssociado} </strong>
                            <hr />
                            Número de Associado: <strong>{this.props.associadoData.currentNumeroAssociado} </strong>
                            <hr />
                            Email: <strong>{this.props.associadoData.currentEmailAssociado} </strong>
                            <hr />
                            <p>Lista de Pagamentos:</p>
                            <ul>
                                {
                                    this.props.associadoData.currentAssociatedPayments.map((associatedPayment, index) => <li key={`associatedPayment${index}`}>Valor: <strong>{associatedPayment.valor_pagamento}</strong> <a>€ </a> | Data: <strong>{this.formatDateTime(associatedPayment.created_at)}</strong></li>)
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;