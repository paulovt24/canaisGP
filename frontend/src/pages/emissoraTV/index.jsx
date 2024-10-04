import './index.scss';

import axios from 'axios';

import { useState } from 'react';

function Canais() {

   
        const [nome, setNome] = useState('');
        const [numero, setNumero] = useState('');
        const [aberto, setAberto] = useState(false);
    
    
        async function salvar() {
            const paramCorpo = {
                "canal": nome,
                "numero": numero,
                "aberto": aberto
            }
    
            const url = 'http://localhost:4000/canal/adicionar';
            let resp = await axios.post(url, paramCorpo);
    
            alert('Canal adicionado. Id: ' + resp.data.novoId);
        }





    const [listaCanal, setListaCanal] = useState([])

    async function Buscar() {
        const url = `http://localhost:4000/canal/`
        let resp = await axios.get(url);
        setListaCanal(resp.data)
    }
  return (
   
   <div className='pagina-canals'>
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

export default Canais;
