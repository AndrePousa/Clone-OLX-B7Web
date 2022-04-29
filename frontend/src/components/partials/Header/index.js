import React from 'react';
import {HeaderArea} from './styled';
import { Link } from 'react-router-dom';
import { isLogged } from './../../../helpers/AuthHandler';

const Header = () => {

  let logged = isLogged();

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
                    <Link to="/logout">Sair</Link>
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