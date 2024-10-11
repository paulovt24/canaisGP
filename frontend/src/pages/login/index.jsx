import './index.scss';

import axios from 'axios';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Login() {

   const[nome,setNome]=useState('')
   const[senha,setSenha]=useState('')

   const navigate = useNavigate()

    async function Buscar() {
        const usuario = {
            "usuario": nome,
            "senha":senha
        }
        const url = `http://localhost:4000/usuario`
        let resp = await axios.post(url, usuario);
       
        if(resp.data.erro != undefined){
            alert(resp.data.erro)
        }
        else{
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/consultar')
        }
    }
  return (
   
   <div className='pagina-login'>
    <header>

    </header>

    <section className='parteI'>
   <h1>Faça o login</h1>
   <div className='login-container'>

    <input type='text' placeholder='digite seu nome' value={nome} onChange={(e)=>setNome(e.target.value)}/>
    <input type='text' placeholder='digite sua senha' value={senha} onChange={(e)=>setSenha(e.target.value)}/>

   </div>

   <button className='logar' onClick={Buscar}>Login</button>
       
        
    </section>

    
   </div>

  );
}

export default Login;
