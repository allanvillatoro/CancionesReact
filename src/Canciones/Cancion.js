import React from 'react';

function Cancion(props){
    const song = props.valor;
    const retorno = (
      <tr>
        <th scope="row">{props.indice}</th>
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.year}</td>
        <td>{song.country}</td>
      </tr>
    );
    return retorno;
}

export default Cancion;