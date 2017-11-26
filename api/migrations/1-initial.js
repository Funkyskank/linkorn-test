'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Clients", deps: []
 * createTable "Contracts", deps: [Clients]
 * createTable "Services", deps: [Contracts]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial",
    "created": "2017-11-26T15:57:59.853Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Clients",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "patronymic": {
                    "type": Sequelize.STRING
                },
                "email": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isEmail": true
                    }
                },
                "city": {
                    "type": Sequelize.STRING
                },
                "notes": {
                    "type": Sequelize.TEXT
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Contracts",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "number": {
                    "type": Sequelize.STRING
                },
                "type": {
                    "type": Sequelize.ENUM('realty', 'vehicle'),
                    "allowNull": false
                },
                "status": {
                    "type": Sequelize.ENUM('active', 'disabled', 'pending')
                },
                "dateFrom": {
                    "type": Sequelize.DATE
                },
                "dateTo": {
                    "type": Sequelize.DATE
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "clientId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Clients",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Services",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "date": {
                    "type": Sequelize.DATE
                },
                "isActive": {
                    "type": Sequelize.BOOLEAN
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "contractId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Contracts",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
