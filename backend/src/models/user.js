
import connection from '../database/database.js';
import { DataTypes } from 'sequelize';

const UserModel = connection.define('users', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: {
                args: [2, 255],
                msg: 'El nombre debe tener mínimo 2 caracteres'
            }
        }
    },
    rol:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:{
                msg: 'El email tiene que ser correo válido'
            }
        }
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args: [6, 255],
                msg: 'La contraseña tiene que tener como mínimo 6 caracteres'
            }
        }
    }
});

export default UserModel;
