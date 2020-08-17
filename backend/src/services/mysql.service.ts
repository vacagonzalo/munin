import mysql from 'mysql';

const config = {
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'userpass',
    database: 'sindicato'
};

var pool: mysql.Pool = mysql.createPool(config);

pool.getConnection((err:mysql.MysqlError,connection:mysql.Connection) => {
    if(err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('La conexión a la DB se cerró');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('La base de datos tiene muchas conexiones');
                break;
            case 'ECONNREFUSED':
                console.error('La conexión fue rechazada');
        }
        if(connection) {
            connection.end(); //connection.release() genera error
        }
    }
});
export default pool;