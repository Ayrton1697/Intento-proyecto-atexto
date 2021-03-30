import express from 'express';
import bodyParser, { json } from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import routes from './routes/index.js';
const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit: "20mb"}));
app.use(cors());
app.use(fileUpload());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Conexión a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi', {
    useNewUrlParser: true
});

// Rutas de la app
app.use('/', routes());

var port = 3700
app.listen(port, function(){
    console.log('Listening on port '+ port); //Listening on port 8888
});

