import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import reload from '../../img/reload.svg';
import remove from '../../img/remove.svg';
import './styles.css';

export default class CardsEncontrados extends Component {
    removerCard = () => {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <div className="corpo">
                <Card>
                    <Card.Content>
                        <img className="imagem" src={this.props.repositorio.organization.avatar_url} alt=""></img>
                        <span id="titulo-card">{this.props.repositorio.full_name}</span>
                        <span id="empresa-card">{this.props.repositorio.organization.login}</span>
                        <br />
                        <br />
                        <span>Stars</span>
                        <span className="dados">{this.props.repositorio.stargazers_count}</span>
                        <br />
                        <br />
                        <span>Language</span>
                        <span className="dados">{this.props.repositorio.language}</span>
                        <br />
                        <br />
                        <span>Forks</span>
                        <span className="dados">{this.props.repositorio.forks}</span>
                        <br />
                        <input type="image" className="botoes" src={reload} alt=""></input>
                        <input type="image" className="botoes" src={remove} alt="" onClick={this.removerCard}></input>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}