import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import './styles.css';

export default class CardsEncontrados extends Component {
    render() {
        return (
            <div className="corpo">
                <Card.Group itemsPerRow={4}>
                    <Card>
                        <Card.Content>
                            <div className="erro">
                                <span>Mensagem de erro aqui</span>
                            </div>

                            <span id="titulo">Repositórios</span>
                            <span id="qtdRepos">4</span>

                            <input id="input" type="text" />
                            <button id="botao">ADD</button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <div className="erro">
                                <span>Mensagem de erro aqui</span>
                            </div>

                            <span id="titulo">Repositórios</span>
                            <span id="qtdRepos">4</span>

                            <input id="input" type="text" />
                            <button id="botao">ADD</button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <div className="erro">
                                <span>Mensagem de erro aqui</span>
                            </div>

                            <span id="titulo">Repositórios</span>
                            <span id="qtdRepos">4</span>

                            <input id="input" type="text" />
                            <button id="botao">ADD</button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <div className="erro">
                                <span>Mensagem de erro aqui</span>
                            </div>

                            <span id="titulo">Repositórios</span>
                            <span id="qtdRepos">4</span>

                            <input id="input" type="text" />
                            <button id="botao">ADD</button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }
}