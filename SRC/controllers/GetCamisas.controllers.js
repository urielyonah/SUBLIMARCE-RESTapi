import { pool } from '../db.js';

export const GetCamisas = async (req, res) => {
    try {
        const sql = 'SELECT * FROM CAMISAS';
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar Camisas', error: error.message });
    }
};
