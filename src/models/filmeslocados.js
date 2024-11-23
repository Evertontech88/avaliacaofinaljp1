const database = require('../config/database')

 
class ModelCliente {

    constructor() {

        this.model = database.db.define('filmes',{
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idFilme: {
                type:database.db.Sequelize.STRING
            },
            
            IdCliente: {
                type: database.db.Sequelize.STRING
            },
            dataLocacao: {
                type: database.db.Sequelize.STRING
            },
            dataDevolucao: {
                type: database.db.Sequelize.STRING
            }
        })
    }
 }

module.exports = new ModelFilmelocados().model