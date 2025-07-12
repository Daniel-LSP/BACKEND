const express=require('express'); //imporatmso la libreria
require("dotenv").config();//esto carga las variables de entorno
const sequelize=require("./config/database")
const router = require('./routes/UsuarioRoute')



const app=express()//instanciando una aplicacion tipo express
//const port=3000;
//esto permite leer un JSON que llegue por body
const port=process.env.PORT
app.use(express.json())

app.use('/', router);

//sequelize sincroniza la base de datos con el proyecto
sequelize.sync().then(()=>{

    app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
})


}).catch((error)=>{
    console.log(`Error al conectar la base de datos ${error}`)
});



























//req: request
//res: response

// //ruta
// app.get("/",(req, res)=>{
//     res.send("backend con express")
// });

// const port=3000;


// //ruta usuarios
// let usuarios=[
//     {id:1, nombre:"Lewin", email:"lewindcg@gmail.com"},
//     {id:2, nombre:"Daniel", email:"danielcg@gmail.com"},
// ]

// //ruta para obtener el listado de usuarios
// app.get("/usuarios/todos",(req, res)=>{
//     res.json(usuarios)
// })

// //obtener usuarios por id
// app.get("/usuarios/buscar/:id",(req, res)=>{
//     const id = parseInt(req.params.id);
//     //console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuarios)
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"Usuario no encontrado"
//         })
//     }
//     res.json(usuario)
// })

// //Crear un nuevo usuario  CREATE
// app.post("/usuarios/crear", (req, res)=>{
//     //console.log(req.body)
//     const {nombre, email}=req.body;//define la variable
//     //console.log(nombre, email)
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email:email,
//     }
//     //guardar el objeto creado en la BBDD
//     usuarios.push(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"usuario creado correctamente",
//         usuarioCreado:nuevoUsuario
//     })
// })

// //Actualizar un usuario UPDATE
// app.put("/usuarios/actualizar/:id", (req,res)=>{
//     const {nombre, email}=req.body;
//     const id=parseInt(req.params.id);
//     //buscar
//     const usuario=usuarios.find(u=>u.id===id);
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"Usuario a modificar no encontrado"
//         })
//     }
//     const infoAnterior=usuario.nombre;//guardo los datos encontrados
//     usuario.email=email;
//     usuario.nombre=nombre;//modifica el campo nombre
//     res.status(202).json({
//         mensaje:"Usuario modificado correctamente",
//         infoAnterior:infoAnterior,
//         infoNueva:usuario
//     })
// })


// //DELETE
// app.delete("/usuarios/eliminar/:id", (req,res)=>{
//     //capturar el id pasado por parametros
// const id=parseInt(req.params.id);
//     //encontrar el indice correspondiente al id entregado
// const index=usuarios.findIndex(user=>user.id===id)
//     //eliminar de la lista la info del indice encontrado
// //console.log(index)
// if(index===-1){
//     res.status(404).json({
//         mensaje:`Usuario con id ${id} no encontrado`
//     })
// }else{
// usuarios.splice(index)
// res.status(200).json({
//     mensaje:`Usuario con id ${id} eliminado correctamente`
// })
// }
// })