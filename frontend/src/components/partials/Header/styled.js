import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color:#fff;
  height:60px;
  border-bottom:1px solid #ccc;

  //Estilizações internas do componente
  .Container{
    max-width:1000px;
    margin:auto;
    display:flex;
  }

  a{
    text-decoration:none;
  }

  .logo{
    flex:1;
    display:flex;
    align-items:center;
    height:60px;
   
    .logo-1,
    .logo-2,
    .logo-3 {
      font-size:27px;
      font-weight:bold;
    }

    .logo-1{color:#ff0000;},
    .logo-2{color:#00ff00;},
    .logo-3{color:#0000ff;}
  }

  nav {
    padding-top:10px;
    padding-bottom:10px;

    ul, li {
      margin:0;
      list-style:none;
    }

    ul{
      display:flex;
      align-items:center;
      height:40px;
    }

    li{
      margin-left:20px;
      margin-right:20px;

      a, button {
        border: 0;
        background: none; 
        color:#000;
        font-size:14px;
        cursor: pointer; 
        
        &:hover{
          color:#999;
        }

        &.button{
          background-color:#ff8100;
          border-radius:4px;
          color:#fff;
          padding:5px 10px; //5 emcima e embaixo, 10px na direita e na esquerda.
        }

        &.button:hover{
          background-color:#E57706;

        }
      }
    }
  }
  
`;