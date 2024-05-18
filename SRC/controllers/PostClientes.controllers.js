import { pool } from '../db.js';

export const PostClientes = async(req, res) => {
    try {
        const correo = req.body.email;
        const nombre = req.body.name;
        const contrasena = req.body.password;
        const telefono = req.body.phone;
        const direccion = req.body.address;
        const sql = `INSERT INTO CLIENTES (NOMBRE, CORREO, CONTRASEÑA, TELEFONO, DIRECCION) VALUES (?, ?, ?, ?,?);`;
        const [results] = await pool.query(sql,[nombre, correo, contrasena, telefono, direccion]);
        if(results.affectedRows > 0){
            res.json({message:"Cliente agregado con exito"});
        }else{
            res.status(404).json({message:"No se pudo realizar el registro del cliente"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error al realizar el registro de cliente", error:error.message});
        
    }
};