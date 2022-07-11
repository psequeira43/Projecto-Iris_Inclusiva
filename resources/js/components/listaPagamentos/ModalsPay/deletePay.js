import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class DeletePay extends Component {

    constructor(props) {
        super(props);
    }

    // Eliminar pagamentos

    deletePagamentoData = (pagamento) => {
        axios.delete('/delete/pagamento/data/' + pagamento).then(() => {
            toast.error("Pagamento eliminado com sucesso !!");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"deletePay"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Eliminar Pagamento</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            Tem a certeza, está prestes a eliminar este pagamento?!
                    </div>
                        <div className="modal-footer">
                            
                            <button type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={ () => {this.deletePagamentoData(this.props.modalId)}}>
                                Sim
                            </button>
                            <button type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Fechar
                            </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeletePay;