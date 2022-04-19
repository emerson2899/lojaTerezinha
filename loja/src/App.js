import React from "react"
import './App.css';
import { AreaGolobal, Container, Menu, PageBody, LinkMenu, MenuIcon, Conteudo } from "./estilo";
import {Route, Router, Switch, useHistory, Link, BrowserRouter} from 'react-router-dom';
import { Products } from "./pages/Products/Products";
import { User } from "./pages/User/User";

import MenuItem from "./MenuItem";
import { Home } from "./pages/Home/Home";
import Vendas from "./pages/Vendas/Vendas";
import Clientes from "./pages/Clientes/Clientes";




function App() {  
  var isLogin = true

  return (
    <div className="fundo">
      <BrowserRouter>
<Menu>
  <nav>
    <ul>
      <li>
        <Link to='/Home'>Inicio</Link>
      </li>
      <li>
        <Link to='/Products'>Produtos</Link>
      </li>
      { isLogin == true  && <div>
      <li>
        <Link to='/Vendas'>Vendas</Link>
      </li>
      <li>
        <Link to='/Clientes'>Clientes</Link>
      </li> </div> }
      <li>
        <Link></Link>
      </li>
    </ul>
  </nav>
</Menu>










      <Route component={Home} path='/' exact />
      <Route component={Products} path='/Products' />
      <Route component={Vendas} path='/Vendas' />
      <Route component={Clientes} path='/Clientes' />


      
      
      </BrowserRouter> 

  </div>

   
  );
}

export default App;
