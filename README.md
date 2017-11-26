# Linkorn CRM test application

## Frontend:
React, Redux, React Router
*...coming soon*

## Backend:
Node, Express, Sequelize, SQLite3 (or any RDBMS)

### run server:
```
cd api/
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
