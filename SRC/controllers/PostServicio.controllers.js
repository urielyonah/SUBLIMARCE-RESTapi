import { pool } from '../db.js';

export const PostServicio = async(req, res) => {
    try {
        const { servicio, tamano, calidad, area, precio } = req.body;
        const imagen = req.file ? req.file.path : null;
        const sql = `INSERT INTO SERVICIOS (\`TIPO-SERVICIO\`, \`tamaño\`, \`calidad\`, \`AREA\`, \`PRECIO\`, \`IMAGEN\`) VALUES (?, ?, ?, ?, ?, ?)`;
        const [results] = pool.query(sql,[servicio, tamano, calidad, area, precio, imagen]);
        if (results.affectedRows > 0){
            res.json({message:"Servicio realizado con exito"});
        } else {
            res.status(404).json({message:"No se pudo realizar el servicio con exito"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al realizar el servicio", error:error.message});
    }
};