import con from "./connection.js";

export async function ConsultarCanal(){

const comando= `
 
            select  id_canal    id,
                    nm_canal    canal,
                    nr_canal    numero,
                    bt_aberto   aberto
            from tb_canal;

`

let resposta= await con.query (comando)
let registros= resposta[0]
return registros;

}

export async function ConsultarCanalPorNome(canal){

    const comando= `
     
                select  nm_canal    canal,
                        nr_canal    numero,
                        bt_aberto   aberto
                from tb_canal
                where nm_canal=?;
    `
    
    let resposta= await con.query (comando, [canal])
    let registros= resposta[0]
    return registros;
    
    }


export async function InserirCanal(info){

    const comando= `
     
              insert into tb_canal (nm_canal, nr_canal, bt_aberto)
              values(?, ?, ?);
    `
    
    let resposta= await con.query (comando, [info.canal, info.numero, info.aberto])
    let registros= resposta[0]
    return registros.insertId
    
    }

    export async function AlterarCanal(id,info){

        const comando= `
         
              update tb_canal
                set  nm_canal=?,
                     nr_canal=?,
                     bt_aberto=?
              where id_canal= ?
        
        `
        
        let resposta= await con.query (comando, [info.canal, info.numero, info.aberto, id])
        let registros= resposta[0]
        return registros.affectedRows
        
        }

        
    export async function DeletarCanal(id){

        const comando= `
         
                delete from tb_canal
                where id_canal=?
        
        `
        
        let resposta= await con.query (comando, [id])
        let registros= resposta[0]
        return registros.affectedRows
        }