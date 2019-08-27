import React from 'react';
import CardRepos from './components/card-repositorios';
import CardsEncontrados from './components/cards-encontrados';

import './styles.css';

const App = () => (
  <div className="App">
    <CardRepos />
    <CardsEncontrados />
  </div>
);

export default App;