import express  from "express";

const servidor = express();

const PUERTO = 5000;

servidor.get("/", (req, res) => {
    res.json({
        menssage: "Bienvenido a mi API"
    });
});

servidor.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});
