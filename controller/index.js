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
    const { json } = req.params;
    console.log(json)
    const operacion = JSON.parse(json)
    let resultado = eval(operacion.numero.resultado).toString()
    res.json({
        resultado
    })
}




export { /*home,*/ operacion }