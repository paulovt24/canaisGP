import { gerarToken } from '../utils/jwt.js'

import * as db from '../repository/usuarioRepository.js'
import * as serv from '../service/usuarioService.js'

import { Router } from 'express'
const endpoint= Router()


endpoint.get('/usuario/entrar', async (req,resp) =>{

try {
    

    let pessoa= req.body
    let usuario= await db.ValidarUsuario(pessoa)

    if (usuario== null) {
        
resp.send({ erro: 'Usuario ou senha incorreto' })
    }
     else {
        
     let token= gerarToken(usuario)

     resp.send({

       "token": token
     })
    }


} 


catch (err) {

    resp.status(404).send({

    erro:err.message

    })
    
}

})


endpoint.post('/usuario/adicionar', async (req,resp) =>{

    try {
        
    let info= req.body

    let id= await serv.SalvarUsuario(info)
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
    
    endpoint.put('/usuario/alterar/:id', async (req,resp) =>{

        try {

            let id= req.params.id
            let info= req.body
            
        let linhasAfetadas= await db.AlterarUsuario(id, info)
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

        endpoint.delete('/usuario/deletar/:id', async (req,resp) =>{

            try {
    
                let id= req.params.id
 
            let linhasAfetadas= await db.DeletarUsuario(id)
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