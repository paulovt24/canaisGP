import * as db from '../repository/programaFavoritoRepository.js'

import { Router } from 'express'
const endpoint= Router()


endpoint.get('/programa/favorito', async (req,resp) =>{

try {
    
let registros= await db.ConsultarProgramaFavorito()
resp.send(registros)

} 


catch (err) {

    resp.status(404).send({

    erro:err.message

    })
    
}

})


endpoint.post('/programa/favorito/adicionar', async (req,resp) =>{

    try {
        
    let info= req.body

    let id= await db.InserirProgramaFavorito(info)
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


    endpoint.put('/programa/favorito/alterar/:id', async (req,resp) =>{

        try {

            let id= req.params.id
            let info= req.body
            
        let linhasAfetadas= await db.AlterarProgramaFavorito(id, info)
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

        endpoint.delete('/programa/favorito/deletar/:id', async (req,resp) =>{

            try {
    
                let id= req.params.id
 
            let linhasAfetadas= await db.DeletarProgramaFavorito(id)
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