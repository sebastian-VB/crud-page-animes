
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const loginUser = (req, res)=>{
    
    const { usuario, contrasena } = req.body;

    UserModel.findOne({
        where: { usuario: usuario }

    }).then(user=> {

        if(!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        if(!bcrypt.compareSync(contrasena, user.contrasena)) return res.status(401).json({ msg: 'Contraseña incorrecta' });

        let token = jwt.sign({ id: user.id, nombre: user.nombre, usuario: user.usuario, rol: user.rol }, config.secret, {
            expiresIn: config.expires
        });

        res.json({ user:{
            id: user.id, 
            nombre: user.nombre, 
            usuario: user.usuario, 
            rol: user.rol
        }, token:token });

    }).catch(error =>{
        return res.status(500).json(error);
    });

};

const registerUser = (req, res)=>{
    
    const { nombre, usuario, contrasena } = req.body;
    let rol= 'user';

    let passwordH = bcrypt.hashSync(contrasena, Number.parseInt(config.rounds));

    UserModel.create({
        nombre,
        usuario,
        rol,
        contrasena: passwordH
    }).then(user =>{

        let token = jwt.sign({ id: user.id, nombre: user.nombre, usuario: user.usuario, rol: user.rol }, config.secret, {
            expiresIn: config.expires
        });

        return res.json({ user:{
            id: user.id, 
            nombre: user.nombre, 
            usuario: user.usuario, 
            rol: user.rol
        }, token:token });

    }).catch(error =>{
        return res.status(500).json(error);
    });
};

const listUser = (req, res)=>{

    let users = [];

    UserModel.findAll().then(user =>{

        user.forEach(userOnly => {
            users.push({
                id: userOnly.id,
                nombre: userOnly.nombre,
                usuario: userOnly.usuario
            });
        });

        return res.json(users);

    }).catch(error => {
        return res.status(500).json(error);
    });

}; 

const listOnlyUser = (req, res)=>{
    
    const {id} = req.params;

    if(!id) return res.status(404).json({ msg: 'Parámetros mal enviados' });

    UserModel.findOne({ 
        where: { id: id} 

    }).then(user =>{

        if(!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        return res.json({ user: {
            id: user.id, 
            nombre: user.nombre, 
            usuario: user.usuario,
        }});

    }).catch(error =>{
        return res.status(500).json(error);
    });
};

const deleteUser = (req, res)=>{
    
    const {id} = req.params;

    if(!id) return res.status(404).json({ msg: 'Parámetros mal enviados' });

    UserModel.destroy({
        where: { id: id }

    }).then(user =>{

        if(!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        return res.status(200).json({ masgCo: 'Usuario eliminado correctamente' });

    }).catch(error =>{
        return res.status(500).json(error);
    });
};

const updateUser = (req, res)=>{
    
    const {id} = req.params;
    const { nombre, usuario, contrasena } = req.body;

    let passwordH = bcrypt.hashSync(contrasena, Number.parseInt(config.rounds));

    UserModel.update({ nombre, usuario, contrasena: passwordH }, {
        where: { id: id }

    }).then(user =>{

        if(!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        return res.status(200).json({ masgCo: 'Usuario actualizado correctamente' });

    }).catch(error =>{
        return res.status(500).json(error);
    });
};

export default {
    listUser,
    listOnlyUser,
    registerUser,
    loginUser,
    deleteUser,
    updateUser
}
