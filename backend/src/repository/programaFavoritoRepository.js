import con from "./connection.js";

export async function ConsultarProgramaFavorito(){

const comando= `
 
            select tb_usuario.nm_usuario                 usuario,
                   tb_canal_programa.nm_programa   canal,
                   vl_avaliacao                          avaliacao
            from tb_programa_favorito 

            inner join tb_usuario 
            on tb_programa_favorito.id_usuario = tb_usuario.id_usuario
     
            inner join tb_canal_programa 
            on tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa

`

let resposta= await con.query (comando)
let registros= resposta[0]
return registros;
}


export async function InserirProgramaFavorito(info){

    const comando= `
     
              insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
              values(?, ?, ?);
    `
    
    let resposta= await con.query (comando, [info.usuario, info.canal, info.avaliacao])
    let registros= resposta[0]
    return registros.insertId
    
    }

    export async function AlterarProgramaFavorito(id,info){

        const comando= `
         
                update tb_programa_favorito 
                set  id_usuario=?,
                     id_canal_programa=? ,
                     vl_avaliacao=?
                where id_programa_favorito= ?
        
        `
        
        let resposta= await con.query (comando, [info.usuario, info.canal, info.avaliacao, id])
        let registros= resposta[0]
        return registros.affectedRows
        
        }

        
    export async function DeletarProgramaFavorito(id){

        const comando= `
         
                delete from tb_programa_favorito 
                where id_programa_favorito= ?
        
        `
        
        let resposta= await con.query (comando, [id])
        let registros= resposta[0]
        return registros.affectedRows
        }