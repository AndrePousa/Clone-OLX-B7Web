import qs from 'qs';
import Cookies from "js-cookie";

const BASEAPI = 'http://alunos.b7web.com.br:501';

const apiFetchPost = async (endpoint, body) =>{

  if(!body.token){
      let token = Cookies.get('token');
      if(token){
        body.token = token;
      }
  }
  const res = await fetch(BASEAPI+endpoint, {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();

  if(json.notallowed){
    window.location.href = '/signin';
    return;
  }

  return json;
}

//body opcional
const apiFetchGet = async (endpoint, body = []) =>{

  if(!body.token){
      let token = Cookies.get('token');
      if(token){
        body.token = token;
      }
  }
  const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if(json.notallowed){
    window.location.href = '/signin';
    return;
  }

  return json;
}

const OlxApi = {

  login: async(email, password) => {
    const json = await apiFetchPost('/user/signin', {email, password} );
    return json;
  },
  //Requisição para buscar os estados
  getStates:async () =>{
    const json = await apiFetchGet(
      '/states'
    );
    return json.states;
  }
};

export default () => OlxApi;