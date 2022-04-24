import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import apiRoutes from './routes/api';
import {mongoConnect} from './dataBase/mongo'

dotenv.config();

mongoConnect();

const server = express();
server.get('/',(req: Request, res: Response) =>{
    res.send('Olá mundo');
}
)
/*
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);*/


server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));
server.use('/api', apiRoutes);

server.use((req: Request, res:Response)=>{
    res.status(404);
    res.json({error: 'Ending point não encontrado.'});
})

server.listen(process.env.PORT);

