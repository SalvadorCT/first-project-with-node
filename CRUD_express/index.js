import express  from "express";


const servidor = express();

// Configurando la forma en la cual puede enviar informacion por el body
// use() es un metodo de express que permite agregar funcionalidades a express
// use() recibe middleware (intemediario entre el cliente y el servidor)
servidor.use(express.json());
// express.json() es un middleware que permite que el servidor entienda los datos que vienen en formato json
//convierte la informacion entrante del body y la transforma en un json legible mediante req.body

const PUERTO = 5000;

servidor.get("/", (req, res) => {
    res.json({
        menssage: "Bienvenido a mi primera API en express"
    });
});

servidor.post('/registro', (req, res) => {
    // req => la informacion que envia el cliente
    // res => la respuesta que le enviamos al cliente
    console.log(req.body);
    // es IMPORTANTE siempre enviar una respuesta al cliente
    return res.json({
        menssage: "Usuario registrado correctamente",
    });
    // No se puede enviar mas de una respuesta
    // sI SE UTILIZA return, ningun codigo siguiente se ejecutara
});

servidor.put('/actualizar-usuario/:id', (req, res) => {
    // Para acceder a los parametros seteados en la URLusamos req.params
    console.log(req.params);
    res.json({
        menssage: "Usuario actualizado correctamente",
    });
});

servidor.get("/buscar-usuario",(req, res) => {
    // para acceder a los query params usamos req.query
    console.log(req.query);
    res.json({
        menssage: "No se encontro el usuario",
    });
});

// si queremos usar el mismo endpoint para diferentes metodos HTTP (GET, POST, PUT, DELETE)
servidor
    .route("/productos")
    .get((req, res) => {
        res.json({
            menssage: "soy el metodo GET",
        });
    })
    .post((req, res) => {
        res.json({
            menssage: "soy el metodo POST",
        });
    })
    .delete((req, res) => {
        res.json({
            menssage: "soy el metodo DELETE",
        });
    });


servidor.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});
