import { pool } from '../db.js';

export const GetClientes = async(req, res) => {
    try {
        const sql = 'SELECT * FROM CLIENTES';
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar los clientes', error: error.message });
    }
}