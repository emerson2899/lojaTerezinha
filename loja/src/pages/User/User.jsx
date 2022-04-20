import React from "react";
import { Titulo, Conteudo, Formulario } from "../../estilo";


function User (){


    return(<> 
    <Conteudo>
    <Titulo> < h1 className="titulo">Loja</h1> <br/> </Titulo>

    <h2>Registre-se em nossa plataforma</h2>

    <Formulario>

   
<form action="cadastrar()">
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
    
    <input type="password"/> <br/>
    <button>Cadastrar</button>
</form>
</Formulario>
    
    
    </Conteudo>
    
    
    
    </>);
}
export default User