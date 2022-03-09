import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Products } from "./pages/Products/Products";
import { User } from "./pages/User/User";
import { Home } from "./pages/Home/Home";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({component: Component, ... rest}) =>{
    <Route {... rest} render={props => (

        isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: {from: props.location}}} />
        )
    )}/>
}

const Routes = () =>{

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/User" component={User} />
            <PrivateRoute path="/Products" component={Products}  />

        </Switch>
        
        
        </BrowserRouter>

    );
}

export default Routes