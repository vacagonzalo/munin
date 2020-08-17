import express from 'express';
import pool from '../services/mysql.service'

const debitosAutomaticos: express.Router = express.Router();


// Espera un parámetro con el formato 2020-05-01
debitosAutomaticos.get('/debitos-automaticos/:fecha', (req, res) => {
    pool.query('SELECT * FROM infoDebitos WHERE infoDebitos.fecha=?',[req.params.fecha], (err, result, fields) => {
        console.log(req.params.fecha);
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    })
});

debitosAutomaticos.post('/debitos-automaticos', (req, res) => {
    
});

export default debitosAutomaticos;