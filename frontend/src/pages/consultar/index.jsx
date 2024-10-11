import './index.scss';

import axios from 'axios';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Consultar() {

    const [token, setToken]= useState(null)
    const [listaCanal, setListaCanal] = useState([])

const navigate= useNavigate()

    async function Buscar() {
        const url = `http://localhost:4000/canal/?access-token=${token}`
        let resp = await axios.get(url);
        setListaCanal(resp.data)   
    }

    async function Exluir(id) {
        const url = `http://localhost:4000/canal/deletar/${id}?access-token=${token}`
        await axios.delete(url);

        await Buscar();
        }

        async function Sair(){

     localStorage.setItem('USUARIO', null)
     navigate('/')

        }

        useEffect(() =>{

            let usu= localStorage.getItem('USUARIO')
            setToken(usu);
            
            if (usu==undefined) {
                
                navigate('/')
            }
}, [] )
            


  return (
   
    <div className='consultar'>

    <section className='parteII'>
        <div className='buscar'>
        <h1>Buscar Canais</h1>
       
        <button onClick={Buscar}>Buscar</button>
        </div>
        <div className='resposta'>
        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Numero</th>
                        <th>Aberto?</th>
                       
                    </tr>
                </thead>

                <tbody>
                    {listaCanal.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.canal}</td>
                            <td>{item.numero}</td>
                            <td>{item.aberto ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
       
        
    </section>

    
   </div>

  );
}

export default Consultar;
