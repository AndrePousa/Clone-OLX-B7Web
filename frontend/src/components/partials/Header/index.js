import React from 'react';
import {HeaderArea} from './styled';
import { Link } from 'react-router-dom';
import { doLogout, isLogged } from './../../../helpers/AuthHandler';

const Header = () => {

  let logged = isLogged();

  //remover o cookie do toquen e redirecionara pagina
  const handleLogout = () =>{
    doLogout();
    //A pagina deve ser recarregada para todo alteração acontecer
    window.location.href = '/';
  }

  return(
    <HeaderArea>
      <div className="Container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">A</span>
            <span className="logo-2">R</span>
            <span className="logo-3">P</span>
          </Link>
        </div>
          <nav>
            <ul>
              {logged && 
                <>
                  <li>
                    <Link to="/my-account">Minha Conta</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Sair</button>
                  </li> 
                  <li>
                    <Link to="" className="button">Poste um anúncio</Link>
                  </li>
                </>
              }
              {!logged &&
                <>
                  <li>
                    <Link to="/signin">Login</Link>
                  </li>
                  <li>
                    <Link to="signup">Cadastrar</Link>
                  </li>
                </>
              } 
            </ul>
          </nav>
      </div>

    </HeaderArea>
  )
}

export default Header;