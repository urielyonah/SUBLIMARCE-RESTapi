import { pool } from '../db.js';

export const EditarPerfil = async (req, res) => {
    try {
        const userId = req.params.userId;
        const datos = req.body;
        const imagen = req.file ? req.file.path : null;
        console.log(userId);
        
        let sql = 'UPDATE CLIENTES SET CORREO = ?, CONTRASEÑA = ?, NOMBRE = ?, TELEFONO = ?, DIRECCION = ?';
        const params = [datos.email, datos.password, datos.name, datos.phone, datos.address];
        if (imagen) {
            sql += ', IMAGEN = ?';
            params.push(imagen);
        }
        sql += ' WHERE `ID-CLIENTE` = ?';
        params.push(userId);

        const [result] = await pool.query(sql, params);
        console.log(result);

        if (result.affectedRows > 0) {
            res.json({message:"Perfil editado con exito"});
        } else {
            res.status(404).json({ message: 'No se encontró el usuario con el ID proporcionado' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar el usuario', error: error.message });
    }  
};