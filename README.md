# Linkorn CRM test application

## Frontend:
React, Redux, React Router

## Backend:
Node, Express, Sequelize, SQLite3 (or any RDBMS)

### run API server:
```
cd api/
npm install
npm run start
```

### run app:
```
cd app/
npm install
npm run start
```


### API Endpoints:
* Get clients with nested contracts and services : `GET /api/clients`

### Sequelize auto migrations:
```
node ./node_modules/sequelize-auto-migrations/bin/makemigration --preview
node ./node_modules/sequelize-auto-migrations/bin/makemigration --name <migration_name>
node ./node_modules/sequelize-auto-migrations/bin/runmigration --rev <revision>
```
