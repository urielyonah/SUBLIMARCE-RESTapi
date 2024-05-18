import { pool } from '../db.js';

export const LoginAdmin = async(req, res) => {
    try {
        const email = req.body.IS_email;
        const password = req.body.IS_password;
        const sql = 'SELECT * FROM ADMINISTRADORES WHERE CORREO = ? AND CONTRASEÑA = ?';
        const values = [email, password];
        const [results] = await pool.query(sql, values);
        
        if (results.length > 0){
            const user = results[0];
            res.redirect('inicio.html');
            /*res.json({message:"Acceso concedido", user});*/
        }else{
            res.json({message:"Credenciales incorrectas"});
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "error al ingresar al login", error:error.message});
    }
};