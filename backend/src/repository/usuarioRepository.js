import con from "./connection.js";

export async function ValidarUsuario(){

const comando= `
 
            select  nm_usuario   usuario,
                    ds_senha     senha
            from tb_usuario
            where nm_usuario= ?
             and  ds_senha=?;

`

let resposta= await con.query (comando)
let registros= resposta[0]
return registros;
}

export async function InserirUsuario(info){

    const comando= `
     
              insert into tb_usuario (nm_usuario, ds_senha)
              values(?, ?);
    
    `
    
    let resposta= await con.query (comando, [info.usuario, info.senha])
    let registros= resposta[0]
    return registros.insertId
    
    }

    export async function AlterarUsuario(id,info){

        const comando= `
         
                update tb_usuario 
                set nm_usuario= ?,
                    ds_senha=?
                where id_usuario=?
        
        `
        
        let resposta= await con.query (comando, [info.usuario, info.senha, id])
        let registros= resposta[0]
        return registros.affectedRows
        
        }

        
    export async function DeletarUsuario(id){

        const comando= `
         
                delete from tb_usuario 
                where id_usuario=?
        
        `
        
        let resposta= await con.query (comando, [id])
        let registros= resposta[0]
        return registros.affectedRows
        }