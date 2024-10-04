import canalController from './controller/canalController.js'
import usuarioController from './controller/usuarioController.js'
import canalProgramaController from './controller/canalProgramaController.js'
import programaFavoritoController from './controller/programaFavoritoController.js'

export default function AdicionarRotas(servidor){

servidor.use(canalController, usuarioController, canalProgramaController, programaFavoritoController)

}