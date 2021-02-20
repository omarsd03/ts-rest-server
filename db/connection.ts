import { Sequelize } from 'sequelize';

const db = new Sequelize('node_users', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;