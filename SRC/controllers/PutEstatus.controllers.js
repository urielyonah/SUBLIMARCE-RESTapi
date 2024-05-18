import { pool } from '../db.js';

export const PutEstatus = async(req, res) => {
    try {
        const pedidosIDS = req.body.pedidoIds;
        const fechaCotizacion = req.body.fecha;
        const nuevoEstado = 'PENDIENTE';
        const placeholders = pedidosIDS.map(() => '?').join(', ');
        const sql = `UPDATE PEDIDOS SET STATUS = ?, FECHA_COTIZACION = ? WHERE \`ID-PEDIDOS\` IN (${placeholders})`;
        const [results] = pool.query(sql,[nuevoEstado, fechaCotizacion, ...pedidosIDS]);
        console.log(results);
        if (results.affectedRows > 0){
            res.json({message:"Estatus editado con exito"});
        }else{
            res.status(404).json({message:"No se pudo realizar la edicion de estatus"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al editar el estatus", error:error.message});
    }
};