
import connection from '../database/database.js';
import { DataTypes } from 'sequelize';

const AnimeModel = connection.define('animes', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default AnimeModel;