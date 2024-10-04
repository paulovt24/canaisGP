export function ValidarCanal(info){

    if(!info.canal)
        throw new Error("O nome do canal é obrigatório!!");

        
    if (!info.numero)
     throw new Error("O numero do canal é obrigatório!!");


   if (isNaN(info.numero))
        throw new Error("Numero do canal é inválido!!");


   if (!info.aberto)
    throw new Error("É necessário informar se o canal é aberto ou não!!");
    }  
     

    export function validarCanalUnico(registros){
    
    if(registros.length ==0)
        throw new Error("Canal não encontrado");
    }
    
    export function validarCanalIgual(registros){
    
        if(registros.length > 0)
          throw new Error("Já existe um canal com esse nome");
    }
