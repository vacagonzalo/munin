import express from 'express';
import pool from '../services/mysql.service'

const debitosAutomaticos: express.Router = express.Router();


//"SELECT * FROM infoDebitos WHERE infoDebitos.fecha="2020-05-01";
debitosAutomaticos.get('/debitos-automaticos', (req, res) => {
    pool.query('SELECT * FROM infoDebitos WHERE infoDebitos.fecha="2020-05-01"', (err, result, fields) => {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    })
});

export default debitosAutomaticos;