import { connect } from 'mongoose';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () =>{
    try{
        console.log("Conectando ao banco de dados...");
        await connect(process.env.MONGO_URL as string)
        console.log("Banco de dados conectado")
    } catch(error){
        console.log("Erro de conexão: ",error)
    }
}