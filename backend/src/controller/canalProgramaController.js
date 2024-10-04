import * as db from '../repository/canalProgramaRepository.js'

import { Router } from 'express'
const endpoint= Router()


endpoint.get('/canal/programa', async (req,resp) =>{

try {
    
let registros= await db.ConsultarCanalPrograma()
resp.send(registros)

} 


catch (err) {

    resp.status(404).send({

    erro:err.message

    })
    
}

})


endpoint.post('/canal/programa/adicionar', async (req,resp) =>{

    try {
        
    let info= req.body

    let id= await db.InserirCanalPrograma(info)
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


    endpoint.put('/canal/programa/alterar/:id', async (req,resp) =>{

        try {

            let id= req.params.id
            let info= req.body
            
        let linhasAfetadas= await db.AlterarCanalPrograma(id, info)
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

        endpoint.delete('/canal/programa/deletar/:id', async (req,resp) =>{

            try {
    
                let id= req.params.id
 
            let linhasAfetadas= await db.DeletarCanalPrograma(id)
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