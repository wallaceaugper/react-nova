import React, { Component } from 'react';
import api from '../../services';
import CardRepos from '../card-repositorios/index';
import CardsEncontrados from '../cards-encontrados/index';

export default class Main extends Component {
    state = {
        repositorios: [],
        mensagem: ''
    }

    callBackRemover = (id) => {
        const repositorios = this.state.repositorios.filter((_, index) => id !== index)
        this.setState({ repositorios });
    }

    callBackAtualizar = async (id, repositorio) => {
        const response = await api.get(repositorio);

        const repositorios = this.state.repositorios;
        repositorios[id] = response.data;

        this.setState({ repositorios });
    }

    loadRepositorios = async (repositorio) => {
        try {
            const response = await api.get(repositorio);
            const repos = this.state.repositorios.filter(repo => repo.full_name === repositorio);

            if (repos.length === 0) {
                this.setState({ repositorios: [...this.state.repositorios, response.data], mensagem: '' });
            } else {
                this.setState({ mensagem: 'Não foi possível adicionar o repositório' });
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <CardRepos click={this.loadRepositorios} qtdeRepositorios={this.state.repositorios.length} mensagem={this.state.mensagem} />
                {this.state.repositorios.map((repositorio, index) => (<CardsEncontrados key={index} id={index} repositorio={repositorio}
                    onRemove={this.callBackRemover} onRefresh={this.callBackAtualizar} />))};
            </div>
        );
    }
}