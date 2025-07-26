const Usuario=require('../models/Usuario');

exports.obtenerUsuarios= async(req, res)=>{

    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    }catch(error){
        return res.json({mensaje: error});
    }
}

exports.obtenerUsuariosPorId= async(req, res)=>{
    try{
const id = parseInt(req.params.id);
    const usuario= await Usuario.findByPk(id);//si existe lo encuentra
    if(!usuario){
        return res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }
        res.json(usuario);//si encuentra el usuario en BD entregue los datos
    }catch(error){
        return res.status(401).json({mensaje:error.message})
    }
}


