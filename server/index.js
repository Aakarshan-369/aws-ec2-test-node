import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

//components
import Connection from './connection/db.js';
import Route from './routes/Route.js';
import https from 'https' ;
import DefaultData from './default.js';
import fs from 'fs'; 

const key = fs.readFileSync('/home/ec2-user/aws-ec2-test-node/server/private.key') ; 
const cert = fs.readFileSync('/home/ec2-user/aws-ec2-test-node/server/certificate.crt');

const cred = {
    key: key, 
    cert: cert
}

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 8000;

Connection(username, password);


const httpsServer = https.createServer(cred, app);
httpsServer.listen(8443, () => console.log(`HTTPS server is running successfully on PORT 8443`));

app.listen(PORT, () => console.log(`HTTP server is running successfully on PORT ${PORT}`));
//DefaultData();