import React from 'react';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import { PageArea } from './styled';

const Signin = () =>{
  return( 
     <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input type="email"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input type="password"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input type="checkbox"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>

    </PageContainer>
  );
}

export default Signin;