import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class CreatePay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pagamentoValor: null,
            pagamentoAssociado: null,
            associado: [],
        }
    }

        //duração do metodo
        componentDidMount(){
            this.getListaAssociado();
        }

            //obter lista de Associado
            getListaAssociado = () => {
                let self = this;
                axios.get('/get/associado/lista').then(function(response){
                    self.setState({
                        associado: response.data
                    });
                });
            }

    // Inserir valor do pagamento

    inputpagamentoValor = (event) => {
        this.setState({
            pagamentoValor: event.target.value,
        });
    }

    inputpagamentoAssociado = (event) => {
        this.setState({
            pagamentoAssociado: event.target.value,
        });
    }
    

    // Armazenamento de Pagamentos

    storePagamentoData = () => {
        axios.post('/store/pagamento/data', {
            pagamentoValor: this.state.pagamentoValor,
            pagamentoAssociado: this.state.pagamentoAssociado,
        }).then(() => {
            toast.success("Pagamento Criado com Sucesso!");
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
                <label style={mystyle}><strong>Pagamentos</strong></label>
            </div>

            <div className='row text-right mb-3 pb-3'>
                <button style={{marginTop:"20px"}} className='btn btn-success text-right col-2 offset-md-8'
                        data-toggle="modal"
                        data-target="#CreateModal"
                    >
                        Criar Novo Pagamento
                    </button>
                </div>
                <div className="modal fade" id="CreateModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Criar novo Pagamento</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className='form'>
                                <label>Valor do Pagamento:</label>
                                    <div className="form-group">
                                        <input type="text"
                                            id="pagamentoValor"
                                            className='form-control mb-3'
                                            placeholder="Valor do pagamento"
                                            onChange={this.inputpagamentoValor}
                                        />
                                    </div>  
                                    <div className="form-group">
                                        <div class="form-group">
                                          <label>Associado:</label>
                                          <select class="form-control" onChange={this.inputpagamentoAssociado} id="pagamentoAssociado">
                                            <option>Selecionar Associado</option>
                                            {this.state.associado.map(associado => (
                                            <option key={associado.id} value={associado.id}>
                                            { associado.nome_associado }
                                            </option>
                                            ))}
                                          </select>
                                        </div>
                                    </div>  
                                </form> 
                        </div>
                            <div className="modal-footer">
                            <input type="button"
                                    value="Guardar Pagamento"
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

export default CreatePay;