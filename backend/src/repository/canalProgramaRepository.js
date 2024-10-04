import con from "./connection.js";

export async function ConsultarCanalPrograma(){

const comando= `
 
select          tb_canal.id_canal  canal,
                nm_programa        programa,
                ds_genero          genero,
                hr_programa        hora
from tb_canal_programa 

inner join tb_canal
on tb_canal_programa.id_canal = tb_canal.id_canal;
`

let resposta= await con.query (comando)
let registros= resposta[0]
return registros;

}


export async function InserirCanalPrograma(info){

    const comando= `
     
              insert into tb_canal_programa(id_canal, nm_programa, ds_genero, hr_programa)
              values(?, ?, ?, ?);

    `
    
    let resposta= await con.query (comando, [info.canal, info.programa, info.genero, info.hora])
    let registros= resposta[0]
    return registros.insertId
    
    }

    export async function AlterarCanalPrograma(id,info){

        const comando= `
         
                update tb_canal_programa 
                set     id_canal=?,
                        nm_programa=?,
                        ds_genero=?,
                        hr_programa=?
                where id_canal_programa= ?
        
        `
        
        let resposta= await con.query (comando, [info.canal, info.programa, info.genero, info.hora, id])
        let registros= resposta[0]
        return registros.affectedRows
        
        }

        
    export async function DeletarCanalPrograma(id){

        const comando= `
         
                delete from tb_canal_programa
                where id_canal_programa= ?
        
        `
        
        let resposta= await con.query (comando, [id])
        let registros= resposta[0]
        return registros.affectedRows
        }

