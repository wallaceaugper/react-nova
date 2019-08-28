import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import './styles.css';

export default class CardsEncontrados extends Component {
    render() {
        console.log(this.props.repositorio)
        return (
            <div className="corpo">
                <Card>
                    <Card.Content>
                        <span id="titulo-card">{this.props.repositorio.full_name}</span>
                        <span id="empresa-card">{this.props.repositorio.organization.login}</span>
                        <br />
                        <br />
                        <span>Starts</span>
                        <span className="dados">{this.props.repositorio.stargazers_count}</span>
                        <br />
                        <br />
                        <span>Language</span>
                        <span className="dados">{this.props.repositorio.language}</span>
                        <br />
                        <br />
                        <span>Forks</span>
                        <span className="dados">{this.props.repositorio.forks}</span>

                    </Card.Content>
                </Card>
            </div>
        );
    }
}