import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

import api from '../../services';

import logo from '../../img/logo.svg';
import './styles.css';

export default class CardRepos extends Component {
    state = {
        repositorios: []
    }

    componentDidMount() {
        this.loadRepositorios();
    }

    loadRepositorios = async () => {
        // const response = await api.get(`/WallaceHayabusa`);
        // console.log(response);
        // this.setState({ repositorios });
    }

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
                        <span id="qtdRepos">4</span>

                        <input id="input" type="text" />
                        <button id="botao">ADD</button>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}