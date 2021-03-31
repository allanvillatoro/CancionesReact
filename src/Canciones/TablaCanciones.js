import React from 'react';
import Cancion from './Cancion';

function TablaCanciones (props) {
    const canciones = props.canciones;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Song</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Year</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
        {canciones.map(
          (cancion,index)=><Cancion key={index} valor={cancion} indice={index+1}/>)}
        </tbody>
      </table>
    );
}

export default TablaCanciones;