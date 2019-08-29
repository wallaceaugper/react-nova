import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

import logo from '../../img/logo.svg';
import './styles.css';

export default class CardRepos extends Component {

    state = {
        inputValue: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.click(this.state.inputValue);
    }

    render() {
        return (
            < div className="card" >
                <Card centered>
                    <Card.Content>
                        <span className="erro">{this.props.mensagem}</span>

                        <Image src={logo} className="app-logo" />

                        <span id="titulo">Repositórios</span>
                        <span id="qtdRepos">{this.props.qtdeRepositorios}</span>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <input id="input" onChange={event => this.setState({ inputValue: event.target.value })} type="text" />
                            <button id="botao" type="submit">ADD</button>
                        </form>
                    </Card.Content>
                </Card>
            </div >
        );
    }
}