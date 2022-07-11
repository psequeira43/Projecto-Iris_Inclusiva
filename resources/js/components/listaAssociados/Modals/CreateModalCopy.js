import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class CreateModalCopy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            associadoNome: null,
            associadoNmrAssociado: null,
        }
    }

    // Criar o nome do associado

    inputassociadoNome = (event) => {
        this.setState({
            associadoNome: event.target.value,
        });
    }

    // Criar o numero de associado

    inputassociadoNmrAssociado = (event) => {
        this.setState({
            associadoNmrAssociado: event.target.value,
        });
    }

    // Armazenamento de Associados

    storeAssociadoData = () => {
        axios.post('/store/associado/data', {
            associadoNome: this.state.associadoNome,
            associadoNmrAssociado: this.state.associadoNmrAssociado,
        }).then(() => {
            toast.success("Associado Criado com Sucesso!");

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
                        Lista de Pagamentos
                    </button>
                </div>
                <div className="modal fade" id="modalCreate"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalhes do Associado</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            id="associadoNome"
                                            className='form-control mb-3'
                                            placeholder="Nome"
                                            onChange={this.inputassociadoNome}
                                        />
                                    </div>  

                                    <div className="form-group">
                                        <input type="text"
                                            id="associadoNmrAssociado"
                                            className='form-control mb-3'
                                            placeholder="Número de Associado"
                                            onChange={this.inputassociadoNmrAssociado}
                                        />
                                    </div>  
                                </form> 
                        </div>
                            <div className="modal-footer">
                            <input type="button"
                                    value="Save"
                                    className='btn btn-info'
                                onClick={this.storeAssociadoData}
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

export default CreateModalCopy;