const Sequelize = require('sequelize');
const db = require('../databases/dbConnection');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    is_verify_mail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    password: {
        type: Sequelize.STRING,
    },
    trans_password: {
        type: Sequelize.STRING
    },
    active: {
        type: Sequelize.BOOLEAN,
    },
    role_id: {
        type: Sequelize.INTEGER
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
}, {
    tableName: 'users',
    timestamps: true,
    freezeTableName: true
});

module.exports = User;
