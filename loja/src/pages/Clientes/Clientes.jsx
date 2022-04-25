import React from "react";
import {Conteudo, Titulo, GradeDescription } from '../../estilo';


 const Clientes = () =>{

    return(
        <>
        <Conteudo>   
        <Titulo> < h1 className="titulo">Loja</h1> <br/> </Titulo>  

        

        <h1>clientes</h1>
        <h3>Selecione o cliente desejado</h3>
        <GradeDescription>
        <div>
            <h3>Name:</h3><br/>            
            <h4>Telefone</h4>
            <h4>Financeiro: </h4>
            <h4>Debitos: </h4>
            <h4>Crédito: </h4>
        </div>
        </GradeDescription>

        <GradeDescription>
        <div>
            <h3>Name:</h3><br/>            
            <h4>Telefone</h4>
            <h4>Financeiro: </h4>
            <h4>Debitos: </h4>
            <h4>Crédito: </h4>
        </div>
        </GradeDescription>

        
        </Conteudo>
        </>
    );
}

export default Clientes
