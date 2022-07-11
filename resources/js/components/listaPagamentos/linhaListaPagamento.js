import React, {Component} from 'react';
import BotaoAcoesPagamento from './botaoAcoesPagamento';


class linhaListaPagamento extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        var cts = this.props.data.created_at,
        cdate = (new Date(cts)).toString().substr(4, 17);

        return (
            
            <tr>
                <th>{ this.props.data.id }</th>
                <td>{ cdate }</td>
                <td>{ this.props.data.valor_pagamento }</td>
                <td>
                    { this.props.data.associado.nome_associado } 
                </td> 
                <td>
                    { this.props.data.associado.id } 
                </td> 
                <td>
                    <BotaoAcoesPagamento eachRowId={ this.props.data.id }/>
                </td>
            </tr>
        )
    }
}

export default linhaListaPagamento;