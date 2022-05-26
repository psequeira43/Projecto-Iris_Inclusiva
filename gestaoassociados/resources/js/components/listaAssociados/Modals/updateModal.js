import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            associadoNome: null,
            associadoassociadoNmrAssociado: null,
        }
    }

    // modificar o nome do associado.

    inputassociadoNome = (event) => {
        this.setState({
            associadoNome: event.target.value,
        });
    }

    // modificar o nmr do associado.

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

        if (current_state.associadoNome && (current_state.associadoNome !== props.associadoData.currentassociadoNome)) {
            return null;
        }

        if (current_state.associadoNmrAssociado && (current_state.associadoNmrAssociado !== props.associadoData.currentassociadoNmrAssociado)) {
            return null;
        }



        // Updating data from props Below.

        if (current_state.associadoNome !== props.associadoData.currentassociadoNome ||
            current_state.associadoNome === props.associadoData.currentassociadoNome) {
            associadoUpdate.associadoNome = props.associadoData.currentassociadoNome;
        }

        if (current_state.associadoNmrAssociado !== props.associadoData.currentassociadoNmrAssociado ||
            current_state.associadoNmrAssociado === props.associadoData.currentassociadoNmrAssociado) {
            associadoUpdate.associadoNmrAssociado = props.associadoData.currentassociadoNmrAssociado;
        }

        return associadoUpdate;

    }

  
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
                                value="Update"
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