import React from 'react';
import './App.css';
import Componente1 from './Componentes/Componente1';
import Componente2 from './Componentes/Componente2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrada: 0,
      resultado: 0,
      boton: 37
    }
  }

  botonClick = (nuevoValor) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    let valorEntrada = this.state.entrada;
    let res = valorEntrada * nuevoValor;
    this.setState({
      boton: nuevoValor,
      resultado : res
    })
  }

  cambiaInput = (evento) => {
    let total = evento.target.value * this.state.boton;
    let valorEntrada= evento.target.value;
    this.setState({
      resultado: total,
      entrada: valorEntrada
    })
  }

  render() {
    return (
      <div className="App">

        <h1>Multiplication APP</h1>
        <Componente1
          changed={this.cambiaInput}
        >
          NÚMERO
        </Componente1>
        <p>
          <button onClick={() => this.botonClick(37)}>x37</button>
          <button onClick={() => this.botonClick(43)}>x43</button>
          Está pulsado el: {this.state.boton}
        </p>
        <Componente2
          resultado = {this.state.resultado}
        />

      </div>
    );

  }
}

export default App;
