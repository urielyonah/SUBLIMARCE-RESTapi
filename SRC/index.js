import express from 'express';
import DeleteCarritoRouter from './routes/DeleteCarrito.routes.js';
import GetCamisasRouter from './routes/GetCamisas.routes.js';
import EditarPerfil from './routes/EditarPerfil.routes.js';
import GetCamisasServiciosRouter from './routes/GetCamisasServicios.routes.js';
import GetCarritoRouter from './routes/GetCarrito.routes.js';

const app = express();

app.use(express.json());

app.use(DeleteCarritoRouter);
app.use(GetCamisasRouter);
app.use(EditarPerfil);
app.use(GetCamisasServiciosRouter);
app.use(GetCarritoRouter);

app.listen(4000);
console.log("Server running on port 4000");