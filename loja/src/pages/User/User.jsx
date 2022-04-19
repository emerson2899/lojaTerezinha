import React from "react";
import { Titulo, Conteudo } from "../../estilo";


function User (){


    return(<> 
    <Conteudo>
    <Titulo> < h1 className="titulo">Loja</h1> <br/> </Titulo>

    <h2>Faça seu login ou registre-se</h2>

    <div>
<form action="">
    <label for="name">Nome Completo:</label> <br/>
    <input type="text"/> <br/>
    <label for="phone">Telefone:</label><br/>
    <input type="telephone"/><br/>
    <label for="">email:</label><br/>
    <input type="email"/><br/>
    <label for="">CPF</label><br/>
    <input type="number"/><br/>
    <label for="">Data de nascimento</label><br/>
    <input type="date"/><br/>
    <label>Cadastre sua senha para acessar o portal</label><br/>
    
    <input type="password"/>
</form>
    </div>
    </Conteudo>
    
    
    
    </>);
}
export default User