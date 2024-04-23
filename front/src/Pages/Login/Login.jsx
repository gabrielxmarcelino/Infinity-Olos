import React, { useState } from 'react'
import './login.css'
import { Geral, Container, Logo, IniciaLogin, Campos, NomeCampo } from './Login.styles';
import Foundever from '../../Components/Images/Login/logo_foundever.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Login({user2}) {

  const [analystName, setAnalystName] = useState(user2 ? user2.analystName : "");
  const [user, setuser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLogin(user, pass);
  }
  const checkLogin = (user, pass) => {
    if(user === "gmarc017" && pass === "12345678"){
      console.log("Você logaria com sucesso, eu acho");
      navigate("/default");
    }
    else{
      console.log("Usuário ou senha incorretos.");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Geral>
<Container>
      <Logo>
        <img src={Foundever} alt="" width={150} height={25} />
      </Logo>
      <IniciaLogin>
        <span>Bem vindo ao Infinity, {user2.analystName}</span>
      </IniciaLogin>
      <Campos>
        <label>
          <NomeCampo>
          <span>Login de rede</span>
          </NomeCampo>
            <input type="text" className='input' name='usuario' value={user} required onChange={(e) => setuser(e.target.value)}/>
        </label>
      </Campos>
      <Campos>
      <label>
        <NomeCampo>
          <span>Senha</span>
        </NomeCampo>
          <input type="password" className='input' name="pass" id="" value={pass} required onChange={(e) => setPass(e.target.value)} />
      </label>
      </Campos>
      <Campos>
          <input type="submit" className='button' value="Logar" />
      </Campos>
    </Container>
    </Geral>
    </form>
    
    
  )
}
