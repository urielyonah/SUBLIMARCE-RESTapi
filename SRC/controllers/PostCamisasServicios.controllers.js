import { pool } from '../db.js';

export const PostCamisasServicios = async(req,res) => {
    try {
        const { camisasId, servicioId, precio } = req.body;
        const sql = `INSERT INTO \`CAMISAS-SERVICIOS\` (\`ID-CAMISAS\`, \`ID-SERVICIOS\`, \`PRECIO\`) VALUES (?, ?, ?)`;
        const [results] = pool.query(sql, [camisasId, servicioId, precio]);
        if (results.affectedRows > 0){
            res.json({message:"Servicio de camisa realizado con exito"});
        }else{
            res.status(404).json({message:"No se pudo realizar el servicio de la camisa"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al realizar el servicio de camisa", error:error.message});
    }
}