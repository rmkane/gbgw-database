# GBGW Database

## Installation

Installation of the software requires an installation of Node JS.

### Server

The server is built using `npm`. It utilizes `express` for the REST API and `mysql` with `sequalize` for the database access layer.

```shell script
cd server
npm install
```

### Client

The client is built using `yarn` and it utilizes `react` for the UI and works with the server API to issue CRUD operations.

```shell script
cd client
yarn install
```

## Starting

It is recommended that the client and server is started in separate terminals.

### Server

```shell script
cd server
npm start
```

### Client

```shell script
cd client
yarn start
```

## Running

The API will run on port `8080` and the UI is available on port `8081`. 

### Server

```shell script
http://localhost:8080/api/tutorials
```

### Client

```shell script
http://localhost:8081/tutorials
```

## Developer Tips

To generate the sequalize from an existing MySQL database, run the following:

```shell script
npm install -g sequelize-auto
npm install -g mysql

sequelize-auto -h localhost -d gbgw -u root -x mysql -p 3306 --dialect mysql -o models_tmp
```

After the models have been generated, they can be cleaned-up.

This command was suggested here: https://stackoverflow.com/a/25983669/1762224