
import { Sequelize } from 'sequelize';
import config from '../config.js';

const connection = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql'
});

export default connection;