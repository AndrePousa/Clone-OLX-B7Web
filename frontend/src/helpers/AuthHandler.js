//Responsavel pelo processo de autenticação. 

import Cookies from 'js-cookie';

//Verificação
export const isLogged = () =>{
  let token = Cookies.get('token');
  return (token)? true : false;
}

//processo de login 
export const doLogin = (token, rememberPassWord = false) => {
  if(rememberPassWord){
    Cookies.set('token', token, {expires:999})
  }
  else{
    Cookies.set('token', token);
  }
}

//remover o cookie
export const doLogout = () =>{
  Cookies.remove('token');
}
