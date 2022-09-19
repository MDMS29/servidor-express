// ----- CONSULTA DE UN ARCHIVO JSON SIN ASYNC() -----
import archivo from '../index.json' assert { type: 'json' };
// const home = (req, res) => {
//     res.send(`Holi ${consulta()}`);
// }
// const consulta = () => {
//     const respuesta =  archivo.json.nombre
//     console.log(respuesta);
//     return respuesta;
// }

const operacion = (req, res) => {
    const { json } = req.params; //Toma los valores enviados
    const operacion = JSON.parse(json) //Convertimos a objeto el JSON
    let resultado = eval(operacion.numero).toString()//Operaciones
    res.json({
        resultado
    })
}




export { /*home,*/ operacion }