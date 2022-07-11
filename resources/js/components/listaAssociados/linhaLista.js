import React, {Component} from 'react';
import BotaoAcoes from './botaoAcoes';


class linhaLista extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            
            <tr>
                <th>{ this.props.data.id }</th>
                <td>{ this.props.data.nome_associado }</td>
                <td>{ this.props.data.nmr_associado }</td>
                <td>
                    <BotaoAcoes eachRowId={ this.props.data.id }/>
                </td>
            </tr>
        )
    }
}

export default linhaLista;