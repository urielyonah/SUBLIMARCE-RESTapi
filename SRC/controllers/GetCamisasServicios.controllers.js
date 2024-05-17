import { pool } from '../db.js';

export const GetCamisasServicios = async (req, res) => {
    try {
        const CamisasServiciosId = req.params.CamisasServiciosId;
        const sql = 'SELECT camisas.`ID-CAMISAS`, camisas.MODELO, camisas.TALLAS, camisas.COLOR, camisas.PRECIO, camisas.DESCRIPCION, camisas.STOCK, camisas.IMAGEN AS CAMISAS_IMAGEN, servicios.`ID-SERVICIOS`, servicios.`TIPO-SERVICIO`, servicios.TAMAÑO, servicios.CALIDAD, servicios.AREA, servicios.PRECIO AS SERVICIOS_PRECIO, servicios.IMAGEN AS SERVICIOS_IMAGEN FROM `CAMISAS-SERVICIOS` c LEFT JOIN `CAMISAS` camisas ON c.`ID-CAMISAS` = camisas.`ID-CAMISAS` LEFT JOIN `SERVICIOS` servicios ON c.`ID-SERVICIOS` = servicios.`ID-SERVICIOS` WHERE c.`ID-CAMISAS-SERVICIOS` = ?;';
        const [results] = await pool.query(sql, CamisasServiciosId);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar Camisas', error: error.message });
    }
}