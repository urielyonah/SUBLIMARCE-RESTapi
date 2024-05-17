import { pool } from '../db.js';

export const GetProductos = async(req, res)=>{
    try {
        const sql = 'SELECT * FROM PRODUCTOS';
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error en la consulta", error:error.message})
    }
}