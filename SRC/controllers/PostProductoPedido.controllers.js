import { pool } from '../db.js';

export const PostProductoPedido = async(req, res) => {
    try {
        const productoId = req.body.idproducto;
        const cantidad = req.body.cantidad;
        const precio = req.body.precio;
        const userId = req.body.idcliente;
        const sql = `INSERT INTO PEDIDOS (\`ID-CAMISAS-SERVICIOS\`, \`ID-PRODUCTOS\`, \`CANTIDAD\`, \`PRECIO\`, \`STATUS\`, \`ID-CLIENTE\`, \`FECHA_COTIZACION\`, \`FECHA_COMPLETADO\`) VALUES (NULL, ?, ?, ?, 'EN CARRITO', ?, NULL, NULL);`;
        const [results] = await pool.query(sql, [productoId, cantidad, precio, userId]);
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