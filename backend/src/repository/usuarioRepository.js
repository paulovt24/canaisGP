import con from "./connection.js";

export async function ConsultarUsuario(){

const comando= `
 
            select  nm_usuario   usuario
            from tb_usuario

`

let resposta= await con.query (comando)
let registros= resposta[0]
return registros;

}

export async function InserirUsuario(info){

    const comando= `
     
              insert into tb_usuario (nm_usuario)
              values(?);
    
    `
    
    let resposta= await con.query (comando, [info.usuario])
    let registros= resposta[0]
    return registros.insertId
    
    }

    export async function AlterarUsuario(id,info){

        const comando= `
         
                update tb_usuario 
                set nm_usuario= ?
                where id_usuario=?
        
        `
        
        let resposta= await con.query (comando, [info.usuario, id])
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