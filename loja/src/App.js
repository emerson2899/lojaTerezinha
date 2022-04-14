import React from "react"
import './App.css';
import { AreaGolobal, Container, Menu, PageBody, LinkMenu, MenuIcon } from "./estilo";
import {Route, Router, Switch, useHistory, Link} from 'react-router-dom';
import { Products } from "./pages/Products/Products";
import { User } from "./pages/User/User";
import Routes from "./routes";
import MenuItem from "./MenuItem";



function App() {
  return (
   
   <Container>
  <Menu>
 <Routes/>
  </Menu>
  </Container>



   

   
  );
}

export default App;
