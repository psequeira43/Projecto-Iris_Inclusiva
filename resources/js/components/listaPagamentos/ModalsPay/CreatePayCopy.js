import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class CreatePayCopy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pagamentoValor: null,
        }
    }

    // Inserir valor do pagamento

    inputpagamentoValor = (event) => {
        this.setState({
            pagamentoValor: event.target.value,
        });
    }
    

    // Armazenamento de Pagamentos

    storePagamentoData = () => {
        axios.post('/store/pagamento/data', {
            pagamentoValor: this.state.pagamentoValor,
        }).then(() => {
            toast.success("Pagamento Criado com Sucesso!");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <>
                <div className='row text-left mb-3 pb-3'>
                    <button className='btn btn-info col-3 offset-md-2'
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Lista de Associados
                    </button>
                </div>
                <div className="modal fade" id="CreatePay"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalhes do pagamento</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            id="pagamentoValor"
                                            className='form-control mb-3'
                                            placeholder="Valor do pagamento"
                                            onChange={this.inputpagamentoValor}
                                        />
                                    </div>  

                                </form> 
                        </div>
                            <div className="modal-footer">
                            <input type="button"
                                    value="Save"
                                    className='btn btn-info'
                                onClick={this.storePagamentoData}
                                        />

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default CreatePayCopy;