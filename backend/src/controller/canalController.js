import * as db from '../repository/canalRepository.js'
import * as serv from '../service/canalService.js'
import { autenticar } from '../utils/jwt.js'

import { Router } from 'express'
const endpoint= Router()


endpoint.get('/canal/', autenticar, async (req,resp) =>{

try {
    

    let idUsuario= req.user.id;
let registros= await db.ConsultarCanal(idUsuario)
resp.send(registros)

} 


catch (err) {

    resp.status(404).send({

    erro:err.message

    })
    
}

})


endpoint.post('/canal/adicionar',autenticar, async (req,resp) =>{

    try {    
    let info= req.body

    let id= await serv.SalvarCanal(info)
    resp.send({

    novoId: id

    })
    
    } 
    
    
    catch (err) {
    
        resp.status(404).send({
    
        erro:err.message
    
        })
        
    }
    
    })


    endpoint.put('/canal/alterar/:id', autenticar, async (req,resp) =>{

        try {

            let idUsuario= req.user.id
            let info= req.body
            
        let linhasAfetadas= await db.AlterarCanal(id, info)
        if (linhasAfetadas>=1) {
            
            resp.send()

        } 
        
        else {

            resp.status(404).send({erro: 'Nenhum registro encintrado'})
            
        }
         } 
        
        
        catch (err) {
        
            resp.status(404).send({
        
            erro:err.message
        
            })
            
        }
        
        })

        endpoint.delete('/canal/deletar/:id', async (req,resp) =>{

            try {
    
                let id= req.params.id
 
            let linhasAfetadas= await db.DeletarCanal(id)
            if (linhasAfetadas>=1) {
                
                resp.send()
    
            } 
            
            else {
    
                resp.status(404).send({erro: 'Nenhum registro encintrado'})
                
            }
             } 
            
            
            catch (err) {
            
                resp.status(404).send({
            
                erro:err.message
            
                })
                
            }
            
            })
            export default endpoint;
