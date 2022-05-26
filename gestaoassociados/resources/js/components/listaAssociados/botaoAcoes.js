import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';

class botaoAcoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentNomeAssociado: null,
            currentNumeroAssociado: null,
        }
    }

    // mostra individualmente dethlhes dos associados.

    getAssociadosDetalhes = (id) => {
        axios.post('/get/individual/associado/detalhes', {
            associadoId: id
        }).then((response) => {
            this.setState({
                currentNomeAssociado: response.data.nome_associado,
                currentNumeroAssociado: response.data.nmr_associado
            })
            console.log(response.data);
        })
    }



    render() {
        return (
            <div className="btn-group" role="group">
               
                <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModal'+this.props.eachRowId}
                    onClick={ () => { this.getAssociadosDetalhes(this.props.eachRowId) }}
                >
                    Ver
                </button>
                <ViewModal modalId={this.props.eachRowId} associadoData={ this.state }/>
                
                <button type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={'#updateModal' + this.props.eachRowId}
                    onClick={() => { this.getAssociadosDetalhes(this.props.eachRowId) }}
                >
                    Editar
                </button>
                <UpdateModal modalId={this.props.eachRowId} associadoData={ this.state }/>
                <button type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={'#deleteModal' + this.props.eachRowId}
                    onClick={() => { this.getAssociadosDetalhes(this.props.eachRowId) }}
                >
                    Apagar
                </button>
                <DeleteModal  modalId={this.props.eachRowId} associadoData={ this.state }/>
            </div>
        )
    }
}

export default botaoAcoes;