import express from 'express';
import morgan from 'morgan';

const servidor = express();
const PORT = 5000;

servidor.use(express.json());
servidor.use(morgan('dev'));

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
