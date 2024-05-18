import { pool } from '../db.js';

export const Login = async(req, res) => {
    try {
        const {Email, Contrasena} = req.body;
        const sql = 'SELECT * FROM CLIENTES WHERE CORREO = ? AND CONTRASEÑA = ?';
        const values = [Email, Contrasena];
        const [results] = await pool.query(sql, values);
        
        if (results.length > 0){
            const user = results[0];
            req.session.userId = user.id_alumno;
            res.json({message:"Acceso concedido", user});
        }else{
            res.json({message:"Credenciales incorrectas"});
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "error al ingresar al login", error:error.message});
    }
};