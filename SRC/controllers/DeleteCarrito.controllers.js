import { pool } from '../db.js';

export const DeleteCarrito = async (req, res) => {
    try {
        const pedidoId = req.params.pedidoId;
        const sql = 'DELETE FROM PEDIDOS WHERE `ID-PEDIDOS` = ?';
        const values = [pedidoId];
        
        const result = await pool.query(sql, values);
        
        if (result.affectedRows > 0) {
            res.json({ message: 'Pedido eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No se encontró el pedido con el ID proporcionado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el pedido', error: error.message });
    }
};
