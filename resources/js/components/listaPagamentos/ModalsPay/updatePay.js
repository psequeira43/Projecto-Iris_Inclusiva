import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdatePay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pagamentoValor: null,
        }
    }

    // modificar o valor do pagamento.

    inputpagamentoValor = (event) => {
        this.setState({
            pagamentoValor: event.target.value,
        });
    }


    static getDerivedStateFromProps(props, current_state) {
        let pagamentoUpdate = {
            pagamentoValor: null,
        }

        // Updating data from input.

        if (current_state.pagamentoValor && (current_state.pagamentoValor !== props.pagamentoData.currentpagamentoValor)) {
            return null;
        }


        // Updating data from props Below.

        
        if (current_state.pagamentoValor !== props.pagamentoData.currentValorPagamento || 
            current_state.pagamentoValor === props.pagamentoData.currentValorPagamento) {
            pagamentoUpdate.pagamentoValor = props.pagamentoData.currentValorPagamento;
        }

        return pagamentoUpdate;

    }

  
    updatePagamentoData = () => {
        axios.post('/update/pagamento/data', {
            pagamentoId: this.props.modalId,
            pagamentoValor: this.state.pagamentoValor,
        }).then(() => {
            toast.success("Pagamento editado com sucesso!");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"updatePay"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Editar valor do Pagamento</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            <form className='form'>
                                <label>Valor do Pagamento:</label>
                                <div className="form-group">
                                    <input type="text"
                                        id="pagamentoValor"
                                        className='form-control mb-3'
                                        value={this.state.pagamentoValor ?? ""}
                                        onChange={this.inputpagamentoValor}
                                    />
                                </div>  
 
                            </form> 
                    </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className="btn btn-info"
                                value="Editar"
                                onClick={this.updatePagamentoData}
                            />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdatePay;