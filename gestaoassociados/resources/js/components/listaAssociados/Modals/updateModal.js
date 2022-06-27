import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            associadoNome: null,
            associadoNmrAssociado: null,
        }
    }

    // Updating associado name state.

    inputassociadoNome = (event) => {
        this.setState({
            associadoNome: event.target.value,
        });
    }

    // Update associado number state.

    inputassociadoNmrAssociado = (event) => {
        this.setState({
            associadoNmrAssociado: event.target.value,
        });
    }


    static getDerivedStateFromProps(props, current_state) {
        let associadoUpdate = {
            associadoNome: null,
            associadoNmrAssociado: null,
        }



        // Updating data from input.

        if (current_state.associadoNome && (current_state.associadoNome !== props.associadoData.currentNomeAssociado)) {
            return null;
        }

        if (current_state.associadoNmrAssociado && (current_state.associadoNmrAssociado !== props.associadoData.currentNumeroAssociado)) {
            return null;
        }



        // Updating data from props Below.

        if (current_state.associadoNome !== props.associadoData.currentNomeAssociado ||
            current_state.associadoNome === props.associadoData.currentNomeAssociado) {
            associadoUpdate.associadoNome = props.associadoData.currentNomeAssociado;
        }

        if (current_state.associadoNmrAssociado !== props.associadoData.currentNumeroAssociado ||
            current_state.associadoNmrAssociado === props.associadoData.currentNumeroAssociado) {
            associadoUpdate.associadoNmrAssociado = props.associadoData.currentNumeroAssociado;
        }

        return associadoUpdate;

    }

    // Updating associado data.
    updateassociadoData = () => {
        axios.post('/update/associado/data', {
            associadoId: this.props.modalId,
            associadoNome: this.state.associadoNome,
            associadoNmrAssociado: this.state.associadoNmrAssociado,
        }).then(() => {
            toast.success("Associado editado com sucesso!");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalhes Associado</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="associadoNome"
                                        className='form-control mb-3'
                                        value={this.state.associadoNome ?? ""}
                                        onChange={this.inputassociadoNome}
                                    />
                                </div>  

                                <div className="form-group">
                                    <input type="text"
                                        id="associadoNmrAssociado"
                                        className='form-control mb-3'
                                        value={this.state.associadoNmrAssociado ?? ""}
                                        onChange={this.inputassociadoNmrAssociado}
                                    />
                                </div>  
                            </form> 
                    </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className="btn btn-info"
                                value="Editar"
                                onClick={this.updateassociadoData}
                            />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;