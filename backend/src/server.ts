import express from 'express';
import debitosAutomaticos from './routes/debitos-automaticos';

const app: express.Application = express();
const port: number = 5000;

var cors = require('cors');
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), () => {
    console.log('server running on port ' + app.get('port'));
});

app.use(cors());
app.use(debitosAutomaticos);