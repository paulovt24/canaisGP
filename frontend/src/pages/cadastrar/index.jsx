import './index.scss';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Cadastrar() {

        const [token, setToken]= useState(null)
   
        const [nome, setNome] = useState('');
        const [numero, setNumero] = useState('');
        const [aberto, setAberto] = useState(false);
    
    
        async function salvar() {
            const paramCorpo = {
                "canal": nome,
                "numero": numero,
                "aberto": aberto
            }
    
        const navigate= useNavigate();

        const {id}= useParams;


           if (id==undefined) {

            const url = `http://localhost:4000/canal/adicionar?access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
    
            alert('Canal adicionado. Id: ' + resp.data.novoId);
            
           } else {
            

            const url = `http://localhost:4000/canal/alterar/${id}?access-token=${token}`;
            let resp = await axios.put(url, paramCorpo);
    
            alert('Canal alterado');

           }
        }


        async function consultar(){
     if (id!= undefined) {
    
        const url = `http://localhost:4000/canal/alterar/${id}?access-token=${token}`;
        let resp = await axios.get(url, paramCorpo);
        let dados= resp.data

        setNome(dados.nome)
        setNumero(dados.numero)
        setAberto(dados.aberto)
     }

useEffect(() =>{

let usu= localStorage.getItem('USUARIO')
setToken(usu);

if (usu==undefined) {
    
    Navigate('/')
}

   consultar()
}, [] )


        }

        return(

            <div className='pagina-cadastrar'>
            <header>
        
            </header>
        
            <section className='parteI'>
            <h1> CADASTRAR CANAL </h1>
        
        
        <div className='form'>
            <div>
                <label>Nome:</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>Numero:</label>
                <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>
           
            <div>
                <label>Aberto:</label>
                <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
            </div>
        </div>
        <button onClick={salvar}> SALVAR </button>
        </section>
        
        </div>
        )
    }


    export default Cadastrar
    