import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import logo from '../../img/logo.svg';

import './styles.css';

export default class CardRepos extends Component {
    render() {
        return (
            <div className="card">
                <Card centered>
                    <Card.Content>
                        <div className="erro">
                            <span>Mensagem de erro aqui</span>
                        </div>

                        <Image src={logo} className="app-logo" />
                        <span id="titulo">Repositórios</span>

                        <input id="input" type="text" />
                        <button id="botao">ADD</button>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}