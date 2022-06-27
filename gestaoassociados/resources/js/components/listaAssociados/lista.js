import React, { Component } from 'react';
import LinhaLista from './linhaLista';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from "./Modals/CreateModal";

class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            associados: [],
        }
    }

    //duração do metodo
    componentDidMount(){
        this.getListaAssociados();
    }


    //obter lista de associados
    getListaAssociados = () => {
        let self = this;
        axios.get('/get/associado/lista').then(function(response){
            self.setState({
                associados: response.data
            });
        });
    }


    render() {
        return (
            <div className="container">
                <ToastContainer/>
                <CreateModal/>                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col" width="100px">#</th>
                                <th scope="col" width="100px">Nome</th>
                                <th scope="col" width="100px">Número de Sócio</th>
                                <th scope="col" width="100px">Ações</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.associados.map(function(x, z){
                                    return <LinhaLista key={z} data={x}/>
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


export default Lista;
