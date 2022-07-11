import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            associadoNome: null,
            associadoNmrAssociado: null,
            associadoEmail: null,
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

    // Criar o email de associado

    inputassociadoEmail = (event) => {
        this.setState({
            associadoEmail: event.target.value,
        });
    }

    // Armazenamento de Associados

    storeAssociadoData = () => {
        axios.post('/store/associado/data', {
            associadoNome: this.state.associadoNome,
            associadoNmrAssociado: this.state.associadoNmrAssociado,
            associadoEmail: this.state.associadoEmail,
        }).then(() => {
            toast.success("Associado Criado com Sucesso!");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        const mystyle = {
            marginTop:"30px",
            fontSize:20,
      };
        return (
            <>
            <div className='row text-right mb-2 pb-3 col-3 offset-md-5'>
                    <label style={mystyle}><strong>Associados</strong></label>
                </div>

                <div className='row text-right mb-3 pb-3'>
                    <button style={{marginTop:"20px"}} className='btn btn-success text-right col-2 offset-md-7' 
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Criar novo Associado
                    </button>
                </div>
                <div className="modal fade" id="modalCreate"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Criar novo Associado</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className='form'> 
                                <label>Nome:</label>
                                    <div className="form-group">
                                        <input type="text"
                                            id="associadoNome"                                           
                                            className='form-control mb-3'
                                            placeholder="Nome"
                                            onChange={this.inputassociadoNome}
                                        />
                                    </div>  
                                    <label>Email:</label>
                                    <div className="form-group">
                                        <input type="text"
                                            id="associadoEmail"                                           
                                            className='form-control mb-3'
                                            placeholder="Email"
                                            onChange={this.inputassociadoEmail}
                                        />
                                    </div>  
                                    <label>Número de Associado:</label>
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
                                    value="Guardar Associado"
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

export default CreateModal;