import { ValidarUsuario } from "../vallidation/usuario/usuarioVallidation.js";
import { InserirUsuario } from "../repository/usuarioRepository.js";

export function SalvarUsuario(info){

ValidarUsuario(info)

let id= InserirUsuario(info)
return id;

}