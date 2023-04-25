import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen.js';
import SignInScreen from './SignInScreen.js';
import PricingScreen from './PricingScreen.js';
import TemplateRoute from './TemplateRoute.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import ProductListingScreen from "./ProductListingScreen";
import ProductInfoScreen from "./ProductInfoScreen";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <TemplateRoute path="/" exact={true} component={HomeScreen} />
        <TemplateRoute path="/login" exact={true} component={LoginScreen} />
        <TemplateRoute path="/pricing" exact={true} component={PricingScreen} />
        <TemplateRoute path="/register" exact={true} component={RegistrationScreen} />
        <TemplateRoute path="/listing" exact={true} component={ProductListingScreen} />
        <TemplateRoute path="/product/1" exact={true} component={ProductInfoScreen} />
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;