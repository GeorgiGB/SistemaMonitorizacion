const conexion = require('../config/conexion_bd.js');
const globales = require('./globales');

async function ver_acciones(json){
    globales.msg(json)
    //si el estado esta vacio, mandara los registros del dia actual
    let res_acciones = await conexion.query("SELECT * FROM ver_acciones('"+JSON.stringify(json)+"');");

    globales.msg(res_acciones.rows[0].jresultado)
    let jresultado = res_acciones.rows[0].jresultado;
    return jresultado;
}

module.exports = ver_acciones;