import { pool } from '../db.js';

export const PostPedido = async(req, res) => {
    try {
        const {camisasServiciosId, productoId, cantidad, precio, status, clienteId} = req.body;
        
        const sql = `INSERT INTO PEDIDOS (ID-CAMISAS-SERVICIOS, ID-PRODUCTOS, CANTIDAD, PRECIO, STATUS, ID-CLIENTE) VALUES (?, ?, ?, ?, ?, ?);`;
        const [results] = await pool.query(sql, [camisasServiciosId, productoId, cantidad, precio, status, clienteId]);
        console.log(results);
        if (results.affectedRows > 0){
            res.json({message:"Pedido realizado con exito"});
        } else {
            res.status(404).json({message:"No se pudo realizar el pedido"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al realizar el pedido", error: error.message})
    }
}