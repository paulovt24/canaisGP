import { ValidarCanal, validarCanalIgual} from "../vallidation/canal/canalVallidation.js";
import { InserirCanal, ConsultarCanalPorNome } from "../repository/canalRepository.js";

export function SalvarCanal(info){

ValidarCanal(info)

let registros= ConsultarCanalPorNome(info.canal)
validarCanalIgual(registros)

let id= InserirCanal(info)
return id;
}
