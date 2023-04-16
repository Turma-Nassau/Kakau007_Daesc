const Sequelize = require('sequelize')

// conexão com banco de dados MySql
// utilizar o workbench
const sequelize = new Sequelize('daesc', 'root', '', {
    host: "localhost",   //onde vamos rodar o servidor
    dialect: 'mysql',     // banco de dados utilizado
    query: { raw: true }

})

// Fim conexão


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


