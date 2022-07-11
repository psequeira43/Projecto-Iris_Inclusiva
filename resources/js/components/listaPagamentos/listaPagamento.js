import React, { Component } from 'react';
import LinhaListaPagamento from './linhaListaPagamento';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePay from "./ModalsPay/CreatePay";
import CreatePayCopy from "./ModalsPay/CreatePayCopy";

class ListaPagamento extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pagamentos: [],
        }
    }

    //duração do metodo
    componentDidMount(){
        this.getListaPagamentos();
    }


    //obter lista de Pagamentos
    getListaPagamentos = () => {
        let self = this;
        axios.get('/get/pagamento/listaPagamento').then(function(response){
            self.setState({
                pagamentos: response.data
            });
        });
    }

    render() {
          
        return (
            <div className="container">
                <ToastContainer/>
                {/* <CreatePayCopy/>  */}
                <CreatePay/>                
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col" width="40px">#</th>
                                <th scope="col" width="100px">Data</th>
                                <th scope="col" width="60px">Valor (€)</th>
                                <th scope="col" width="60px">Associado</th>
                                <th scope="col" width="10px"># Associado</th>
                                <th scope="col" width="100px">Ações</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.pagamentos.map(function(x, z){
                                    return <LinhaListaPagamento key={z} data={x}/>
                                })}
                            </tbody>
                        </table>    
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default ListaPagamento;
