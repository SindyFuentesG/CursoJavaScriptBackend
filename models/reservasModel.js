const Sequelize = require('sequelize');
const conn = require ('../database/connection');

module.exports = conn.define('reservas', {
    idReserva:{type: Sequelize.SMALLINT, primaryKey: true},
    namePersona: Sequelize.STRING,
    correoPersona: Sequelize.STRING,
    fechaReserva: Sequelize.STRING ,
    horaReserva: Sequelize.STRING ,
    idServicio: Sequelize.SMALLINT

},{
    timestamps: false
})