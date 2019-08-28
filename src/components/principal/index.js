import React, { Component } from 'react';
import api from '../../services';
import CardRepos from '../card-repositorios/index';
import CardsEncontrados from '../cards-encontrados/index';

export default class Main extends Component {
    state = {
        repositorios: []
    }

    loadRepositorios = async (repositorio) => {
        try {
            const response = await api.get(repositorio);
            this.setState({ repositorios: [...this.state.repositorios, response.data] });
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        return (
            <div>
                <CardRepos click={this.loadRepositorios} qtdeRepositorios={this.state.repositorios.length} />
                {this.state.repositorios.map((repositorio) => (<CardsEncontrados repositorio={repositorio} />))};
            </div>
        );
    }
}