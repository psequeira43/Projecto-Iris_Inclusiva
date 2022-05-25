import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Lista extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                            <th scope="col" width="100px">#</th>
                            <th scope="col" width="100px">Nome</th>
                            <th scope="col" width="100px">Número de Sócio</th>
                            <th scope="col" width="100px">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
    
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
