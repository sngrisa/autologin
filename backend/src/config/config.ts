import { portsFrontend } from "./ports";
import express, { Response, Request, NextFunction } from 'express';
import cors from "cors";
import { Socket, Server } from "socket.io";
import http from "http";
import routes from "../routes/routes";
import Mysql from "./db/connetMysql";


const urlFrontendOrigin: string = `http://localhost:${portsFrontend}`;
const portBackend: number = 3500;

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: urlFrontendOrigin,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    }
});

app.use(express.json());

app.use(cors({ origin: urlFrontendOrigin }));

app.use((_req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use('/api', routes);

const mysql = new Mysql();


io.on('connection', (socket: Socket) => {
    socket.emit('welcome', { msg: 'Hello from server' });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const startServer = async() =>{
    try{
        await mysql.getSequelize().sync();
        server.listen(portBackend, (): void => {
            console.info("Connect Express with port: " + portBackend);
        });
    }catch(err: unknown){
        console.error(err);
    }
}

startServer();

