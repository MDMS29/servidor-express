// ----- CONSULTA DE UN ARCHIVO JSON SIN ASYNC() -----
// import archivo from '../index.json' assert { type: 'json' };
// const home = (req, res) => {
//     res.send(`Holi ${consulta()}`);
// }
// const consulta = () => {
//     const respuesta =  archivo.json.nombre
//     console.log(respuesta);
//     return respuesta;
// }

const operacion = (req, res) => {
    const {numero} = req.params;
    let resultado = eval(numero).toString()

    res.json({
        resultado
    })
}




export { /*home,*/ operacion }