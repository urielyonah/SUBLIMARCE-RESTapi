import express from 'express';
import session from 'express-session';

import DeleteCarritoRouter from './routes/DeleteCarrito.routes.js';
import GetCamisasRouter from './routes/GetCamisas.routes.js';
import EditarPerfil from './routes/EditarPerfil.routes.js';
import GetCamisasServiciosRouter from './routes/GetCamisasServicios.routes.js';
import GetCarritoRouter from './routes/GetCarrito.routes.js';
import GetPedido from './routes/GetPedido.routes.js';
import GetClientes from './routes/GetClientes.routes.js';
import GetProductos from './routes/GetProductos.routes.js';
import PostProductoPedido from './routes/PostProductoPedido.routes.js';
import Login from './routes/Login.routes.js';
import LoginAdmin from './routes/LoginAdmin.routes.js';
import PostCamisasServicios from './routes/PostCamisasServicios.routes.js';
import PostPedido from './routes/PostPedido.routes.js';
import PostServicio from './routes/PostServicio.routes.js';
import PostClientes from './routes/PostClientes.routes.js';
import PutEstatus from './routes/PutEstatus.routes.js';

const app = express();

app.use(express.json());
app.use(session({
    secret:'secreto',
    resave:false,
    saveUninitialized:false
}));

app.use('/DeleteCarrito', DeleteCarritoRouter);
app.use('/GetCamisas', GetCamisasRouter);
app.use('/EditarPerfil', EditarPerfil);
app.use('/GetCamisasServicios', GetCamisasServiciosRouter);
app.use('/GetCarrito', GetCarritoRouter);
app.use('/GetPedido', GetPedido);
app.use('/GetClientes', GetClientes);
app.use('/GetProductos', GetProductos);
app.use('/PostProductoPedido', PostProductoPedido);
app.use('/Login', Login);
app.use('/LoginAdmin', LoginAdmin);
app.use('/PostCamisasServicios', PostCamisasServicios);
app.use('/PostPedido', PostPedido);
app.use('/PostServicio', PostServicio);
app.use('/PostClientes', PostClientes);
app.use('/PutStatus', PutEstatus);

app.listen(4000);
console.log("Server running on port 4000");