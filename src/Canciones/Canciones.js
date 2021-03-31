import React from 'react';
import TablaCanciones from './TablaCanciones';
import FormularioCanciones from './FormularioCanciones';
import axios from 'axios';

class Canciones extends React.Component {
    constructor(props) {
      super(props);
      const listaCanciones = [
        {song: 'Stairway to Heaven', artist: 'Led Zeppelin', album:'Led Zeppelin III', year: '1975', country: 'UK'},
        {song: 'Love of my Life', artist: 'Queen', album:'A Night at the Opera', year: '1975', country: 'UK'},
        {song: 'Bohemian Rhapsody', artist: 'Queen', album:'A Night at the Opera', year: '1975', country: 'UK'}
      ];
      this.state = {
        canciones: listaCanciones
      };
      this.guardarCancion = this.guardarCancion.bind(this);
    }
  
    componentDidMount() {
      //modificarlo luego usando async y await
      axios.get('http://localhost:8888/api/canciones/all')
        .then(res => {
          const lista = res.data;
          this.setState({ canciones: lista });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    guardarCancion(cancion){
      //modificarlo luego usando async y await
      axios.post(`http://localhost:8888/api/canciones`, cancion)
        .then(res => {
          //Incorrecto
          //this.setState({canciones: this.state.canciones.concat(cancion)});
          //Correcto
          this.setState((state, props) => ({
            canciones: state.canciones.concat(cancion)
          }));
          window.alert('Agregado exitosamente');
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    render () {
      return (   
        <div>
            <br/>
          <FormularioCanciones guardar={this.guardarCancion} />
          <TablaCanciones canciones={this.state.canciones} />
        </div>
      );
    }
  }
  
  export default Canciones;