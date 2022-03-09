import React from "react"
import './App.css';
import { AreaGolobal, Container, Menu, PageBody } from "./estilo";
import {Route, Router, Switch, useHistory, Link} from 'react-router-dom';
import { Products } from "./pages/Products/Products";
import { User } from "./pages/User/User";
import Routes from "./routes";


function App() {
  return (
   
   <AreaGolobal>
<Menu>
 <Routes/>
 </Menu>



   </AreaGolobal>

   
  );
}

export default App;
