import React from 'react';
import { Link} from 'react-router-dom';

const NotFound = () =>{
  return(
    <>
      <h1>Pagina Não encontrada</h1>
      <Link to="/">Voltar para a HOME</Link>
    </>
  )
}

export default NotFound;