import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen.js';
import SignInScreen from './SignInScreen.js';
import PricingScreen from './PricingScreen.js';
import TemplateRoute from './TemplateRoute.js';
import PrivateTemplateRoute from './PrivateTemplateRoute.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import ProductListingScreen from "./ProductListingScreen";
import ProductInfoScreen from "./ProductInfoScreen";
import Favorite from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <TemplateRoute path="/" exact={true} component={HomeScreen} />
        <PrivateTemplateRoute path="/login" exact={true} component={LoginScreen} />
        <TemplateRoute path="/pricing" exact={true} component={PricingScreen} />
        <TemplateRoute path="/register" exact={true} component={RegistrationScreen} />
        <TemplateRoute path="/listing" exact={true} component={ProductListingScreen} />
        <TemplateRoute path="/product/1" exact={true} component={ProductInfoScreen} />
        <TemplateRoute path="/favorite" exact={true} component={Favorite} />
        <TemplateRoute path="/cart" exact={true} component={ShoppingCartOutlinedIcon} />
        <TemplateRoute path="/chat" exact={true} component={ChatOutlinedIcon} />
        
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;