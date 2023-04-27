import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import { UserContext } from './UserContext.js';

function PrivateTemplateRoute(props) {
  var { loggedIn } = useContext( UserContext )

  if (!loggedIn) { 
      return (
          <React.Fragment>

              <Header/>
              <Route 
                  path={props.path} 
                  exact={props.exact} 
                  component={props.component}
              />
              <Footer />

          </React.Fragment>
      )
  } else {
      return (
          <Redirect to="/login"/>
      )
  }
}

export default PrivateTemplateRoute;
