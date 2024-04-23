import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Default from './Pages/Default/Default';



const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Default }  path="/sobre" />
       </BrowserRouter>
   )
}

export default Routes;