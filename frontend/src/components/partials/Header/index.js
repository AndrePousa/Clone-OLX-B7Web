import React from 'react';
import {HeaderArea} from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
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
      </div>

    </HeaderArea>
  )
}

export default Header;