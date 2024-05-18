import { pool } from '../db.js';

export const GetCarrito = async (req, res) => {
    try {
        const userId = req.params.userId;
        const sql = 'SELECT p.`ID-PEDIDOS`, p.CANTIDAD, p.PRECIO, p.STATUS, p.`FECHA_COTIZACION`, p.`FECHA_COMPLETADO`, c.`ID-CAMISAS-SERVICIOS`, cs.`ID-CAMISAS` AS `CS_ID_CAMISAS`, cs.`ID-SERVICIOS` AS `CS_ID_SERVICIOS`, cs.PRECIO AS `PRECIO-CAMISAS-SERVICIOS`, camisas.`ID-CAMISAS`, camisas.MODELO, camisas.TALLAS, camisas.COLOR, camisas.PRECIO AS CAMISAS_PRECIO, camisas.DESCRIPCION, camisas.STOCK AS CAMISAS_STOCK, camisas.IMAGEN AS CAMISAS_IMAGEN, servicios.`ID-SERVICIOS`, servicios.`TIPO-SERVICIO`, servicios.CALIDAD, servicios.PRECIO AS SERVICIOS_PRECIO, servicios.TAMAÑO, servicios.AREA,servicios.IMAGEN AS SERVICIOS_IMAGEN, pr.`NOMBRE` AS `NOMBRE-PRODUCTOS`, pr.`PRECIO` AS `PRECIO-PRODUCTOS`, pr.`DESCRIPCION` AS `DESCRIPCION-PRODUCTOS`, pr.`CATEGORIA` AS `CATEGORIA-PRODUCTOS`, pr.`STOCK` AS `STOCK-PRODUCTOS`, pr.`IMAGEN` AS `IMAGEN-PRODUCTOS` FROM PEDIDOS p LEFT JOIN `CAMISAS-SERVICIOS` c ON p.`ID-CAMISAS-SERVICIOS` = c.`ID-CAMISAS-SERVICIOS` LEFT JOIN `CAMISAS-SERVICIOS` cs ON p.`ID-CAMISAS-SERVICIOS` = cs.`ID-CAMISAS-SERVICIOS` LEFT JOIN `CAMISAS` camisas ON cs.`ID-CAMISAS` = camisas.`ID-CAMISAS` LEFT JOIN `SERVICIOS` servicios ON cs.`ID-SERVICIOS` = servicios.`ID-SERVICIOS` LEFT JOIN PRODUCTOS pr ON p.`ID-PRODUCTOS` = pr.`ID-PRODUCTOS` WHERE (p.`ID-CLIENTE` = ? AND (p.STATUS = "EN CARRITO"))';
        const [results] = await pool.query(sql,userId);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar Camisas', error: error.message });
    }
}